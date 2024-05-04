import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
    {
        id: 1,
        name: 'Harish Kumar',
        position: 'Full Stack Developer',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    },
    {
        id: 2,
        name: 'Adhavan',
        position: 'Web Developer',
        quote: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        name: 'Saran',
        position: 'Data Scientist',
        quote: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    return (
        <section name="Testimonials" className="p-[120px] px-40 bg-test-bg bg-no-repeat bg-fixed bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
            <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-center mb-[60px]">Testimonials</h2>
                <div className="relative w-2/3">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 text-gray-800 py-2 px-4 rounded-l-full cursor-pointer" onClick={prevTestimonial}>
                        <FaChevronLeft />
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-0 text-gray-800 py-2 px-4 rounded-r-full cursor-pointer" onClick={nextTestimonial}>
                        <FaChevronRight />
                    </div>
                    <div className="px-20 p-10 h-[250px] flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4 text-center w-5/6">{testimonialsData[activeIndex].quote}</p>
                        <div className="flex items-center justify-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src={`https://randomuser.me/api/portraits/men/${testimonialsData[activeIndex].id}.jpg`} alt={testimonialsData[activeIndex].name} />
                            </div>
                            <div className="ml-4">
                                <div className="text-lg font-semibold text-gray-800">{testimonialsData[activeIndex].name}</div>
                                <div className="text-gray-600">{testimonialsData[activeIndex].position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
