import { useEffect, useState } from "react";
import Title from "../../components/Titlecom/Title";

export default function Technologys({ Api }) {

    const [dataapi, setDataApi] = useState([]);

    useEffect(() => {
        fetch(`${Api}/servicesection/showservice`)
            .then((res) => res.json())
            .then((data) => setDataApi(data))
    }, [])

    return (
        <section className="w-[90%] h-full shadow-2xl mx-auto rounded-3xl mb-5 dark:bg-customDarkBG">
            <div className=' lg:w-[80%] mx-auto h-full md:mt-24 lg:mt-[150px] 3xl:mt-10 pt-5'>
                <Title title={"أداة تطوير برمجي و تكنولوجيا احترافية في منهج واحد"} />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-10 mx-auto">
                    {
                        Array.isArray(dataapi) && dataapi.length > 0 ? (
                            dataapi.map((item, index) => (
                                <div className="w-[110px] h-full mb-[40px] mx-auto" key={index}>
                                    <div className="w-[70px] h-[70px] mx-auto">
                                        <img src={item.image} className="w-full h-full" />
                                    </div>
                                    <div className="text-center w-full text-[14px] mt-2 text-[#111] dark:text-customDarkText">
                                        <p>
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )
                            : (
                                <p className="text-[25px] text-[#111] text-center dark:text-customDarkText">
                                    لا يتوافر محتوي
                                </p>
                            )

                    }

                </div>
            </div>
        </section>
    )
}
