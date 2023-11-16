
function Footer() {
  return (
    <div className="container mx-auto mt-32 mb-20">
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 pe-0 md:pe-20">
                <img src="/src/assets/img/logo.svg" className="mx-auto md:mx-0" alt="" />
                <p className="text-lg font-circular text-[#222831] opacity-50 text-center md:text-start mt-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className="flex justify-center md:justify-start gap-8 mt-8 md:mt-12">
                    <a href="">
                        <img src="/src/assets/img/facebook.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/src/assets/img/twitter.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/src/assets/img/instagram.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="col-span-12 md:col-span-2">
                <div className="flex flex-col gap-6 text-center md:text-start mt-12 md:mt-0">
                    <h4 className="text-lg font-circular font-bold text-[#222831]">Company</h4>
                    <a href="" className="text-base font-inter text-[#222831]">About</a>
                    <a href="" className="text-base font-inter text-[#222831]">Career</a>
                    <a href="" className="text-base font-inter text-[#222831]">Mobile</a>
                </div>
            </div>
            <div className="col-span-12 md:col-span-2">
                <div className="flex flex-col gap-6 text-center md:text-start mt-12 md:mt-0">
                    <h4 className="text-lg font-circular font-bold text-[#222831]">Contact</h4>
                    <a href="" className="text-base font-inter text-[#222831]">Why Travlog?</a>
                    <a href="" className="text-base font-inter text-[#222831]">Partner with us</a>
                    <a href="" className="text-base font-inter text-[#222831]">FAQ's</a>
                    <a href="" className="text-base font-inter text-[#222831]">Blog</a>
                </div>
            </div>
            <div className="col-span-12 md:col-span-2">
                <div className="flex flex-col gap-6 text-center md:text-start mt-12 md:mt-0">
                    <h4 className="text-lg font-circular font-bold text-[#222831]">Meet Us</h4>
                    <p className="text-base font-inter text-[#222831]">+00 92 1234 56789</p>
                    <p className="text-base font-inter text-[#222831]">info@travlog.com</p>
                    <p className="text-base font-inter text-[#222831]">205. R Street, New York</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
