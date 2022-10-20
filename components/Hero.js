import React from 'react'
function Hero() {
    return (

        <section id="hero" className='relative'>
            <div className='container mx-auto my-24 lg:mt-48'>
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
                        <p className="my-8 label label-small ">
                            CONTACT US
                        </p>
                        <div className="flex -mx-4">
                          <div className="w-1/2 px-4">
                            <a href="#" className="rounded-[5px] btn bg-[#476E8A] text-white flex py-6 text-center justify-center items-center">
                              INVESTORS
                            </a>
                          </div>
                          <div className="w-1/2 px-4">
                          <a href="#" className="rounded-[5px] btn border-[#476E8A] border text-[#476E8A] py-6 flex text-center justify-center items-center">
                              INNOVATORS
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero