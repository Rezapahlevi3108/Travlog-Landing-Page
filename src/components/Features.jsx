
function Features() {
  return (
    <div className="container mx-auto mt-32 px-4 lg:px-0">
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 mt-[70px] lg:mt-0">
                <div className="flex flex-col gap-4">
                    <span className="text-[#F85E9F] font-bold leading-tight text-center lg:text-start text-base sm:text-2xl">KEY FEATURES</span>
                    <h1 className="font-bold sm:text-5xl text-3xl leading-tight text-[#222831] text-center lg:text-start">We offer best services</h1>
                </div>
                <p className="text-center lg:text-start text-[#222831] opacity-50 text-base md:text-[18px] font-inter mt-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className="flex flex-col sm:flex-row justify-start items-center gap-8 mt-16">
                    <div className="bg-[#FF5722] rounded-[32px] p-[26px]">
                        <img src="/img/location.svg" alt="" />
                    </div>
                    <div className="text-center sm:text-start">
                        <h1 className="text-2xl font-bold [#222831]">We offer best services</h1>
                        <span className="text-lg [#222831] opacity-50">Lorem Ipsum is not simply random text</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-center gap-8 mt-[72px] sm:mt-8">
                    <div className="bg-[#FACD49] rounded-[32px] p-[26px]">
                        <img src="/img/calendar.svg" alt="" />
                    </div>
                    <div className="text-center sm:text-start">
                        <h1 className="text-2xl font-bold [#222831]">We offer best services</h1>
                        <span className="text-lg [#222831] opacity-50">Lorem Ipsum is not simply random text</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-center gap-8 mt-[72px] sm:mt-8">
                    <div className="bg-[#F85E9F] rounded-[32px] p-[26px]">
                        <img src="/img/ticket.svg" alt="" />
                    </div>
                    <div className="text-center sm:text-start">
                        <h1 className="text-2xl font-bold [#222831]">We offer best services</h1>
                        <span className="text-lg [#222831] opacity-50">Lorem Ipsum is not simply random text</span>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                <img src="/img/img-features.png" className="mx-auto" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Features
