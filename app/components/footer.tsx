import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t mt-auto py-6 px-25 flex bg-[#EBF6F3]'>
        <div className="flex py-10 px-25 gap-10 md:flex-col flex-row">
            <h2 className="text-2xl md:text-5xl font-semibold leading-[100%] -tracking-[4%]">Healthscope</h2>
            <div className="flex justify-between">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <p className="text-lg md:text-4xl leading-[120%] -tracking-[4%] font-medium">Subscribe to Healthscope Newsletter</p>
                        <p className="text-sm md:text-2xl leading-[120%] -tracking-[2%]">Get weekly wellness tips and expert medical insights</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3.5 ml-20">
                    <h3 className="text-lg font-semibold">Get in touch</h3>
                    <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Contact</a>
                    <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Support</a>
                    <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Privacy Policy</a>
                </div>
                <div className="flex flex-col gap-3.5 ml-20">
                    <h3 className="text-lg font-semibold">Join our community</h3>
                    <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Sign In</a>
                    <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Get Started</a>
                </div>
            </div>
        </div>
        {/* <div className='flex gap-3'>
          <span>About</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
        </div> */}
    </footer>
  )
}

export default Footer