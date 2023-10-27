"use client"
import Image from 'next/image';
import CustomButton from '@/components/CustomButton'

const Hero = () => {

    const handleScroll =() => {

    }

    return (
        <div className="hero">
           <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book or rent a car quickly
            </h1>
            <p className='hero__subtitle'>
                Experience the best car rental or sale service with our company.
            </p>

            <CustomButton 
                title="Explore cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
           </div>
           <div className='hero__image-container'></div>
        </div>
    )
}

export default Hero;