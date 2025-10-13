import { useEffect, useState } from 'react'
import Title from '../../components/Titlecom/Title'
import Robot from '../../image/AboutMe/Robot.svg'
import img1 from '../../image/AboutMe/img1.svg'
import img2 from '../../image/AboutMe/img2.svg'
import LogoLightMode from '../../image/AboutMe/LogoLightMode.svg'
import LogoDarkMode from '../../image/AboutMe/LogoDarkMode.svg'

export default function AboutMe({ Api }) {

    const [contant, setContant] = useState("");

    const [img, setImg] = useState(true)

    useEffect(() => {
        fetch(`${Api}/aboutsection/showtext/1`)
            .then((res) => res.json())
            .then((data) => {
                setContant(data.title)
            })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setImg(!img);
        }, 3000);

        return () => clearInterval(interval);
    }, [img]);

    return (
        <section id="إحنا مين؟">
            <div className='w-[90%] lg:w-[80%] mx-auto h-full md:mt-24 lg:mt-[150px] 3xl:mt-20 '>
                <Title title={"إحنا مين؟"} />
                <div className='lg:flex justify-between items-center gap-10 mt-10 '>
                    <div className='w-full lg:w-[60%]'>
                        <img src={LogoLightMode} className='w-[250px] dark:hidden' />
                        <img src={LogoDarkMode} className='w-[250px] hidden dark:block' />

                        <p className='lg:text-[24px] text-[#111] font-medium dark:text-customDarkText'>
                            {contant}
                        </p>
                    </div>
                    <div className='h-[400px] md:w-[450px] hu__hu__ mx-auto relative -z-10'>
                        {
                            img ? (<img src={img2} className='w-full h-full ' alt="Robot" loading='lazy' />) : (<img src={img1} className='w-full h-full ' alt="Robot" loading='lazy' />)
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}
