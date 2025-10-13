import ButtonComponent from '../../components/Button/ButtonComponent'
import Img from '../../image/Exams/career-elementary-discover-tie-cute.jpg'

export default function ExamsTracks() {

    const Cards = [
        {
            img: Img,
            title: " اختبار 1",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",

        },
        {
            img: Img,
            title: " اختبار 1",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",

        },
        {
            img: Img,
            title: " اختبار 1",
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",

        },
    ]
    
    return (
        <section>
            <div className='w-[95%] lg:w-[80%] mx-auto h-full my-10  '>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10'>

                    {
                        Cards.map((item, index) => (
                            <div className='w-[90%] lg:w-[80%] mx-auto h-[400px]  rounded-md overflow-hidden shadow bg-white' key={index}>
                                <div className='w-full h-[200px]'>
                                    <img src={item.img} className='w-full h-full object-cover' alt='Img' />
                                </div>
                                <div className='w-[90%] h-[150px] mx-auto'>
                                    <h1 className='text-center text-[25px] font-bold'>
                                        {item.title}
                                    </h1>
                                    <p className='text-center'>
                                        {item.desc}
                                    </p>
                                </div>
                                <ButtonComponent />
                                {/* <div class="block w-[40%] h-[30px] rounded mx-auto  bg-[#00BF62] text-white font-medium text-center " >
                                    <a href={item.link}>
                                        <button className='w-full h-full'>
                                            أختبر الأن
                                        </button>
                                    </a>
                                </div> */}

                            </div>
                        ))
                    }


                </div>
            </div>
        </section>
    )
}
