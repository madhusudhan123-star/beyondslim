import visa from '../assets/visa.png';
import logo from '../assets/logo.png';
import paypal from '../assets/paypal.png';
import head from '../assets/header_first_img.png';
import product1 from '../assets/design_one.png';
import sci from '../assets/healone.webp';
import ab1 from '../assets/about_icone.png';
// import ab2 from '../assets/about_ictwo.png';
import ab3 from '../assets/about_icthree.png';
import product from '../assets/about_product.png';
import natural from '../assets/natural.png';
import product2 from '../assets/img4.jpg';


const data = {
    ENGLISH: {
        navbar: {
            links: [
                { title: "Home", path: "/" },
                { title: "Products", path: "/products" },
                { title: "Contact", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `Achieve Your Ideal Body with <span style="color: #ff1f24;">Beyond Slim</span>`, // Inline style for color change
                description: "Transform your body with Beyond Slim's premium slimming oil. See visible results in just a few days.",
                features: [
                    "A revolutionary slimming oil for effective fat reduction and enhanced body health."
                ],
                buttonText: "Shop Now",
                img1: product1
            },
            about: {
                img: sci,
                additionalContent: {
                    title: "Why Choose Beyond Slim?",
                    description: "Beyond Slim is formulated with natural ingredients to target stubborn fat areas, improve skin elasticity, and enhance overall beauty and health.",
                    features: [
                        "Reduces stubborn fat effectively",
                        "Improves skin firmness and texture",
                        "Made with 100% natural ingredients"
                    ],
                    featuresimg: [
                        ab1,
                        ab3,
                        ab3
                    ]
                },
                product: product
            },
            faq: [ // Updated FAQ data
                {
                    question: "What is Beyond Slim?",
                    answer: "Beyond Slim is a revolutionary natural slimming oil formulated to help reduce body fat, tone the skin, and enhance overall skin health and beauty. It’s your perfect companion for a healthier, more confident you."
                },
                {
                    question: "How do I use Beyond Slim slimming oil?",
                    answer: "Apply a small amount of Beyond Slim oil to the targeted area and massage in circular motions until fully absorbed. For best results, use twice daily, preferably after a shower and before bedtime."
                },
                {
                    question: "Are the ingredients in Beyond Slim safe?",
                    answer: "Yes, Beyond Slim is made with 100% natural, safe, and skin-friendly ingredients. It is free from harmful chemicals, making it suitable for daily use on all skin types."
                },
                {
                    question: "How long does it take to see results?",
                    answer: "Results may vary depending on your body type and lifestyle. However, most users report visible improvements within 2-4 weeks of consistent use, combined with a healthy diet and exercise."
                },
                {
                    question: "Can Beyond Slim be used on all body types?",
                    answer: "Yes, Beyond Slim is designed for all body types and skin types. Its gentle formula ensures that everyone can benefit from its fat-reducing and skin-enhancing properties."
                },
                {
                    question: "Does Beyond Slim have any side effects?",
                    answer: "Beyond Slim is made from natural ingredients and is dermatologically tested, minimizing the risk of side effects. If you have sensitive skin or existing conditions, consult with a dermatologist before use."
                },
                {
                    question: "Is Beyond Slim suitable for both men and women?",
                    answer: "Absolutely! Beyond Slim is suitable for both men and women looking to achieve their slimming and skincare goals."
                },
                {
                    question: "Where can I purchase Beyond Slim slimming oil?",
                    answer: "You can purchase Beyond Slim directly from our website or authorized retailers. Visit the 'Products' page on our website to place your order."
                },
                {
                    question: "What makes Beyond Slim different from other slimming products?",
                    answer: "Unlike many slimming products, Beyond Slim combines natural fat-reducing properties with skin-enhancing benefits. It is non-greasy, fast-absorbing, and doubles as a skincare treatment."
                },
                {
                    question: "Can I use Beyond Slim if I have allergies?",
                    answer: "Beyond Slim is made with natural ingredients, but if you have specific allergies, please review the ingredient list or consult your doctor before use."
                }
            ],
            specialist: {
                title: "No.1 Slimming Specialist",
                description: "Beyond Slim is formulated with natural ingredients to target stubborn fat areas, improve skin elasticity, and enhance overall beauty and health.",
                rating: "4.9 / 5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M"
            },
            trending: {
                subtitle: "TRENDING PRODUCTS",
                title: "Top Selling Products",
                product: {
                    badge: "100% Natural Products",
                    name: "Beyond Slim",
                    rating: 5,
                    oldPrice: "30.00",
                    price: "66.00",
                    taxInfo: "Tax included.",
                    offerText: "Limited Time Offer:",
                    buttonText: "Buy Now"
                }
            }
        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "Achieve your body goals with Beyond Slim's innovative slimming oil. Experience the perfect blend of health and beauty in every drop.",
            contactInfo: {
                title: "Contact Us",
                address: "6th floor, Tirumala Heights, Begumpet, Hyderabad, Telangana 500016",
                phone: "990-852-6444",
                email: "israelitesshopping171@gmail.com"
            },
            usefulLinks: {
                title: "Quick Links",
            },
            copyright: "Copyright © Beyond Slim 2024. All rights reserved.",
            bottomLinks: {
                terms: "Terms and Conditions",
                privacy: "Privacy Policy"
            }
        },
        products: [
            {
                id: 1,
                name: "Beyond Slim",
                description: "Beyond Slim is formulated with natural ingredients to target stubborn fat areas, improve skin elasticity, and enhance overall beauty and health.",
                price: 81.50,
                oldPrice: 100.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... more products
        ],
        contact: {
            title: "Contact Us",
            subtitle: "Get in touch with us for any questions or concerns",
            phone: {
                title: "Phone",
                content: "990-852-6444"
            },
            email: {
                title: "Email",
                content: "israelitesshopping171@gmail.com"
            },
            address: {
                title: "Address",
                content: "6th floor, Tirumala Heights, Begumpet, Hyderabad, Telangana 500016"
            },
            hours: {
                title: "Business Hours",
                content: "Mon - Fri: 9:00 AM - 6:00 PM"
            },
            form: {
                title: "Send us a Message",
                name: "Your Name",
                email: "Your Email",
                phone: "Your Phone",
                subject: "Subject",
                message: "Your Message",
                submit: "Send Message",
                success: "Message sent successfully!",
                error: "Error sending message. Please try again."
            }
        },
        checkout: {
            title: "Order Summary",
            shippingTitle: "Shipping Information",
            orderSummary: {
                quantity: "Quantity",
                price: "Price",
                subtotal: "Subtotal",
                shipping: "Shipping",
                total: "Total"
            },
            formFields: {
                firstName: {
                    label: "First Name",
                    placeholder: "Enter first name",
                    error: "First name is required"
                },
                lastName: {
                    label: "Last Name",
                    placeholder: "Enter last name",
                    error: "Last name is required"
                },
                email: {
                    label: "Email",
                    placeholder: "Enter email address",
                    error: "Email is required",
                    invalidError: "Please enter a valid email address"
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "Enter 10 digit phone number",
                    error: "Phone number is required",
                    invalidError: "Phone number must be exactly 10 digits"
                },
                address: {
                    label: "Address",
                    placeholder: "Enter your address",
                    error: "Address is required"
                },
                city: {
                    label: "City",
                    placeholder: "Enter your city",
                    error: "City is required"
                },
                country: {
                    label: "Country",
                    placeholder: "Select your country",
                    error: "Country is required"
                }
            },
            successMessage: {
                title: "Order Placed Successfully!",
                description: "Thank you for your purchase. We'll send you an email confirmation shortly.",
                buttonText: "Continue Shopping"
            },
            submitError: "Error submitting form. Please try again.",
            paymentError: "Payment failed. Please try again.",
            submitButton: "Place Order"
        },
        cancel: {
            title: "Cancellation Policy",
            lastUpdated: "Last Updated: December 2024",
            sections: [
                {
                    title: "1. Cancellation Period",
                    points: [
                        "Orders can be canceled within 24 hours of placing the order.",
                        "After 24 hours, we begin processing and shipping your order, and cancellations will not be possible."
                    ]
                },
                {
                    title: "2. How to Cancel Your Order",
                    description: "To cancel your order, please follow these steps:",
                    points: [
                        "Contact Us Immediately: Reach out to our customer support team at +91990-852-6444 within 24 hours of your order.",
                        "Provide Order Details: Include your order number and reason for cancellation in your message to help us process your request faster."
                    ]
                },
                {
                    title: "3. Cancellations Post-Shipping",
                    points: [
                        "If your order has already been shipped, we will not be able to cancel it. In this case, you may return the product after receiving it.",
                        "To initiate a return, please refer to our Return Policy for further instructions."
                    ]
                },
                {
                    title: "4. Refund Process",
                    points: [
                        "Full Refunds: If your cancellation request is processed before the product is shipped, you will receive a full refund.",
                        "Partial Refunds: If you cancel the order after the product has been shipped, the cost of the product will be refunded with less shipping charges, once we receive the returned item in its original condition."
                    ]
                },
                {
                    title: "5. Non-Cancellable Conditions",
                    points: [
                        "Opened/Used Products: Once the product has been opened or used, cancellations will not be accepted. Please check the product carefully upon delivery.",
                        "Special Promotions or Offers: Orders placed under special promotions or discounts may be subject to different cancellation terms, which will be specified during the purchase process."
                    ]
                }
            ],
            footer: {
                message: "We aim to provide a seamless experience, and our customer service team is here to assist you with any issues you may encounter.",
                thankYou: "Thank you for choosing Beyond Slim. We appreciate your understanding and support!"
            }
        },
        shipping: {
            title: "Shipping Policy",
            lastUpdated: "Last Updated: December 2024",
            sections: [
                {
                    title: "1. Shipping Coverage",
                    content: [
                        {
                            subtitle: "Domestic Shipping",
                            text: "We deliver to all major cities and towns across India. Pin code verification is available at checkout. Remote locations may require additional delivery time. Certain restricted areas may not be serviceable."
                        },
                        {
                            subtitle: "International Shipping",
                            text: "We are happy to offer international shipping to customers worldwide. Our goal is to deliver your order as quickly and efficiently as possible, no matter where you are."
                        }
                    ]
                },
                {
                    title: "2. Shipping Methods",
                    content: [
                        {
                            subtitle: "Standard Delivery",
                            text: "Delivery within 5–7 business days. Available across all serviceable locations."
                        }
                    ]
                },
                {
                    title: "3. Shipping Partners",
                    text: "We work with reputed courier partners, including:",
                    list: ["Aramex", "DHL", "Blue Dart", "DTDC"]
                },
                {
                    title: "4. Order Processing",
                    content: [
                        {
                            subtitle: "Processing Time",
                            text: "Orders are processed within 24 hours of placement. Order confirmation is sent via email. Bulk orders may require additional processing time."
                        },
                        {
                            subtitle: "Order Tracking",
                            text: "A tracking number is provided via email. Customer service assistance is available for tracking queries."
                        }
                    ]
                },
                // ... continue with other sections
                {
                    title: "12. Customer Support",
                    content: [
                        {
                            subtitle: "Email",
                            text: "israelitesshopping171@gmail.com"
                        },
                        {
                            subtitle: "Phone",
                            text: "990-852-6444"
                        },
                        {
                            subtitle: "Response time",
                            text: "Within 4 business hours during operational hours."
                        }
                    ]
                },
                {
                    title: "13. Policy Updates",
                    text: "This policy is subject to change. Updates will be posted on our website. Customers will be notified via email for significant changes at least 7 days in advance. Continued use of our services implies acceptance of the updated policy."
                }
            ],
            footer: {
                text: "For more information, contact us atisraelitesshopping171@gmail.com"
            }
        },
        return: {
            title: "Return Policy",
            lastUpdated: "Last Updated: December 2024",
            sections: [
                {
                    title: "Return Eligibility",
                    content: "Your purchase is eligible for a return if it meets the following criteria: the product must be returned in its original packaging (used or unused), reach the specified address listed on our website, and arrive within 15 days of the purchase date. Damaged products will not be accepted."
                },
                {
                    title: "Refund Process",
                    content: "To process a refund, customers must initiate the return process and send the product to the specified address. Once the product is received and inspected, refunds will be credited to the original payment method within 10 business days, excluding shipping costs."
                },
                {
                    title: "Shipping Responsibility",
                    content: "The return process is customer-initiated, and customers are responsible for ensuring the product is shipped to the specified address. Return shipping costs are not covered unless the return is due to a manufacturing defect or error."
                }
            ],
            footer: {
                contact: "For any return inquiries, please contact us at israelitesshopping171@gmail.com"
            }
        },
        terms: {
            title: "Terms and Conditions",
            lastUpdated: "Last Updated: December 2024",
            sections: [
                {
                    title: "Acceptance of Terms",
                    content: "By downloading, installing, or using the Genius-Baby ('the App'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, do not use the App."
                },
                {
                    title: "License",
                    content: "Genius-Baby grants you a limited, non-exclusive, non-transferable, and revocable license to use the App for personal, non-commercial purposes, subject to these Terms."
                },
                {
                    title: "User Obligations",
                    content: "You must be at least 18 years old to use the App. You agree to use the App only for lawful purposes and in accordance with these Terms. You must not attempt to interfere with the App's operation or security."
                },
                {
                    title: "Intellectual Property",
                    content: "All content, features, and functionality (including but not limited to text, graphics, logos, and software) are owned by Genius-Baby or its licensors and are protected by copyright and other laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any part of the App without our express written permission."
                },
                {
                    title: "User-Generated Content",
                    content: "You may be able to submit, upload, or otherwise make available content (such as playlists or reviews) through the App. By doing so, you grant Genius-Baby a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, and sublicensable right to use, modify, distribute, and display such content in connection with the App."
                },
                {
                    title: "Privacy",
                    content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
                },
                {
                    title: "Termination",
                    content: "We reserve the right to terminate or suspend your access to the App at any time, with or without notice, for any reason, including if you breach these Terms."
                },
                {
                    title: "Limitation of Liability",
                    content: "To the fullest extent permitted by law, Genius-Baby App and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:- Your use or inability to use the App;- Any unauthorized access to or use of our servers and/or any personal information stored therein;- Any bugs, viruses, or the like that may be transmitted to or through the App by any third party;- Any errors or omissions in any content."
                },
                {
                    title: "Changes to Terms",
                    content: "We may modify these Terms from time to time. We will notify you of any changes by posting the new Terms on the App. Your continued use of the App after the changes are made will constitute your acceptance of the new Terms."
                },
                {
                    title: "Governing Law",
                    content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
                },
                {
                    title: "Contact Information",
                    content: "If you have any questions about these Terms, please contact us at srilogishyd@gmail.com."
                }
            ],
            footer: {
                message: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.",
                contact: "For any questions regarding our terms, please contact israelitesshopping171@gmail.com."
            }
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated: December 2024",
            sections: [
                {
                    title: "Information Collection",
                    content: "We collect personal information that you provide directly to us, such as your name, billing address, shipping address, email address, and phone number. You provide this information when you contact us through a form on the Site. We also collect non-personal information, including browser type, operating system, IP address, browsing activity, and demographic details, automatically when you use the Site."
                },
                {
                    title: "Use of Information",
                    content: "We use personal information to respond to your inquiries and requests. Non-personal information is used to enhance the Site, improve user experience, and support internal marketing efforts. We will not share your personal information with third parties without your consent, except as required by law."
                },
                {
                    title: "Cookies and Tracking",
                    content: "We use cookies and similar tracking technologies to collect non-personal information about your usage of the Site. Cookies help us remember your preferences and improve your browsing experience. Login cookies last for two days, screen options cookies last for a year, and additional cookies used during article editing expire after one day. Selecting \"Remember Me\" will extend login persistence to two weeks. Logging out will remove login cookies."
                },
                {
                    title: "Third-Party Services",
                    content: "We may use third-party service providers to operate the Site and deliver our services. These providers may have access to non-personal information. Personal information will not be shared with third parties for their marketing purposes without your consent."
                },
                {
                    title: "Security",
                    content: "We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or website is completely secure. We encourage users to take precautions when sharing personal data online."
                },
                {
                    title: "Children's Privacy",
                    content: "The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided us with personal information, please contact us to remove it."
                },
                {
                    title: "Policy Updates",
                    content: "This Privacy Policy may be updated periodically. Changes will be posted on the Site, and we encourage you to review this policy regularly to stay informed about our practices."
                }
            ],
            footer: {
                contact: "If you have any questions about our privacy practices, please contact us at israelitesshopping171@gmail.com."
            }
        }
    },
    HI: {
        navbar: {
            links: [
                { title: "होम", path: "/" },
                { title: "उत्पाद", path: "/products" },
                { title: "संपर्क करें", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `अपने आदर्श शरीर को प्राप्त करें <span style="color: #ff1f24;">बियॉन्ड स्लिम</span> के साथ`, // रंग बदलने के लिए इनलाइन स्टाइल
                description: "बियॉन्ड स्लिम के प्रीमियम स्लिमिंग ऑयल के साथ अपने शरीर को बदलें। कुछ ही दिनों में परिणाम देखें।",
                features: [
                    "वसा को प्रभावी ढंग से कम करने और शरीर के स्वास्थ्य को बढ़ाने के लिए एक क्रांतिकारी स्लिमिंग ऑयल।"
                ],
                buttonText: "अभी खरीदें",
                img1: product1
            },
            about: {
                img: sci,
                additionalContent: {
                    title: "बियॉन्ड स्लिम क्यों चुनें?",
                    description: "बियॉन्ड स्लिम को प्राकृतिक सामग्री के साथ तैयार किया गया है ताकि जिद्दी वसा को लक्षित किया जा सके, त्वचा की लोच में सुधार किया जा सके, और समग्र सौंदर्य और स्वास्थ्य को बढ़ावा दिया जा सके।",
                    features: [
                        "जिद्दी वसा को प्रभावी रूप से कम करता है",
                        "त्वचा की मजबूती और बनावट में सुधार करता है",
                        "100% प्राकृतिक सामग्री से बना"
                    ],
                    featuresimg: [
                        ab1,
                        ab3,
                        ab3
                    ]
                },
                product: product
            },
            faq: [ // अपडेटेड FAQ डेटा
                {
                    question: "बियॉन्ड स्लिम क्या है?",
                    answer: "बियॉन्ड स्लिम एक क्रांतिकारी प्राकृतिक स्लिमिंग ऑयल है जिसे शरीर की वसा को कम करने, त्वचा को टोन करने और समग्र त्वचा के स्वास्थ्य और सुंदरता को बढ़ाने के लिए तैयार किया गया है। यह आपके स्वस्थ, आत्मविश्वासपूर्ण जीवन का सही साथी है।"
                },
                {
                    question: "मैं बियॉन्ड स्लिम स्लिमिंग ऑयल का उपयोग कैसे करूं?",
                    answer: "थोड़ी मात्रा में बियॉन्ड स्लिम ऑयल को लक्षित क्षेत्र पर लगाएं और पूरी तरह से अवशोषित होने तक गोलाकार गति में मालिश करें। सर्वोत्तम परिणामों के लिए, इसे दिन में दो बार, नहाने के बाद और सोने से पहले उपयोग करें।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम की सामग्री सुरक्षित है?",
                    answer: "हां, बियॉन्ड स्लिम 100% प्राकृतिक, सुरक्षित और त्वचा के अनुकूल सामग्री से बना है। यह हानिकारक रसायनों से मुक्त है, जिससे यह सभी प्रकार की त्वचा पर दैनिक उपयोग के लिए उपयुक्त है।"
                },
                {
                    question: "परिणाम देखने में कितना समय लगता है?",
                    answer: "परिणाम आपके शरीर के प्रकार और जीवनशैली पर निर्भर हो सकते हैं। हालांकि, अधिकांश उपयोगकर्ता 2-4 सप्ताह की नियमित उपयोग और स्वस्थ आहार और व्यायाम के संयोजन के बाद दृश्यमान सुधार की रिपोर्ट करते हैं।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम सभी प्रकार के शरीर पर उपयोग किया जा सकता है?",
                    answer: "हां, बियॉन्ड स्लिम को सभी प्रकार के शरीर और त्वचा के प्रकारों के लिए डिज़ाइन किया गया है। इसका हल्का फॉर्मूला सुनिश्चित करता है कि हर कोई इसके वसा-घटाने और त्वचा-सुधार गुणों से लाभ उठा सके।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम का कोई साइड इफेक्ट है?",
                    answer: "बियॉन्ड स्लिम प्राकृतिक सामग्री से बना है और डर्मेटोलॉजिकली टेस्ट किया गया है, जिससे साइड इफेक्ट्स का खतरा कम हो जाता है। यदि आपकी त्वचा संवेदनशील है या मौजूदा स्थितियां हैं, तो उपयोग से पहले त्वचा विशेषज्ञ से परामर्श करें।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम पुरुषों और महिलाओं दोनों के लिए उपयुक्त है?",
                    answer: "बिल्कुल! बियॉन्ड स्लिम पुरुषों और महिलाओं दोनों के लिए उनके स्लिमिंग और स्किनकेयर लक्ष्यों को प्राप्त करने के लिए उपयुक्त है।"
                },
                {
                    question: "मैं बियॉन्ड स्लिम स्लिमिंग ऑयल कहां से खरीद सकता हूं?",
                    answer: "आप बियॉन्ड स्लिम को सीधे हमारी वेबसाइट या अधिकृत रिटेलर्स से खरीद सकते हैं। हमारी वेबसाइट के 'उत्पाद' पृष्ठ पर जाएं और अपना ऑर्डर दें।"
                },
                {
                    question: "बियॉन्ड स्लिम को अन्य स्लिमिंग उत्पादों से अलग क्या बनाता है?",
                    answer: "कई स्लिमिंग उत्पादों के विपरीत, बियॉन्ड स्लिम प्राकृतिक वसा-घटाने वाले गुणों को त्वचा-सुधार लाभों के साथ जोड़ता है। यह गैर-चिकना, तेज़-अवशोषित और त्वचा देखभाल उपचार के रूप में भी कार्य करता है।"
                },
                {
                    question: "क्या मैं बियॉन्ड स्लिम का उपयोग एलर्जी होने पर कर सकता हूं?",
                    answer: "बियॉन्ड स्लिम प्राकृतिक सामग्री से बना है, लेकिन यदि आपको विशेष एलर्जी है, तो उपयोग से पहले सामग्री सूची की समीक्षा करें या अपने डॉक्टर से परामर्श करें।"
                }
            ],
            specialist: {
                title: "नं.1 स्लिमिंग विशेषज्ञ",
                description: "बियॉन्ड स्लिम प्राकृतिक अवयवों से तैयार किया गया है जो जिद्दी फैट वाले हिस्सों को टारगेट करता है, त्वचा की लचीलापन को सुधारता है, और समग्र सौंदर्य और स्वास्थ्य को बढ़ावा देता है।",
                rating: "4.9 / 5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M"
            },
            trending: {
                subtitle: "ट्रेंडिंग उत्पाद",
                title: "टॉप सेलिंग प्रोडक्ट्स",
                product: {
                    badge: "100% प्राकृतिक उत्पाद",
                    name: "Beyond Slim",
                    rating: 5,
                    oldPrice: "30.00",
                    price: "66.00",
                    taxInfo: "कर शामिल।",
                    offerText: "सीमित समय की पेशकश:",
                    buttonText: "अभी खरीदें"
                }
            }
        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "बियॉन्ड स्लिम के इनोवेटिव स्लिमिंग ऑयल के साथ अपने शरीर के लक्ष्य प्राप्त करें। प्रत्येक बूँद में स्वास्थ्य और सुंदरता का सही संयोजन अनुभव करें।",
            contactInfo: {
                title: "हमसे संपर्क करें",
                address: "6th floor, Tirumala Heights, Begumpet, Hyderabad, Telangana 500016",
                phone: "990-852-6444",
                email: "support@beyondslim.com"
            },
            usefulLinks: {
                title: "त्वरित लिंक",
                links: [
                    "यह कैसे काम करता है",
                    "उत्पाद वापसी",
                    "भुगतान के तरीके",
                    "हमारी कहानी",
                    "पूछे जाने वाले प्रश्न",
                    "शिपिंग जानकारी"
                ]
            },
            copyright: "कॉपीराइट © बियॉन्ड स्लिम 2024। सभी अधिकार सुरक्षित।",
            bottomLinks: {
                terms: "नियम और शर्तें",
                privacy: "गोपनीयता नीति"
            }
        },
        products: [
            {
                id: 1,
                name: "बियॉन्ड स्लिम",
                description: "बियॉन्ड स्लिम प्राकृतिक अवयवों से तैयार किया गया है, जो जिद्दी फैट वाले हिस्सों को टारगेट करता है, त्वचा की लोच को सुधारता है और समग्र सौंदर्य एवं स्वास्थ्य को बढ़ावा देता है।",
                price: 81.50,
                oldPrice: 100.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... अन्य उत्पाद
        ],
        contact: {
            title: "हमसे संपर्क करें",
            subtitle: "किसी भी प्रश्न या चिंता के लिए हमसे संपर्क करें",
            phone: {
                title: "फ़ोन",
                content: "990-852-6444"
            },
            email: {
                title: "ईमेल",
                content: "israelitesshopping171@gmail.com"
            },
            address: {
                title: "पता",
                content: "6th floor, Tirumala Heights, Begumpet, Hyderabad, Telangana 500016"
            },
            hours: {
                title: "व्यवसाय के घंटे",
                content: "सोम - शुक्र: सुबह 9:00 बजे - शाम 6:00 बजे"
            },
            form: {
                title: "हमें एक संदेश भेजें",
                name: "आपका नाम",
                email: "आपका ईमेल",
                phone: "आपका फोन",
                subject: "विषय",
                message: "आपका संदेश",
                submit: "संदेश भेजें",
                success: "संदेश सफलतापूर्वक भेजा गया!",
                error: "संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।"
            }
        },
        checkout: {
            title: "ऑर्डर सारांश",
            shippingTitle: "शिपिंग जानकारी",
            orderSummary: {
                quantity: "मात्रा",
                price: "कीमत",
                subtotal: "उपभोग की मात्रा",
                shipping: "शिपिंग शुल्क",
                total: "कुल"
            },
            formFields: {
                firstName: {
                    label: "पहला नाम",
                    placeholder: "पहला नाम दर्ज करें",
                    error: "पहला नाम आवश्यक है"
                },
                lastName: {
                    label: "अंतिम नाम",
                    placeholder: "अंतिम नाम दर्ज करें",
                    error: "अंतिम नाम आवश्यक है"
                },
                email: {
                    label: "ईमेल",
                    placeholder: "ईमेल पता दर्ज करें",
                    error: "ईमेल आवश्यक है",
                    invalidError: "कृपया एक वैध ईमेल पता दर्ज करें"
                },
                phone: {
                    label: "फ़ोन नंबर",
                    placeholder: "10 अंकों का फोन नंबर दर्ज करें",
                    error: "फ़ोन नंबर आवश्यक है",
                    invalidError: "फ़ोन नंबर बिल्कुल 10 अंक का होना चाहिए"
                },
                address: {
                    label: "पता",
                    placeholder: "अपना पता दर्ज करें",
                    error: "पता आवश्यक है"
                },
                city: {
                    label: "शहर",
                    placeholder: "अपना शहर दर्ज करें",
                    error: "शहर आवश्यक है"
                },
                country: {
                    label: "देश",
                    placeholder: "अपना देश चुनें",
                    error: "देश आवश्यक है"
                }
            },
            successMessage: {
                title: "ऑर्डर सफलतापूर्वक प्लेस किया गया!",
                description: "खरीदारी के लिए धन्यवाद। हम आपको जल्द ही एक ईमेल पुष्टिकरण भेजेंगे।",
                buttonText: "शॉपिंग जारी रखें"
            },
            submitError: "फॉर्म जमा करने में त्रुटि। कृपया पुनः प्रयास करें।",
            paymentError: "भुगतान विफल। कृपया पुनः प्रयास करें।",
            submitButton: "ऑर्डर प्लेस करें"
        },
        cancel: {
            title: "रद्दीकरण नीति",
            lastUpdated: "अंतिम अपडेट: अक्टूबर 2023",
            sections: [
                {
                    title: "1. रद्दीकरण अवधि",
                    points: [
                        "ऑर्डर करने के 24 घंटे के भीतर ऑर्डर रद्द किया जा सकता है।",
                        "24 घंटे के बाद, हम आपके ऑर्डर को प्रोसेस और शिप करना शुरू कर देते हैं, और रद्दीकरण संभव नहीं होगा।"
                    ]
                },
                {
                    title: "2. अपना ऑर्डर कैसे रद्द करें",
                    description: "अपना ऑर्डर रद्द करने के लिए, कृपया इन चरणों का पालन करें:",
                    points: [
                        "तुरंत संपर्क करें: अपने ऑर्डर के 24 घंटे के भीतर हमारी ग्राहक सहायता टीम से +91990-852-6444 पर संपर्क करें।",
                        "ऑर्डर विवरण प्रदान करें: अपने संदेश में ऑर्डर नंबर और रद्दीकरण का कारण शामिल करें ताकि हम आपके अनुरोध को तेजी से प्रोसेस कर सकें।"
                    ]
                },
                {
                    title: "3. शिपिंग के बाद रद्दीकरण",
                    points: [
                        "यदि आपका ऑर्डर पहले ही शिप कर दिया गया है, तो हम इसे रद्द नहीं कर सकेंगे। इस स्थिति में, आप प्रोडक्ट प्राप्त करने के बाद इसे वापस कर सकते हैं।",
                        "रिटर्न शुरू करने के लिए, कृपया आगे के निर्देशों के लिए हमारी रिटर्न पॉलिसी देखें।"
                    ]
                },
                {
                    title: "4. रिफंड प्रक्रिया",
                    points: [
                        "पूर्ण रिफंड: यदि आपका रद्दीकरण अनुरोध प्रोडक्ट शिप होने से पहले प्रोसेस हो जाता है, तो आपको पूर्ण रिफंड मिलेगा।",
                        "आंशिक रिफंड: यदि आप प्रोडक्ट शिप होने के बाद ऑर्डर रद्द करते हैं, तो प्रोडक्ट की लागत शिपिंग चार्ज घटाकर रिफंड की जाएगी, जब हमें वापस किया गया आइटम मूल स्थिति में प्राप्त होगा।"
                    ]
                },
                {
                    title: "5. गैर-रद्दीकरण स्थितियां",
                    points: [
                        "खोले/इस्तेमाल किए गए प्रोडक्ट: एक बार प्रोडक्ट खोले या इस्तेमाल किए जाने के बाद, रद्दीकरण स्वीकार नहीं किए जाएंगे। कृपया डिलीवरी पर प्रोडक्ट को ध्यान से जांचें।",
                        "विशेष प्रमोशन या ऑफर: विशेष प्रमोशन या छूट के तहत किए गए ऑर्डर अलग रद्दीकरण शर्तों के अधीन हो सकते हैं, जो खरीद प्रक्रिया के दौरान निर्दिष्ट किए जाएंगे।"
                    ]
                }
            ],
            footer: {
                message: "हम एक सहज अनुभव प्रदान करने का प्रयास करते हैं, और हमारी ग्राहक सेवा टीम आपको किसी भी समस्या में सहायता करने के लिए उपलब्ध है।",
                thankYou: "बियॉन्ड स्लिम चुनने के लिए धन्यवाद। हम आपकी समझ और समर्थन की सराहना करते हैं!"
            }
        },
        shipping: {
            "title": "शिपिंग नीति",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "1. शिपिंग कवरेज",
                    "content": [
                        {
                            "subtitle": "घरेलू शिपिंग",
                            "text": "हम भारत के सभी प्रमुख शहरों और कस्बों में डिलीवरी करते हैं। पिन कोड सत्यापन चेकआउट पर उपलब्ध है। दूरस्थ स्थानों में अतिरिक्त डिलीवरी समय लग सकता है। कुछ प्रतिबंधित क्षेत्रों में सेवा उपलब्ध नहीं हो सकती।"
                        },
                        {
                            "subtitle": "अंतर्राष्ट्रीय शिपिंग",
                            "text": "हम दुनिया भर के ग्राहकों को अंतर्राष्ट्रीय शिपिंग प्रदान करने के लिए उत्सुक हैं। हमारा लक्ष्य आपके ऑर्डर को शीघ्रता और कुशलता से वितरित करना है, चाहे आप कहीं भी हों।"
                        }
                    ]
                },
                {
                    "title": "2. शिपिंग विधियाँ",
                    "content": [
                        {
                            "subtitle": "मानक डिलीवरी",
                            "text": "डिलीवरी 5-7 कार्यदिवसों के भीतर। सभी सेवा क्षेत्रों में उपलब्ध।"
                        }
                    ]
                },
                {
                    "title": "3. शिपिंग पार्टनर्स",
                    "text": "हम निम्नलिखित प्रतिष्ठित कुरियर पार्टनर्स के साथ काम करते हैं:",
                    "list": ["अरामेक्स", "डीएचएल", "ब्लू डार्ट", "डीटीडीसी"]
                },
                {
                    "title": "4. ऑर्डर प्रोसेसिंग",
                    "content": [
                        {
                            "subtitle": "प्रोसेसिंग समय",
                            "text": "ऑर्डर प्लेसमेंट के 24 घंटे के भीतर प्रोसेस किए जाते हैं। ऑर्डर कन्फर्मेशन ईमेल द्वारा भेजा जाता है। बल्क ऑर्डर्स में अतिरिक्त प्रोसेसिंग समय लग सकता है।"
                        },
                        {
                            "subtitle": "ऑर्डर ट्रैकिंग",
                            "text": "ट्रैकिंग नंबर ईमेल के माध्यम से प्रदान किया जाता है। ट्रैकिंग प्रश्नों के लिए ग्राहक सेवा सहायता उपलब्ध है।"
                        }
                    ]
                },
                {
                    "title": "12. ग्राहक सहायता",
                    "content": [
                        {
                            "subtitle": "ईमेल",
                            "text": "israelitesshopping171@gmail.com"
                        },
                        {
                            "subtitle": "फ़ोन",
                            "text": "990-852-6444"
                        },
                        {
                            "subtitle": "प्रतिक्रिया समय",
                            "text": "ऑपरेशनल घंटों के दौरान 4 कार्य घंटों के भीतर।"
                        }
                    ]
                },
                {
                    "title": "13. नीति अपडेट",
                    "text": "यह नीति परिवर्तन के अधीन है। अपडेट हमारी वेबसाइट पर पोस्ट किए जाएंगे। महत्वपूर्ण परिवर्तनों के लिए ग्राहकों को ईमेल द्वारा कम से कम 7 दिन पहले सूचित किया जाएगा। हमारी सेवाओं का निरंतर उपयोग अपडेटेड नीति की स्वीकृति को दर्शाता है।"
                }
            ],
            "footer": {
                "text": "अधिक जानकारी के लिए, हमसे संपर्क करें: israelitesshopping171@gmail.com"
            }
        },
        return: {
            "title": "वापसी नीति",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "वापसी की पात्रता",
                    "content": "आपकी खरीदारी तभी वापसी योग्य है यदि यह निम्नलिखित मानदंडों को पूरा करती है: उत्पाद को इसकी मूल पैकेजिंग में लौटाया जाना चाहिए (उपयोग किया हुआ या अनुपयोगी), हमारी वेबसाइट पर सूचीबद्ध पते पर पहुंचना चाहिए, और खरीदारी की तारीख के 15 दिनों के भीतर आना चाहिए। क्षतिग्रस्त उत्पाद स्वीकार नहीं किए जाएंगे।"
                },
                {
                    "title": "रिफंड प्रक्रिया",
                    "content": "रिफंड प्रक्रिया शुरू करने के लिए ग्राहक को उत्पाद को निर्दिष्ट पते पर भेजना होगा। उत्पाद प्राप्त और निरीक्षण किए जाने के बाद, रिफंड मूल भुगतान विधि में 10 कार्यदिवसों के भीतर श्रेय किया जाएगा, जिसमें शिपिंग लागत शामिल नहीं है।"
                },
                {
                    "title": "शिपिंग जिम्मेदारी",
                    "content": "वापसी प्रक्रिया ग्राहक द्वारा शुरू की जाती है, और ग्राहक यह सुनिश्चित करने के लिए जिम्मेदार हैं कि उत्पाद निर्दिष्ट पते पर भेजा गया है। यदि वापसी निर्माण दोष या त्रुटि के कारण होती है, तो रिटर्न शिपिंग लागत कवर की जाएगी।"
                }
            ],
            "footer": {
                "contact": "किसी भी वापसी के प्रश्न के लिए, कृपया हमसे संपर्क करें: israelitesshopping171@gmail.com"
            }
        },
        terms: {
            "title": "नियम और शर्तें",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "नियमों की स्वीकृति",
                    "content": "Genius-Baby ('ऐप') को डाउनलोड, इंस्टॉल, या उपयोग करके, आप इन नियमों और शर्तों ('नियम') से सहमत होते हैं। यदि आप इन नियमों से सहमत नहीं हैं, तो ऐप का उपयोग न करें।"
                },
                {
                    "title": "लाइसेंस",
                    "content": "Genius-Baby आपको इन नियमों के अधीन व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए एक सीमित, गैर-विशिष्ट, गैर-हस्तांतरणीय, और रद्द करने योग्य लाइसेंस प्रदान करता है।"
                },
                // ...
            ],
            "footer": {
                "message": "हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। हमारी सेवाओं का निरंतर उपयोग किसी भी परिवर्तन की स्वीकृति को दर्शाता है।",
                "contact": "हमारे नियमों के बारे में किसी भी प्रश्न के लिए, कृपया संपर्क करें: israelitesshopping171@gmail.com।"
            }
        },
        privacy: {
            "title": "गोपनीयता नीति",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "जानकारी संग्रह",
                    "content": "हम वह व्यक्तिगत जानकारी इकट्ठा करते हैं जो आप हमें सीधे प्रदान करते हैं, जैसे आपका नाम, बिलिंग पता, शिपिंग पता, ईमेल पता, और फ़ोन नंबर। हम स्वचालित रूप से ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, आईपी पता, ब्राउज़िंग गतिविधि, और जनसांख्यिकीय विवरण सहित गैर-व्यक्तिगत जानकारी भी एकत्र करते हैं।"
                },
                // ...
            ],
            "footer": {
                "contact": "हमारी गोपनीयता प्रथाओं के बारे में किसी भी प्रश्न के लिए, कृपया संपर्क करें: israelitesshopping171@gmail.com।"
            }
        }

    }
};

export default data;