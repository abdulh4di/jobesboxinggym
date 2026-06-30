import Marquee from "react-fast-marquee";

export default function Funders() {
  return (
<section>
  <div className="py-20 flex flex-col sm:items-center gap-8 px-4 justify-start w-full overflow-hidden">
    <p className=" text-[14px] tracking-[-5%] font-light sm:text-center w-[80%] md:w-[60%]">
      Our funders and partners help us provide affordable boxing, youth programmes, community
      sessions and positive opportunities across Newcastle.
    </p>

    <div>
      <Marquee loop={0} speed={80}>
        <img
          src="/assets/BestHolidayLogo.png"
          alt=""
          className="w-15 h-15 sm:w-20 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75"
        />
        <img
          src="/assets/CommunityLogo.png"
          alt=""
          className="w-40 h-15 sm:w-50 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75"
        />
        <img 
          src="/assets/LGALogo.png" 
          alt="" 
          className="w-30 h-15 sm:w-40 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75" 
        />
        <img
          src="/assets/BestHolidayLogo.png"
          alt=""
          className="w-15 h-15 sm:w-20 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75"
        />
        <img
          src="/assets/CommunityLogo.png"
          alt=""
          className="w-40 h-15 sm:w-50 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75"
        />
        <img 
          src="/assets/LGALogo.png" 
          alt="" 
          className="w-30 h-15 sm:w-40 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75" 
        />
        <img
          src="/assets/BestHolidayLogo.png"
          alt=""
          className="w-15 h-15 sm:w-20 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75"
        />
        <img
          src="/assets/CommunityLogo.png"
          alt=""
          className="w-40 h-15 sm:w-50 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75"
        />
        <img 
          src="/assets/LGALogo.png" 
          alt="" 
          className="w-30 h-15 sm:w-40 sm:h-20 mr-30 opacity-85 saturate-0 brightness-75" 
        />
      </Marquee>
    </div>
  </div>
</section>
  );
}
