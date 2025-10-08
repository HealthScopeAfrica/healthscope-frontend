import React from 'react'
import Button from './button'
import { Link } from 'react-router'
import { useMediaQuery } from '@uidotdev/usehooks'

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    return (
        <footer className='w-full mt-auto pt-6 flex flex-col bg-[#EBF6F3]'>
            <div className="flex flex-col md:flex-row gap-4 w-full px-4 md:px-20">
                <div className="flex py-2 gap-10 flex-col w-full md:w-3/5">
                    <h2 className="text-2xl md:text-5xl font-semibold leading-[100%] -tracking-[4%]">Healthscope</h2>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col gap-5">
                                <p className="text-lg md:text-4xl leading-[120%] -tracking-[4%] font-medium">Subscribe to Healthscope Newsletter</p>
                                <p className="text-sm md:text-2xl leading-[120%] -tracking-[2%] font-light">Get weekly wellness tips and expert medical insights</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:w-full">
                        <input type="text" placeholder='Enter your email address' className="rounded-l-md px-4 bg-[#EDF2FD] md:flex-1" />
                        <Button size={isMobile ? 'sm' : 'default'} className="bg-primary rounded-l-none rounded-r-md">Subscribe</Button>
                    </div>
                    <p className="text-sm leading-[120%] -tracking-[2%] text-gray-600">By subscribing, you agree to our <a className="underline" href="#">terms of use</a> and <a className="underline" href="#">privacy policy</a> you may unsubscribe at anytime.</p>
                </div>
                <div className="flex justify-center md:justify-end items-center w-full md:w-2/5 mb-2">
                    <div className="grid grid-cols-4 md:grid-cols-2 gap-1 md:gap-4 text-xs md:text-sm leading-[120%] -tracking-[2%] text-center">
                        <Link to="#" className="leading-[120%] -tracking-[2%] text-center">About Us</Link>
                        <Link to="#" className="leading-[120%] -tracking-[2%] text-center">Privacy Policy</Link>
                        <Link to="#" className="leading-[120%] -tracking-[2%] text-center">Contact Us</Link>
                        <Link to="#" className="leading-[120%] -tracking-[2%] text-center">Terms of Use</Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#24765C] p-4 md:py-15 md:px-20 flex leading-[120%] flex-col gap-4 md:gap-[69px] text-white">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col w-[225px] gap-4">
                        <img src="/footer.jpg" alt="" className="w-full h-[95px]" />
                        <h2 className="text-xl md:text-[40px] -tracking-[4%] font-semibold">Healthscope</h2>
                    </div>
                    <p className="text-base md:text-2xl -tracking-[2%]">Your Health, Your Insights</p>
                </div>
                <p className="text-sm md:text-lg -tracking-[2%] font-light w-full md:w-2/3">
                    © 2025 Healthscope. All rights reserved. Health information on this site is for informational 
                    purpose only and is not a subsitute for professional medical advice.
                </p>
            </div>
        </footer>
    )
}

export default Footer