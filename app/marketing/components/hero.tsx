import Button from "~/components/button";
import { usePublicAuth } from "./auth/public-auth-provider";
import { Link } from "react-router";

const Hero = () => {
  const { openSignUp } = usePublicAuth();
  return (
    <div className="container flex flex-col md:flex-row items-center md:items-start lg:items-center py-8 md:py-12 lg:py-16 gap-8 md:gap-12 lg:gap-16">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-[43px] flex-1">
        <div className="flex flex-col gap-4 md:gap-5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium leading-[110%] -tracking-[4%] max-w-none md:max-w-[575px]">
            From quick answers to deep insights
          </h1>
          <p className="text-base md:text-md lg:text-lg xl:text-[22px] leading-[120%] tracking-[-2%] text-gray-600 max-w-none md:max-w-[540px]">
            HealthScope is Africa's first experts-driven health content
            Platform, designed to give you trusted information anytime,
            anywhere.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-5">
         <Link to="open/articles"><Button className="shrink-0">Start Reading</Button></Link>
          {/* <Button variant="outline" className="shrink-0">Talk to Kulo</Button>*/}
        </div> 
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/images/hero.jpg"
          alt="Hero Image"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[623px] h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
