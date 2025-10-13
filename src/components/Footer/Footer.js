import { Link } from 'react-scroll'

import Logo from '../../image/Footer/Logo.svg'

import icon1 from '../../image/Footer/watsicon.svg'
import icon2 from '../../image/Footer/faceicon.svg'
import icon3 from '../../image/Footer/instaicon.svg'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const Links = [
  { name: "الرئيسيه", url: "الرئيسيه", path: "/" },
  { name: "إحنا مين؟", url: "إحنا مين؟", path: "/" },
  { name: "لماذا ديجيتال مايند", url: "لماذاديجيتالمايند", path: "/" },
  { name: "للحجز", link: "https://wa.me/+201503013422" },
  { name: "للتواصل معانا" },
];

const Api_URL = process.env.REACT_APP_API_BASE_URL;
export default function Footer() {

  const [contant, setContant] = useState("");
  const [social, setSocial] = useState([]);
  const { pathname } = useLocation();

  const handleScroll = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };


  useEffect(() => {
    fetch(`${Api_URL}/aboutsection/showtext/1`)
      .then((res) => res.json())
      .then((data) => {
        setContant(data.title)
      })

    fetch(`${Api_URL}/socialmedia/show`)
      .then((res) => res.json())
      .then((data) => {
        setSocial(data)
      })


  }, [])

  return (
    <footer className='bg-[#111] h-full pb-10'>
      <div className='grid w-[80%] pt-[50px] mx-auto lg:grid-cols-3 '>
        <div className="w-[100%] border-b-2 pb-5 border-[#ffffff46] lg:border-none">
          <img src={Logo} className='mx-auto' />
          <p className='text-white text-center py-5'>
            {contant}
          </p>
          <div className='flex justify-center items-center gap-[20px]'>
            {
              social.map((item, index) => (
                <a href={item.link} key={index}>
                  <img src={item.icon} alt={item.name} className='w-[40px] h-[40px]' />
                </a>
              ))
            }
          </div>
        </div>

        <div className='w-[100%] text-center py-5 pb-5 border-[#ffffff46] border-b-2 lg:border-none'>
          <h1 className='text-[30px] text-[#00BF62] font-bold'>
            صفحات تهمك
          </h1>
          <ul className='pt-5'>
            {Links.map((item, index) => (
              <li
                key={index}
                className="text-[24px] font-semibold text-customDarkText"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : pathname !== "/" ? (
                  <NavLink to={item.path} className="cursor-pointer">
                    {item.name}
                  </NavLink>
                ) : (
                  <a
                    href={`#${item.url}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.url);
                    }}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}

          </ul>
        </div>

        <div className='w-[100%] text-center py-5  '>
          <h1 className='text-[25px] text-white font-bold'>
            الشروط والاحكام
          </h1>
          <h1 className='text-[25px] text-white py-5 font-bold'>
            سياسة الخصوصية
          </h1>
          <h1 className='text-[25px] text-white font-bold'>
            سياسة استرداد الرسوم
          </h1>
        </div>

      </div>
      <div className='text-white text-center pt-5'>
        <a href='https://www.wasllatech.com/' target='_blank'>
          <p>
            جميع الحقوق محفوظه &copy; <span className='text-[#00BF62]'>شركة وصلة تك</span>
          </p>
        </a>
      </div>
    </footer >
  )
}
