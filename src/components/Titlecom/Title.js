

export default function Title({ title }) {
    return (
        <div className='w-full'>

            <h1 className="text-[25px] lg:text-[30px] 3xl:text-[45px] text-[#111] font-semibold text-center dark:text-customDarkText" >
                {title}
            </h1>
            <hr className="h-[5px] w-[40px] bg-[#00BF62] mx-auto border-none rounded-[25px] mt-1" />
        </div>
    )
}
