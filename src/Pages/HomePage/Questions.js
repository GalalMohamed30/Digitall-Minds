import { useEffect, useState } from "react"

import Title from "../../components/Titlecom/Title";

import Robot from '../../image/Questions/cute-ai-robot.svg'

import DropDown from '../../image/Questions/dropDown.svg'


export default function Questions({ Api }) {
    const [isopen, setisOpen] = useState(null);


    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${Api}/commonquestions/show`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })

    }, [])

    return (
        <section>
            <div className='w-[90%] lg:w-[80%] mx-auto h-full mt-10  '>
                <Title title={"أسئلة شائعة"} />

                <div className="md:flex justify-between items-center gap-4 mt-10">

                    <div className="w-[100%] h-[250px] md:hidden">
                        <img src={Robot} alt="Robot" className="w-[80%] md:w-full h-full hu__hu__ mx-auto" />
                    </div>

                    <div className="w-[100%] md:w-[80%] lg:w-[50%]">
                        {
                            data.map((item, index) => (
                                <div id="accordion-collapse" data-accordion="collapse" key={index}>
                                    <h2 id={`accordion-collapse-heading-${index}`} onClick={() => setisOpen(isopen === index ? null : index)}>
                                        <button
                                            type="button"
                                            className={`flex items-center justify-between w-full p-5 mb-2 font-medium text-gray-500 border border-gray-200 bg-white gap-3 ${isopen === index ? 'rounded-t-lg' : 'rounded-lg'
                                                }`}
                                            data-accordion-target={`#accordion-collapse-body-${index}`}
                                            aria-expanded={isopen === index}
                                            aria-controls={`accordion-collapse-body-${index}`}
                                        >
                                            {item.title}
                                            <img src={DropDown} alt="dropdown icon" />
                                        </button>
                                    </h2>
                                    <div
                                        id={`accordion-collapse-body-${index}`}
                                        className={`${isopen === index ? 'block' : 'hidden'}`}
                                        aria-labelledby={`accordion-collapse-heading-${index}`}
                                    >
                                        <div className="p-5 -mt-2 mb-2 border border-gray-200 dark:bg-customDarkBG">
                                            <p className="mb-2 text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className="w-[450px] h-[450px] hidden md:block">
                        <img src={Robot} alt="Robot" className="w-[80%] md:w-full h-full hu__hu__ mx-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}
