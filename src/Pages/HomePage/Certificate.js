import Title from '../../components/Titlecom/Title'
import img1 from '../../image/certificate/certificate1.svg'
import img2 from '../../image/certificate/certificate2.svg'
import img3 from '../../image/certificate/certificate3.svg'
import img4 from '../../image/certificate/certificate4.svg'

const imegas = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
]
export default function Certificate() {
    return (
        <section className="w-[90%] h-full shadow-2xl  mx-auto rounded-3xl mb-5 dark:bg-customDarkBG">
            <div className='my-4'>
                <Title title={"اعتمادتنا"} />
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0'>
                {
                    imegas.map((item, index) => (
                        <div className='w-[80%] md:w-[50%] lg:w-[220px] mx-auto my-5' key={index}>
                            <img src={item.img} className='w-full h-full' alt='Certificate' />
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
