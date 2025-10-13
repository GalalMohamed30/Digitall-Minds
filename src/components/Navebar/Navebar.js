
import { NavLink, useLocation } from "react-router-dom";

import LogoLightmode from "../../image/Navebar/LogoLightmode.svg";
import LogoDarkmode from "../../image/Navebar/LogoDarkmode.svg";

import NavebarMedia from "./NavebarMedia";
import ThemeMode from "../theme/ThemeMode";

const Links = [
    { name: "الرئيسيه", url: "الرئيسيه", path: "/" },
    { name: "إحنا مين؟", url: "إحنا مين؟", path: "/" },
    { name: "لماذا ديجيتال مايند", url: "لماذاديجيتالمايند", path: "/" },
    { name: "للحجز", link: "https://wa.me/+201503013422" },
    { name: "للتواصل معانا" },
];

export default function Navebar() {
    const { pathname } = useLocation();

    const handleScroll = (id) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <section id="الرئيسيه">
            <div className="h-[120px] shadow z-50 hidden lg:block">
                <div className="flex justify-evenly items-center py-2 3xl:w-[80%] mx-auto">
                    {/* Logo */}
                    <div className="w-[155px] h-[105px]">
                        <img
                            src={LogoLightmode}
                            className="w-full h-full dark:hidden"
                            alt="LogoLightmode"
                        />
                        <img
                            src={LogoDarkmode}
                            className="w-full h-full hidden dark:block"
                            alt="LogoDarkmode"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="flex justify-center items-center gap-10">
                            {Links.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[24px] font-semibold text-[#111111] dark:text-customDarkText"
                                >
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer"
                                        >
                                            {item.name}
                                        </a>
                                    ) : pathname !== "/" ? (
                                        <NavLink to={item.path} className="cursor-pointer">
                                            {item.name}
                                        </NavLink>
                                    ) : (
                                        <a
                                            href={`#${item.url}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScroll(item.url);
                                            }}
                                            className="cursor-pointer"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-10">
                        <button className="px-5 py-2 border rounded-[10px] border-[#00BF62] text-[#00BF62] duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                            <a
                                href="https://wa.me/+201503013422"
                                className="font-semibold text-[18px]"
                            >
                                سجل معانا الان
                            </a>
                        </button>
                        <ThemeMode />
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <NavebarMedia Links={Links} />
        </section>
    );
}
