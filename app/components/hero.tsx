import Button from "./button";

const Hero = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center md:pb-12.5 py-4 gap-[29px] justify-between">
      {" "}
      {/* Adjust height to account for navigation bar height */}
      <div className="flex flex-col gap-[43px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-[56px] font-medium leading-[110%] -tracking-[4%] max-w-[575px]">
            From quick answers to deep insights
          </h1>
          <p className="mt-4 text-lg md:text-2xl leading-[120%] tracking-[-2%] text-gray-600 max-w-[540px]">
            HealthScope is Africa’s first experts-driven health content
            Platform, designed to give you trusted information anytime,
            anywhere.
          </p>
        </div>
        <div className="flex gap-5">
          <Button>Start Reading</Button>
          <Button variant="outline">Talk to Kulo</Button>
        </div>
      </div>
      <img
        src="/images/hero.jpg"
        alt="Hero Image"
        className="max-w-[623px] aspect-auto bg-contain rounded-md"
      />
    </div>
  );
};

export default Hero;
