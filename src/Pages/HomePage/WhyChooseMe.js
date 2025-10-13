import { useEffect, useState } from "react";
import Title from "../../components/Titlecom/Title";

export default function WhyChooseMe({ Api }) {

    const [isactive, setIsActive] = useState(0);

    const [dataApi, setDataApi] = useState([]);


    useEffect(() => {
        fetch(`${Api}/whysection/showdata`)
            .then((res) => res.json())
            .then((data) => setDataApi(data))
    }, [])

    return (
        <section id="لماذاديجيتالمايند"  >

            <div className='w-[90%] lg:w-[90%] mx-auto h-full '>
                <Title title={"لماذا ديجيتال مايند"} />

                <div className="w-[250px] h-[250px] my-3 mx-auto md:w-[400px] md:h-[400px] transform duration-1000 lg:hidden ">
                    <img src={dataApi[isactive]?.image} className="w-full h-full transform duration-1000 " />
                </div>


                <div className="lg:flex justify-center items-center gap-[50px]">
                    <div className="w-full h-[500px] ">
                        {
                            dataApi.map((item, index) => (
                                <div className={`lg:w-full shadow 3xl:w-[80%]  mx-auto h-[110px]  rounded-[70px]  ${isactive === index ? `bg-[#00BF62] transform duration-500` : `bg-white`} mb-5`} key={index} onClick={() => setIsActive(index)}>
                                    <div className="flex  items-center gap-3 py-5 pr-[10px]">
                                        <div className="w-[60px] h-[60px]">
                                            <img src={item.icon} className="w-full h-full" />
                                        </div>
                                        <div className="w-[80%]">
                                            <h2 className="text-[#111] text-[16px] md:text-[20px] font-semibold mb-1">
                                                {item.title}
                                            </h2>
                                            <p className="text-[11px] md:text-[15px] text-[#111] w-[90%] md:w-full ">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    <div className="w-full h-[500px] transform duration-1000 hidden lg:block">
                        <img src={dataApi[isactive]?.image} className="w-full h-full transform duration-1000" />
                    </div>

                </div>
            </div>

        </section>
    )
}
