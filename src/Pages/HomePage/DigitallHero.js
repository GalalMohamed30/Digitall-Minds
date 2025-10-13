import React from 'react'
import Title from '../../components/Titlecom/Title'
import Card1 from '../../image/Digitall-Hero/card1.mp4'

export default function DigitallHero() {
    return (
        <section>
            <div className="w-[95%] lg:w-[80%] mx-auto h-full mt-10">
                <Title title={"أبطال ديجيتال مايند"} />
                <div className='mt-5 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-4'>
                    <div className='w-full h-[550px]'>
                        <video
                            src={Card1}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
