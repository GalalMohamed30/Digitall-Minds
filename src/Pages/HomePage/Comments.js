import React from 'react'
import Title from '../../components/Titlecom/Title'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const comments = [
    {
        title: "من أفضل الأماكن الي اتعلمت فيها برمجه و تعامل المدربيين جميل جداا"
    },
    {
        title: "“Lorem ipsum dolor sit amet“Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit"
    },
    {
        title: "“Lorem ipsum dolor sit amet“Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit"
    },
    {
        title: "“Lorem ipsum dolor sit amet“Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit amet, “Lorem ipsum dolor sit"
    },
]
export default function Comments({ Api }) {

    const [getcomment, setGetComments] = useState([]);

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");


    useEffect(() => {
        fetch(`${Api}/commentssetion/showdatawebsite`)
            .then((res) => res.json())
            .then((data) => { setGetComments(data) })
    }, [])



    function SendComment(e) {
        e.preventDefault();
        const res = axios.post(`${Api}/commentssetion/createcomment`, {
            name: name,
            comments: comment,
        })


    }


    return (
        <section>
            <div className='w-[90%] lg:w-[80%] mx-auto h-full mt-10  '>
                <Title title={"اراء اولياء الأمور"} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-5 gap-10'>
                    {
                        getcomment.map((item, index) => (
                            <div className='w-[100%] h-full pb-5 bg-[#00BF62] rounded-md ' key={index}>
                                <h1 className='text-white p-4 text-[20px] font-semibold'>{item.name}</h1>
                                <p className='text-white w-[90%] text-center mx-auto '>{item.comments}</p>
                            </div>
                        ))
                    }

                </div>

                <div className='md:w-[60%] lg:w-[70%]  h-[400px] mx-auto flex justify-center items-center'>

                    <form className='w-full' onSubmit={SendComment}>

                        <h1 className='text-[25px] text-center font-semibold text-[#111] dark:text-customDarkText'>اترك لنا تعليقك الجميل</h1>

                        <input
                            type='text'
                            placeholder='الاسم'
                            required
                            onChange={(e) => setName(e.target.value)}
                            className='block w-[80%] mx-auto h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5' />
                        <textarea
                            placeholder='رسالتك'
                            required
                            onChange={(e) => setComment(e.target.value)}
                            className='block w-[80%] mx-auto h-[150px] resize-none  rounded-lg placeholder:pr-4 focus:outline-none my-5'>
                        </textarea>
                        <div className='w-[210px] h-[40px] mx-auto'>
                            <button type='submit' className='w-full h-full text-lg  bg-[#00BF62] text-white rounded-md'>
                                ارسال
                            </button>
                        </div>

                    </form>
                </div>
                {/* <div className='md:flex justify-center items-center mt-5 gap-[40px] h-full'>

                    <div className='md:w-[55%] lg:w-[60%] hu__hu__  h-[400px]  mx-auto '>
                        <img src={messagelogo} className='h-full w-full' />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

