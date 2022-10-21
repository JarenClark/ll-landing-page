import Icons from "./Icons"

function Hero() {
    return (

        <section 
            id="hero" 
            className='relative'
            >
                <div 
                    className="absolute inset-0 "
                    style={{ 
                        backgroundImage:`url(https://listlabs.com/wp-content/uploads/2022/10/keyart_listbio.png)`,
                        backgroundSize: `75%`,
                        backgroundPosition: `top right`,
                        backgroundRepeat: `no-repeat`
                    
                    }}

                />
            <div className='container mx-auto py-24 lg:pt-48 relative'>
                <div className="max-w-5xl lg:pr-20">
                    <div className="bullet relative">
                        <p className="my-8 label label-big ">
                            Building For Your Product Needs
                        </p>
                    </div>
                    <h1>
                        Large-Scale cGMP LBP facility serving Microbiome Therapeutics
                    </h1>
                    <div className="max-w-3xl">
                        <p className="text-xl text-[#41484C] mt-8">
                            List Labs is on track to provide fully integrated end-to-end service for
                            innovators of microbiome therapeutics (LBPs) with a new 130,000 sq ft,
                            state-of-the-art, commercial CDMO facility by Q4, 2024. List Labs is directing
                            the design and construction of the expansion via the establishment of new
                            provisional sister company, List&nbsp;Biotherapeutics.
                        </p>
                        <p className="mt-8 mb-4 lg:mb-8 label label-small ">
                            CONTACT US
                        </p>
                        <div className="flex flex-col lg:flex-row lg:-mx-2">
                          <div className="w-full sm:w-1/2 lg:px-2 mb-4">
                            <a href="#" className="rounded-[5px] btn bg-[#476E8A] hover:bg-[#143145] transition duration-200 border border-[#476E8A] text-white flex py-6 text-center justify-center items-center">
                              INVESTORS
                            </a>
                          </div>
                          <div className="w-full sm:w-1/2 lg:px-2 mb-4">
                          <a href="#" className="rounded-[5px] btn border-[#476E8A] hover:bg-[#476E8A] transition duration-200 hover:text-white border text-[#476E8A] py-6 flex text-center justify-center items-center">
                              INNOVATORS
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">

                <Icons />
                </div>
            </div>
        </section>

    )
}

export default Hero