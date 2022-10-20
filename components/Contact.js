import React from 'react'

function Contact() {
  return (
    <section id="contact">
        <div className="flex flex-wrap lg:flex-nowrap">
            <a href="#"
                style={{ transition: `width 1s ease`,backgroundImage: `url(/images/investors_contact.png)`}} 
                className={`
                group
                py-24 lg:py-48
                w-full lg:w-1/2 lg:hover:w-2/3 lg:peer-hover:w-1/3 
                bg-cover bg-center 
                flex flex-col justify-center items-center
                text-white`}>
                    <p className="uppercase text-lg text-center  tracking-[0.2em] font-black">Contact Us To Invest</p>
                    <div className="mt-16 rounded-[5px] uppercase tracking-widest text-lg font-bold border border-white py-6 px-16 bg-[#476E8A] group-hover:bg-white group-hover:text-[#476E8A] transition duration-200">
                        Investors
                    </div>
                </a>
            <a href="#"
                style={{ transition: `width 1s ease`,backgroundImage: `url(/images/partners_contact.png)`}} 
                className={`
                group
                py-24 lg:py-48
                w-full lg:w-1/2 lg:hover:w-2/3 lg:peer-hover:w-1/3 
                bg-cover bg-center 
                flex flex-col justify-center items-center
                text-white`}>
                    <p className="uppercase text-lg text-center tracking-[0.2em] font-black">Contact Us To Invest</p>
                    <div className="mt-16 rounded-[5px] uppercase text-lg tracking-widest font-bold border border-white py-6 px-16 bg-[#476E8A] group-hover:bg-white group-hover:text-[#476E8A] transition duration-200">
                        Partnering
                    </div>
                </a>
        </div>
    </section>
  )
}

export default Contact