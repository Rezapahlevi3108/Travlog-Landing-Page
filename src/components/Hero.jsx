
function Hero() {
    return (
        <div className="container mx-auto p-4 lg:py-16">
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
                    <div>
                        <button className="px-8 py-4 bg-white text-[#F85E9F] flex items-center gap-2 text-sm font-bold rounded-full mx-auto lg:mx-0 border">
                            Explore the world!
                            <img src="/img/work.svg" alt="" />
                        </button>
                        <h1 className="mt-4 md:mt-[43px] mb-6 md:mb-[43px] font-bold text-[40px] md:text-[52px] lg:text-[69px] text-[#222831] leading-tight text-center lg:text-start">Travel <span className="text-[#F85E9F]">top destination</span> of the world</h1>
                        <p className="mb-8 md:mb-[43px] text-center lg:text-start text-[#222831] opacity-50 text-base md:text-[18px] font-inter md:w-3/4 lg:w-full mx-auto">We always make our customer happy by providing as many choices as possible</p>
                        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
                            <button className="py-6 px-8 bg-[#5D50C6] drop-shadow-lg-shadow text-white rounded-full text-sm font-bold">Get Started</button>
                            <button className="z-10 flex items-center justify-center gap-2 py-6 px-8 bg-white border border-[#EEEEEE] rounded-full text-sm font-bold">
                                <img src="/img/play.svg" alt="" />
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
                    <div>
                        <img src="/img/hero.png" className="w-full" alt="" />
                    </div>
                </div>
                <div className="col-span-12 order-3 pt-20">
                    <div className="flex justify-center lg:justify-between gap-6 sm:gap-7 flex-wrap">
                        <div>
                            <img src="/img/tripadvisor.svg" className="h-5 sm:h-8" alt="" />
                        </div>
                        <div>
                            <img src="/img/expedia.svg" className="h-5 sm:h-8" alt="" />
                        </div>
                        <div>
                            <img src="/img/booking.svg" className="h-5 sm:h-8" alt="" />
                        </div>
                        <div>
                            <img src="/img/airbnb.svg" className="h-5 sm:h-8" alt="" />
                        </div>
                        <div>
                            <img src="/img/rbitz.svg" className="h-5 sm:h-8" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Hero
  