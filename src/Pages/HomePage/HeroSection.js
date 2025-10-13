import { useEffect, useState } from "react"
import SeoHelmet from "./SeoHelmet"
import { Link } from "react-scroll"
import { HelmetProvider } from "react-helmet-async";
import AboutMe from "./AboutMe"
import Certificate from "./Certificate"
import Comments from "./Comments"
import Contant from "./Contant"
import CoursesTracks from "./CoursesTracks"
import Questions from "./Questions"
import Technologys from "./Technologys"
import WhyChooseMe from "./WhyChooseMe"

import Cerv from "../../image/Hero/Vector.svg"
import Boys from "../../image/Hero/pngtree-kids-and-robots-a-fun-learning-experience-png-image_12997459-removebg-preview 1.svg"
import ExamzSection from "../QuizesSection/ExamzSection"
import DigitallHero from "./DigitallHero";


const Api_URL = process.env.REACT_APP_API_BASE_URL;

export default function HeroSection() {


    const [contant, setContant] = useState("");
    const [link, setLink] = useState("");


    useEffect(() => {
        fetch(`${Api_URL}/herosection/showtext/1`)
            .then((res) => res.json())
            .then((data) => {
                setContant(data.title)
                setLink(data.link)
            })

    }, [])

    return (
        <HelmetProvider>
            <SeoHelmet Api={Api_URL} />
            <section className=' md:h-full relative '>
                <div className="w-[80%] mx-auto ">
                    <div className=" md:text-start md:flex md:justify-center md:items-center md:gap-10 ">
                        <div className="md:w-[100%]">
                            <div className="mt-10 md:-mt-16">
                                <h1 className="text-[22px] lg:text-[40px] font-bold text-[#111111] lg:w-[80%] dark:text-customDarkText ">
                                    {contant}
                                </h1>
                                <div className=" flex items-center gap-2 lg:gap-10 pt-5 ">
                                    <a href={link}>
                                        <button className="px-3 lg:px-5 py-2 text-center border rounded-[10px] border-[#00BF62] bg-[#00BF62] text-[#F3F3F3]  font-medium duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                                            احجز جلستك الأن !
                                        </button>
                                    </a>

                                    <Link to="مسار التعلم الخاص بك" smooth={true} duration={1000} className="cursor-pointer px-3 lg:px-5 py-2 text-center border rounded-[10px] border-[#00BF62] text-[#00BF62]  font-medium duration-300 hover:bg-[#00BF62] hover:text-[#F3F3F3]">
                                        أكتشف الأن
                                    </Link>

                                </div>
                            </div>

                        </div>
                        <div className="w-[100%]  md:h-full lg:w-[100%] 3xl:h-[700px] ">
                            <img src={Boys} className="w-full h-full " />
                        </div>
                    </div>
                </div>
                <div className='w-screen absolute bottom-0 md:top-12 lg:top-0 left-0 -z-50 '>
                    <img src={Cerv} className="w-screen lg:h-[700px] 3xl:h-[800px]" />
                </div>
            </section>
            <AboutMe Api={Api_URL} />
            <WhyChooseMe Api={Api_URL} />
            <ExamzSection Api={Api_URL} SubCard={"subcardscourses"} EndPoint={"cardcourses"} TitleSection={"الدورات التدريبيه"} btn={"رؤيه المزيد"} Soon={true} />
            {/* <CoursesTracks /> */}
            <ExamzSection Api={Api_URL} SubCard={"cards"} EndPoint={"cardexams"} TitleSection={"الأختبارات و المسابقات"} btn={"اختبارات"} Soon={false} />
            <DigitallHero />
            <Certificate />
            <Technologys Api={Api_URL} />
            <Comments Api={Api_URL} />
            <Questions Api={Api_URL} />
            <Contant Api={Api_URL} />
        </HelmetProvider>
    )
}
