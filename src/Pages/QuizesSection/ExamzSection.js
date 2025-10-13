import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Titlecom/Title";
import ButtonSubmit from "../../components/Button/ButtonSubmit";

export default function ExamzSection({ Api, SubCard, EndPoint, TitleSection, btn, Soon }) {
    const [cardexams, setCardExams] = useState([]);
    const [activeCardId, setActiveCardId] = useState(null); // تتبع الكارد النشط

    const submitName = window.localStorage.getItem('name');



    useEffect(() => {
        fetch(`${Api}/${EndPoint}/show`)
            .then((res) => res.json())
            .then((data) => {
                setCardExams(data);
            });
    }, []);

    return (
        <section>
            <div className="w-[95%] lg:w-[80%] mx-auto h-full mt-10">
                <Title title={TitleSection} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto mt-10">
                    {cardexams.map((item) => (
                        <div
                            className="relative w-[90%] lg:w-[60%] mx-auto h-[400px] border-none rounded-md overflow-hidden shadow bg-white"
                            key={item.id}
                        >
                            <div className="w-full h-[200px] bg-black">
                                {item.img_Card?.endsWith(".mp4") ? (
                                    <video className="w-full h-full object-cover" autoPlay loop muted>
                                        <source src={item.img_Card} type="video/mp4" />
                                        المتصفح الخاص بك لا يدعم عرض الفيديو.
                                    </video>
                                ) : (
                                    <img
                                        src={item.img_Card}
                                        className="w-full h-full object-cover"
                                        alt={item.title || "Card Image"}
                                    />
                                )}
                            </div>
                            <div className="w-[90%] h-[150px] mx-auto">
                                <h1 className="text-center text-[25px] font-bold">{item.title}</h1>
                                <p className="text-center">{item.desc}</p>
                            </div>

                            {
                                activeCardId === item.id && (
                                    <div className="absolute w-[80%] lg:w-[50%] left-[50%] top-[77%] translate-x-[-50%] text-center h-[30px] rounded bg-[#00BF62]">
                                        <h1 className="text-white font-semibold z-20">
                                            استنونا مع مفاجئة رمضان 💪🏼♥️
                                        </h1>
                                        <div className="absolute w-[20px] h-[20px] left-[50%] top-[77%] translate-x-[-50%] bg-[#00BF62] rotate-45 -z-10 mt-[-7px]"></div>
                                    </div>
                                )
                            }


                            {
                                Soon ? (
                                    submitName ? (
                                        <div className="w-[40%] h-[30px] rounded mx-auto bg-[#00BF62]">
                                            <Link to={`/${item.title}/${SubCard}/${item.id}`}>
                                                <button className="w-full h-full text-center text-white font-bold">
                                                    {btn}
                                                </button>
                                            </Link>

                                        </div>
                                    ) : (
                                        <ButtonSubmit Card_Id={item.id} SubCard={SubCard} Title={item.title} />
                                    )
                                ) : (
                                    <div
                                        className="w-[40%] h-[30px] rounded mx-auto bg-[#00BF62]"
                                        onClick={() =>
                                            setActiveCardId(activeCardId === item.id ? null : item.id)
                                        }
                                    >
                                        <button className="w-full h-full text-center text-white font-bold">
                                            {btn}
                                        </button>
                                    </div>
                                )


                            }


                        </div>
                    )
                    )
                    }
                </div>
            </div>
        </section>
    );
}
