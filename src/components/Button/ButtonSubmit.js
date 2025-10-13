import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = process.env.REACT_APP_API_BASE_URL;

export default function ButtonSubmit({ Card_Id, SubCard, Title }) {

    const [isopen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [telephone, setTelephone] = useState('');
    const [details, setDetails] = useState('');

    const Navegate = useNavigate();

    function HandleOpen() {
        setIsOpen(!isopen)
    }

    async function SendDataHandlling(e) {

        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('telephone', telephone);
        formData.append('details', details);

        try {
            const sendres = await axios.post(`${Api_URL}/usersubmission/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setTelephone('');
            setAge('');
            setDetails('');
            window.localStorage.setItem('name', name);
            Navegate(`/${Title}/${SubCard}/${Card_Id}`);

        } catch (error) {

            console.error('Error sending data:', error);
        }
    }


    console.log(name);
    return (
        <div>
            <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className=" w-[40%] h-[30px] rounded-md mx-auto block text-white bg-blue-700 hover:bg-blue-800 "
                type="button"
                onClick={HandleOpen}
            >
                سجل بيناتك الان
            </button>
            <div id="default-modal" tabindex="-1" aria-hidden="true" className={`${isopen ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50`}>
                <div className="relative p-4 w-full max-w-2xl mx-auto bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            سجل بيناتك
                        </h3>
                    </div>

                    <form className="w-full" onSubmit={SendDataHandlling}>

                        <input
                            type='text'
                            placeholder='اسم الطالب'
                            required
                            onChange={(e) => setName(e.target.value)}
                            className='block w-[90%]  bg-[#f3f3f3] mx-auto h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5'
                        />
                        <div className="w-[90%] mx-auto">
                            <input
                                type='number'
                                placeholder='السن'
                                required
                                min={1}
                                max={100}
                                onChange={(e) => setAge(e.target.value)}
                                className='w-full bg-[#f3f3f3]  h-[50px] rounded-lg placeholder:pr-4 focus:outline-none my-5'
                            />
                            {
                                age < 6 || age > 100 ? (
                                    <p className="text-red-600">يجب أن يكون العمر بين 1 و 100</p>
                                ) : null
                            }
                        </div>
                        <div className="w-[90%] mx-auto">
                            <input
                                type='number'

                                placeholder='رقم التليفون'
                                required
                                onChange={(e) => setTelephone(e.target.value)}
                                className='w-full bg-[#f3f3f3]  h-[50px]  rounded-lg placeholder:pr-4 focus:outline-none my-5'
                            />
                            {
                                telephone.length < 11 ? (
                                    <p className="text-red-600">يجب أن يكون رقم الهاتف 11 رقم</p>
                                ) : !/^(010|011|012|015)/.test(telephone) ? (
                                    <p className="text-red-600">يجب أن يبدأ رقم الهاتف بـ 010 أو 011 أو 012 أو 015</p>
                                ) : <></>
                            }

                        </div>

                        <textarea
                            placeholder='تفاصيل أخري'

                            onChange={(e) => setDetails(e.target.value)}
                            className='block w-[90%]  mx-auto bg-[#f3f3f3]  h-[150px] resize-none  rounded-lg placeholder:pr-4 placeholder:pt-4 focus:outline-none my-5'
                        >
                        </textarea>
                        <div className="w-[50%] lg:w-[30%] h-[35px] mx-auto rounded-md overflow-hidden">
                            <button className="w-full h-full text-white text-[22px] bg-[#00BF62]">
                                سجل الان
                            </button>
                        </div>

                    </form>


                </div>
            </div >

        </div >
    )
}
