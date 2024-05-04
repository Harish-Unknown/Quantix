import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function NavBar() {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMenu = () => {
        setClick(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const bgClass = scrolled ? 'bg-black bg-opacity-70' : '';

    const content = (
        <div className='lg:hidden block absolute top-24 w-full left-0 right-0 shadow-xl bg-[transparent]  transition'>
            <ul className='text-center text-xl p-10'>
                <Link smooth duration={500} to="Home" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Home</li>
                </Link>
                <Link smooth duration={500} to="About" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>About</li>
                </Link>
                <Link smooth duration={500} to="Service" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Services</li>
                </Link>
                <Link smooth duration={500} to="Testimonials" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Testimonials</li>
                </Link>
                <div className='flex justify-center items-center'>
                    <button className='text-white text-[18px] bg-[#3673e5] px-5 py-2 my-3 mx-auto block'>Contact Us</button>
                </div>
            </ul>
        </div>
    );

    return (
        <nav className={`fixed w-full top-0 z-50 ${bgClass}`}>
            <div className='h-[100px] font-bold flex justify-between z-50 text-[#E3E4DB] py-[12px] px-10 lg:px-20'>
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-[800]'>Quantix</h1>
                        <h5 className='text-md'>Technology & Consulting Services, LLP</h5>
                    </div>
                </div>
                <div className='lg:flex md:flex lg: flex-1  justify-center font-normal hidden items-center'>
                    <div className='flex'>
                        <ul className='flex gap-8 font-[600] lg:gap-12 items-center text-[15px] lg:text-[18px]'>
                            <Link smooth duration={500} to="Home" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Home</li>
                            </Link>
                            <Link smooth duration={500} to="About" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>About</li>
                            </Link>
                            <Link smooth duration={500} to="Service" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Services</li>
                            </Link>
                            <Link smooth duration={500} to="Testimonials" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Testimonials</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center'>
                    <button className='text-white text-[18px] bg-[#3673e5] px-5 py-2 my-3 mx-auto block'>Contact Us</button>
                </div>
                <div>
                    {click && content}
                </div>
                <button className='block md:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes className='text-2xl' /> : <CiMenuFries className='text-2xl font-bold' />}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
