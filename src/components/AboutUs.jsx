import React from 'react';
import teamImage from '/images/team.jpg'; // Replace with your actual image path

function AboutUs() {
    return (
        <div name='About' className="py-20 bg-gray-100 relative bg-about-bg bg-no-repeat bg-fixed bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="md:w-1/2 p-10 mb-10 md:mb-0">
                        <h2 className="text-4xl font-[800] mb-6">About Us</h2>
                        <p className="text-lg text-gray-800 font-[500] mb-6">We are a passionate team of software developers dedicated to creating innovative solutions that solve real-world problems. Our mission is to empower businesses and individuals with cutting-edge technology.</p>
                        <p className="text-lg text-gray-800 font-[500] mb-6">With years of experience in the software industry, we have honed our skills in web development, mobile app development, and artificial intelligence. We pride ourselves on delivering high-quality products and exceptional customer service.</p>
                        <p className="text-lg text-gray-800 font-[500] mb-6">At Quantix, we believe in continuous learning and growth. We stay updated with the latest technologies and trends to ensure that our clients receive the best possible solutions.</p>
                    </div>
                    <div className="md:w-1/2 flex justify-around items-center">
                        <img src={teamImage} alt="Team" className="rounded-lg w-[550px] shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
