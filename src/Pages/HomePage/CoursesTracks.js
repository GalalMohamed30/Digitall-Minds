import { useState } from "react";
import Title from "../../components/Titlecom/Title";

import track1 from '../../image/trackCoursses/track1.svg'
import track1mediaphone from '../../image/trackCoursses/track1-mediaphone.svg'

const cards = [
  {
    desc: "1-2"
  },
  {
    desc: "3-4"
  },
  {
    desc: "5-6"
  },
  {
    desc: "7-8"
  },
  {
    desc: "9-10"
  },
  {
    desc: "11-12"
  }
]
const trcks = [
  {
    img: track1
  },
  {
    img: track1
  },

]
const trcksmedia = [
  {
    img: track1mediaphone
  },
  {
    img: track1mediaphone
  },

]
export default function CoursesTracks() {

  const [active, setActive] = useState(0)

  return (
    <section id="مسار التعلم الخاص بك">
      <div className='w-[90%] lg:w-[80%] mx-auto h-full mt-10  '>
        <Title title={"مسار التعلم الخاص بك"} />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-5 ">
          {
            cards.map((item, index) => (
              <div className={`w-full  h-[80px]  shadow text-[#00BF62] rounded-[40px] flex justify-center items-center ${active === index ? 'bg-[#00BF62] text-white' : 'bg-white'}`}
                onClick={() => setActive(index)} key={index}>
                <div className="text-center text-[20px] font-medium">
                  <p>
                    الصف
                  </p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full h-full mt-5 hidden md:block">
          <img src={trcks[active]?.img} alt="tracks" className="mx-auto" />
        </div>

        <div className="w-full h-full mt-5  md:hidden">
          <img src={trcksmedia[active]?.img} alt="tracks" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
