import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import data from '../utils/data';

// Constants for currency conversion
const USD_TO_AED_RATE = 3.67;
const SHIPPING_CHARGE = 0;

const Checkout = () => {
    const paypalRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { currentLang } = useLanguage();
    const checkoutData = data[currentLang].checkout;
    const orderDetails = location.state;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: 'United Arab Emirates',
    });

    const [formErrors, setFormErrors] = useState({});

    // Convert AED to USD for PayPal
    const convertToUSD = (aedAmount) => {
        return Number((parseFloat(aedAmount) / USD_TO_AED_RATE).toFixed(2));
    };

    useEffect(() => {
        if (!orderDetails) {
            navigate('/product');
            return;
        }

        // Only load PayPal if form is complete
        if (formComplete) {
            const addPayPalScript = async () => {
                if (window.paypal) {
                    // If PayPal is already loaded, just render the buttons
                    if (paypalRef.current) {
                        const totalInAED = orderDetails.totalAmount + SHIPPING_CHARGE;
                        const totalInUSD = convertToUSD(totalInAED);

                        window.paypal.Buttons({
                            createOrder: (data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            currency_code: "USD",
                                            value: totalInUSD
                                        }
                                    }]
                                });
                            },
                            onApprove: async (data, actions) => {
                                const order = await actions.order.capture();
                                setPaymentSuccess(true);
                                console.log('Payment successful:', order);
                            },
                            onError: (err) => {
                                console.error('PayPal error:', err);
                                setFormErrors(prev => ({
                                    ...prev,
                                    submit: "Payment failed. Please try again."
                                }));
                            }
                        }).render(paypalRef.current);
                    }
                    return;
                }

                const script = document.createElement('script');
                script.src = "https://www.paypal.com/sdk/js?client-id=AczLbxl8aDfScqrlsdIV6gbnFj18Z9n2Cm5F0lJU95vPjzy2QQ4LxDtgoNIfAVXmVlfXx9iDETjRwjXA&currency=USD";
                script.async = true;
                document.body.appendChild(script);

                script.onload = () => {
                    if (paypalRef.current) {
                        const totalInAED = orderDetails.totalAmount + SHIPPING_CHARGE;
                        const totalInUSD = convertToUSD(totalInAED);

                        window.paypal.Buttons({
                            createOrder: (data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            currency_code: "USD",
                                            value: totalInUSD
                                        }
                                    }]
                                });
                            },
                            onApprove: async (data, actions) => {
                                const order = await actions.order.capture();
                                setPaymentSuccess(true);
                                console.log('Payment successful:', order);
                            },
                            onError: (err) => {
                                console.error('PayPal error:', err);
                                setFormErrors(prev => ({
                                    ...prev,
                                    submit: "Payment failed. Please try again."
                                }));
                            }
                        }).render(paypalRef.current);
                    }
                };

                return () => {
                    document.body.removeChild(script);
                };
            };

            addPayPalScript();
        }
    }, [orderDetails, navigate, formComplete]);

    // Redirect if no order details
    if (!orderDetails) {
        navigate('/product');
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Special handling for phone input
        if (name === 'phone') {
            // Remove any non-digit characters
            const phoneValue = value.replace(/\D/g, '');
            // Limit to 10 digits
            const truncatedPhone = phoneValue.slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: truncatedPhone
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        // Existing validations
        if (!formData.firstName) errors.firstName = 'First name is required';
        if (!formData.lastName) errors.lastName = 'Last name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.city) errors.city = 'City is required';

        // Enhanced phone validation
        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number must be exactly 10 digits';
        }

        // Email validation
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Update formComplete state based on validation
        setFormComplete(Object.keys(errors).length === 0);
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);

            try {
                // Send form data via FormSubmit
                const response = await fetch('https://formsubmit.co/ajax/dmadhusudhan98@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        orderNumber: Date.now(), // Generate unique order number
                        customerDetails: {
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            phone: formData.phone,
                            address: formData.address,
                            city: formData.city,
                            country: formData.country
                        },
                        orderDetails: {
                            productName: orderDetails.productName,
                            quantity: orderDetails.quantity,
                            price: orderDetails.price,
                            totalAmount: orderDetails.totalAmount,
                            currency: 'AED'
                        },
                        _template: 'table',
                        _subject: `New Order - ${orderDetails.productName}`,
                        _captcha: 'false'
                    })
                });

                const result = await response.json();

                if (result.success) {
                    setFormComplete(true);
                    // After successful email submission, show PayPal button
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                setFormErrors(prev => ({
                    ...prev,
                    submit: "Error submitting form. Please try again."
                }));
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">{checkoutData.title}</h2>
                        <div className="flex items-center mb-4">
                            <img
                                src={orderDetails.productImage}
                                alt={orderDetails.productName}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div className="ml-4">
                                <h3 className="font-semibold">{orderDetails.productName}</h3>
                                <p className="text-gray-600">
                                    {checkoutData.orderSummary.quantity}: {orderDetails.quantity}
                                </p>
                                <p className="text-gray-600">
                                    {checkoutData.orderSummary.price}: ${orderDetails.price}
                                </p>
                            </div>
                        </div>
                        <div className="border-t pt-4">
                            <div className="flex justify-between text-xl font-bold">
                                <span>{checkoutData.orderSummary.total}:</span>
                                <span>${orderDetails.totalAmount}</span>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">{checkoutData.shippingTitle}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {checkoutData.formFields.firstName.label}
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder={checkoutData.formFields.firstName.placeholder}
                                        className={`mt-1 block w-full rounded-md border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                                            } p-2`}
                                    />
                                    {formErrors.firstName && (
                                        <p className="text-red-500 text-sm">
                                            {checkoutData.formFields.firstName.error}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {checkoutData.formFields.lastName.label}
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder={checkoutData.formFields.lastName.placeholder}
                                        className={`mt-1 block w-full rounded-md border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                                            } p-2`}
                                    />
                                    {formErrors.lastName && (
                                        <p className="text-red-500 text-sm">
                                            {checkoutData.formFields.lastName.error}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.email.label}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.email.placeholder}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.email.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.phone.label}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.phone.placeholder}
                                    maxLength="10"
                                    className={`mt-1 block w-full rounded-md border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'
                                        } p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {formErrors.phone && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.phone.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.address.label}
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.address.placeholder}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.address ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                />
                                {formErrors.address && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.address.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.city.label}
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.city.placeholder}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.city ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                />
                                {formErrors.city && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.city.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.country.label}
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                                >
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                </select>
                            </div>

                            <div className="mt-6">
                                {!formComplete ? (
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg
                                            transition-all duration-200 transform hover:scale-105
                                            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mb-4"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Processing...
                                            </div>
                                        ) : (
                                            'Validate Information'
                                        )}
                                    </button>
                                ) : (
                                    <>
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                            <p className="text-green-600 text-center">
                                                Information validated! Please proceed with payment.
                                            </p>
                                        </div>
                                        <div ref={paypalRef}></div>
                                    </>
                                )}

                                {formErrors.submit && (
                                    <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-center">
                                        {formErrors.submit}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Message */}
            {paymentSuccess && (
                <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                    <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">
                            {checkoutData.successMessage.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            {checkoutData.successMessage.description}
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            {checkoutData.successMessage.buttonText}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;