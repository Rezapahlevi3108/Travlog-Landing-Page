import { useState } from "react"

function Navbar() {
    const [showButtons, setShowButtons] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMoreClick = (e) => {
        e.preventDefault();
        setShowButtons(!showButtons);
    };

    const handleToogleButton = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    };

    return (
        <nav className="py-9 px-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <img src="/src/assets/img/logo.svg" className="order-1 sm:order-2" />
                    <img 
                    src="/src/assets/img/toogle.svg" 
                    onClick={handleToogleButton}
                    className="order-2 sm:order-1 lg:hidden" />
                    <div className="order-2 hidden lg:block">
                        <ul className="flex gap-16">
                            <li className="text-[#222831] font-bold font-circular text-sm"><a href="">Home</a></li>
                            <li className="text-[#222831] font-bold font-circular text-sm opacity-50"><a href="">Discover</a></li>
                            <li className="text-[#222831] font-bold font-circular text-sm opacity-50"><a href="">Special Deals</a></li>
                            <li className="text-[#222831] font-bold font-circular text-sm opacity-50"><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="order-3 hidden sm:block">
                        <button className="grow bg-white px-8 py-4 font-bold text-[#222831] rounded-full text-sm">Login</button>
                        <button className="grow bg-[#5D50C6] px-8 py-4 font-bold text-white rounded-full text-sm">Sign Up</button>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="z-50 fixed bottom-0 right-0 left-0 bg-white p-4 border lg:hidden">
                    <ul className="flex justify-between">
                        <li>
                            <a href="" className="text-[#5D50C6] flex justify-center flex-col items-center gap-1">
                                <ion-icon name="home-outline"></ion-icon>
                                <span className="text-base font-normal">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[#222831] opacity-50 flex justify-center flex-col items-center gap-1">
                                <ion-icon name="albums-outline"></ion-icon>
                                <span className="text-base font-normal">Discover</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[#222831] opacity-50 flex justify-center flex-col items-center gap-1">
                                <ion-icon name="sparkles-outline"></ion-icon>
                                <span className="text-base font-normal">Special</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[#222831] opacity-50 flex justify-center flex-col items-center gap-1">
                                <ion-icon name="call-outline"></ion-icon>
                                <span className="text-base font-normal">Contact</span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="" 
                            onClick={handleMoreClick}
                            className="text-[#222831] opacity-50 flex justify-center flex-col items-center gap-1">
                                <ion-icon name="reorder-four-outline"></ion-icon>
                                <span className="text-base font-normal">More</span>
                            </a>
                        </li>
                    </ul>
                    {showButtons && (
                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4">
                            <button className="grow bg-white px-8 py-4 font-bold text-[#222831] rounded-full text-sm">Login</button>
                            <button className="grow bg-[#5D50C6] px-8 py-4 font-bold text-white rounded-full text-sm">Sign Up</button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
  }
  
  export default Navbar
  