import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import LogoLightmode from "../../image/Navebar/LogoLightmode.svg";
import LogoDarkmode from "../../image/Navebar/LogoDarkmode.svg";
import ExitIcon from "../../image/Navebar/x (2).svg";
import ThemeMode from "../theme/ThemeMode";

export default function NavebarMedia({ Links }) {
    const [links, setLinks] = useState(Links);
    const [isOpen, setIsOpen] = useState(false);

    const { pathname } = useLocation();

    const handleScroll = (id) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="lg:hidden relative z-50">
            <nav className="shadow">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <div className="w-[150px] h-[50px]">
                        <img src={LogoLightmode} className="w-full h-full dark:hidden" alt="LogoLightmode" />
                        <img src={LogoDarkmode} className="w-full h-full hidden dark:block" alt="LogoDarkmode" />
                    </div>
                    {/* Theme Toggle & Menu Button */}
                    <div className="flex items-center gap-5">
                        <ThemeMode />
                        <button onClick={toggleMenu} className="p-2 w-10 h-10">
                            <svg className="w-5 h-5 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`fixed inset-y-0 left-0 w-64 bg-[#f3f3f3] shadow-2xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                    <button onClick={toggleMenu} className="p-6">
                        <img src={ExitIcon} alt="ExitIcon" className="w-[26px] h-[26px]" />
                    </button>
                    <ul className="font-medium flex flex-col p-4 space-y-4">
                        {links.map((item, index) => (
                            <li
                                key={index}
                                className="text-[24px] border-b-2 pb-2 font-semibold text-[#111111] "
                                onClick={toggleMenu}
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
                        <button className="px-5 py-2 border rounded-[10px] border-[#00BF62] text-[#00BF62] duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                            <a href="https://wa.me/+201503013422" className="font-semibold text-[18px]">
                                سجل معانا الان
                            </a>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
