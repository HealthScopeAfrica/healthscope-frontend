import Button from "./button"

const Navigation = () => {
  return (
    <div className='flex gap-[122px] py-6 px-25'>
        <img src="/logo.png" alt="Logo" className='h-[58px] w-auto' />
        <div className="flex gap-3.5 justify-center items-center">
            <div className="flex gap-3.75 items-center justify-center">
                <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Features</a>
                <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Partners</a>
                <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">Contributions</a>
                <a href="" className="text-[20px] leading-[120%] -tracking-[2%] min-w-[100px]">About Us</a>
            </div>
            <div className="flex gap-3">
                <Button variant="outline">Sign In</Button>
                <Button>Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Navigation