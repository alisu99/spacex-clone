import { useEffect, useState } from "react";

export default function NavBar() {
    const [abrirMenu, setabrirMenu] = useState(false);
    const [showMenuItems, setShowMenuItems] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        if (abrirMenu) {
            setShowMenuItems(false);
            setTimeout(() => {
                setabrirMenu(false);
            }, 400);
        } else {
            setabrirMenu(true);
            setTimeout(() => {
                setShowMenuItems(true);
            }, 50);
        }
    };

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            if (abrirMenu) {
                clearTimeout(timeoutId);
                setShowMenuItems(false);
                timeoutId = setTimeout(() => {
                    setabrirMenu(false);
                }, 400);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, abrirMenu]);

    const allMenuItems = [
        "FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT",
        "RIDESHARE", "STARSHIELD", "STARLINK", "MISSION", "LAUNCHES",
        "CAREERS", "UPDATES", "SHOP"
    ];

    const firstItems = allMenuItems.slice(0, 8);
    const lastItems = allMenuItems.slice(8);

    return (
        <>
            <div className={`navbar fixed w-full py-4 pb-6 px-6 flex justify-center md:justify-around bg-black z-100 ${!showNavbar ? 'navbar-hidden' : ''}`}>
                <div className="container flex justify-center ml210">
                    <div className="container flex justify-center gap-5">
                        <img src="/logo.svg" alt="spacex-logo" />
                        <nav className="nav hidden lg:block">
                            <ul className="flex gap-7 flex-wrap">
                                {firstItems.map((text, idx) => (
                                    <li key={idx}>
                                        <a href="#"
                                            className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={`burguer ${abrirMenu ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="b-button"></div>
                    <div className="b-button"></div>
                    <div className="b-button"></div>
                </div>
            </div>

            {/* menu lateral (mobile e desktop) */}
            <aside className={`fixed top-0 right-0 h-full bg-black text-white z-[98] w-[75%] transform transition-transform duration-500 ${abrirMenu ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 text-end custom-mt">
                    <ul className="mt-7">
                        {/* mobile */}
                        {firstItems.map((item, index) => (
                            <li key={`mobile-${index}`} className={`menu-item border-b border-[#252525] block lg:hidden ${showMenuItems ? `show delay-${index}` : ""}`}>
                                <a href="#">{item}</a>
                            </li>
                        ))}

                        {/* desktop */}
                        {lastItems.map((item, index) => (
                            <li key={`desktop-${index}`} className={`menu-item border-b border-[#252525] ${showMenuItems ? `show delay-${index + firstItems.length}` : ""}`}>
                                <a href="#">{item}</a>
                            </li>
                        ))}

                    </ul>
                </div>
            </aside>
        </>
    );
}
