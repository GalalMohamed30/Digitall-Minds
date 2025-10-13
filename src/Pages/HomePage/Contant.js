import { useState } from 'react'

import Title from '../../components/Titlecom/Title'
import axios from 'axios';





export default function Contant({ Api }) {

    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');



    async function SendDataHandlling(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('message', message);
        formData.append('telephone', telephone);

        try {
            const sendres = await axios.post(`${Api}/contactus/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setName('');
            setTelephone('');
            setMessage('');

        } catch (error) {

            console.error('Error sending data:', error);
        }
    }


    console.log(name, telephone, message)

    return (
        <section id='للتواصل' className='bg-white dark:bg-customDarkBG'>
            <div className='w-[95%] lg:w-[80%] mx-auto h-full pb-5 lg:pb-10 mt-10  '>
                <Title title={"للتواصل"} />

                <div className="md:flex justify-between items-center gap-4 mt-10">
                    <div className='w-full md:w-[70%] h-full'>
                        <form className='w-full' onSubmit={SendDataHandlling}>
                            <input
                                type='text'
                                placeholder='الاسم'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='block w-[80%]  bg-[#f3f3f3] mx-auto h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5'
                            />
                            <input
                                type='tel'
                                placeholder='رقم التليفون'
                                required
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                className='block bg-[#f3f3f3] text-right  w-[80%] mx-auto h-[50px]  rounded-lg placeholder:pr-4 placeholder:text-end focus:outline-none my-5'
                            />
                            <textarea
                                placeholder='رسالتك'
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='block w-[80%] mx-auto bg-[#f3f3f3]  h-[150px] resize-none  rounded-lg placeholder:pr-4 focus:outline-none my-5'
                            >
                            </textarea>
                            <div className='w-[210px] h-[40px] mx-auto'>
                                <button type='submit' className='w-full h-full text-lg  bg-[#00BF62] text-white rounded-md'>
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mx-auto w-[70%] lg:w-[50%]" data-aos="fade-right">
                        <h1 className="text-center text-[28px] text-[#111] font-bold mb-4 dark:text-customDarkText">مكان تواجدنا</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873.7699589174092!2d31.35503856032574!3d31.03651663291147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79f24400aca5b%3A0x59a04a1fa0bbd6f8!2sTechno%20Club%20co-workspace!5e0!3m2!1sar!2seg!4v1732706739335!5m2!1sar!2seg"
                            title="Google map showing our office location"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-[300px] md:h-[500px] w-full border-none"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
