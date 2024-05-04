import React from 'react';
import heroimg from '/images/home-hero-img.png';

function Home() {
    return (
        <div name="Home" className="pt-[150px] flex flex-col p-20 md:flex-row justify-around items-center relative bg-home-bg bg-no-repeat bg-fixed h-[100vh] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
            <div className='w-[55%] text-white'>
                <h1 className='text-5xl font-[800] leading-[60px] mb-1'>Mobile App .</h1>
                <h1 className='text-5xl font-[800] leading-[60px] mb-1'>Website .</h1>
                <h1 className='text-5xl font-[800] leading-[60px] mb-3'>Development .</h1>
                <p className='text-[18px] font-[500] mb-6 leading-9'>Quantix Technology & Consulting Services, LLP is a technology and consulting firm dedicated to providing innovative solutions to improve quality and deliver exceptional user experiences. We specialize in leveraging the power of AI to create products that cater to the needs of tomorrow.</p>
            </div>
            <div>
                <img src={heroimg} className='w-[450px]' alt='' />
            </div>
        </div>
    );
}

export default Home;
