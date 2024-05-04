import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import '../index.css'

function Services() {
    const services = [
        {
            title: 'Web Development',
            description: 'We create responsive and user-friendly websites tailored to your business needs. Our expertise includes front-end and back-end development, ensuring a seamless experience for your users.',
            icon: FaLaptopCode,
        },
        {
            title: 'Mobile App Development',
            description: 'From iOS to Android, we specialize in building native and cross-platform mobile applications. Our team will work closely with you to turn your ideas into feature-rich mobile apps.',
            icon: FaMobileAlt,
        },
        {
            title: 'Graphic Designing',
            description: 'Our talented graphic designers will bring your brand to life with stunning visuals and captivating designs. From logos and branding to marketing materials, we\'ll help you make a lasting impression.',
            icon: FaPaintBrush,
        },
    ];

    return (
        <section name="Service" id="service" className="relative bg-home-bg bg-cover bg-center bg-no-repeat bg-fixed py-[120px] px-20 bg-gray-300">
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
            <div className="container mx-auto px-4 z-20 relative">
                <h2 className="text-4xl font-bold text-center text-white mb-10">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-10 transform transition duration-300 hover:scale-105">
                            <div className="flex items-center justify-center mb-6">
                                <service.icon className="text-5xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl text-center font-semibold mb-4">{service.title}</h3>
                            <p className="text-gray-700 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Services;
