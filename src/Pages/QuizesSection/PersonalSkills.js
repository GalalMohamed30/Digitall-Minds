import { useEffect, useState } from 'react';
import Title from '../../components/Titlecom/Title';


const Api_URL = process.env.REACT_APP_API_BASE_URL;
export default function PersonalSkills() {

    const Title_Url = decodeURIComponent(window.location.pathname.split("/")[1])
    const SubCard_API = window.location.pathname.split("/")[2];
    const Id_Url = window.location.pathname.split("/")[3];


    const [cardexams, setCardExams] = useState([]);

    useEffect(() => {
        fetch(`${Api_URL}/${SubCard_API}/${Id_Url}/sub-cards`)
            .then((res) => res.json())
            .then((data) => {
                setCardExams(data);

            })

        window.scrollTo(0, 0);
    }, [])

    return (
        <section className='mt-5'>
            <Title title={Title_Url} />
            <div className='w-[95%] lg:w-[80%] mx-auto h-full my-10  '>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 mx-auto mt-10'>

                    {
                        cardexams.map((item, index) => (
                            <div className='w-[90%] lg:w-[80%] mx-auto h-[400px]  rounded-md overflow-hidden shadow bg-white' key={index}>
                                <div className='w-full h-[200px]'>
                                    <img src={item.img_card} className='w-full h-full object-cover' alt='Img' />
                                </div>
                                <div className='w-[90%] h-[150px] mx-auto'>
                                    <h1 className='text-center text-[25px] font-bold'>
                                        {item.title}
                                    </h1>
                                    <p className='text-center text-[14px]'>
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="block w-[40%] h-[30px] rounded mx-auto  bg-[#00BF62] text-white font-medium text-center " >
                                    <a href={item.link}>
                                        <button className='w-full h-full'>
                                            أختبر الأن
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>





        </section>
    )
}
