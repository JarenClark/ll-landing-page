import React from 'react'

function Vision() {
    return (
        <section id="vision" className='py-24 relative'>
          <div 
          className="absolute inset-0 bg-cover bg-center -mt-32"
            style={{backgroundImage: `url(https://listlabs.com/wp-content/uploads/2022/10/vision_bg.png)`}}
          />
            <div className="container mx-auto relative">
                <div className="bullet relative">
                    <p className="my-8 label label-big ">
                        Vision For The Future
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2>
                    Invested in Premium Phase III &amp; Commercial Contract Manufacturing
                  </h2>
                </div>
                <div className="flex flex-wrap -mx-4  lg:my-16">
                  <div className="w-full lg:w-1/2 px-4">
                    <p className="text-xl">
                      South Korea-based Genome & Company (KOSDAQ 314130) has  made a significant investment into List Labs and List Biotherapeutics, with plans to attract further investment and grow the company’s strong legacy position in microbiome therapeutics – specifically with construction of the new Phase III & Commercial CDMO facility on 17 acres in Fishers, Indiana.

                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <p className="text-xl">
                    As a pioneer in clinical manufacturing for LBP-based therapeutics, List Labs has a strong pipeline of clients that need state-of-the-art Phase III and commercial manufacturing. With this growth-oriented investment strategy and an additional therapeutics pipeline from Genome & Company, List Labs is seeking to build on 40 years of expertise to become the microbiome therapeutic sector’s leading CDMO.
                    </p>
                  </div>
                </div>

                
                <div className="bullet relative">
                        <p className="mt-8 lg:mb-16 mb-4 label label-big ">
                           More To Explore
                        </p>
                    </div>

                    <div className="flex flex-wrap items-stretch lg:-mx-12">
                      <div className="w-full lg:w-1/2 lg:px-12 flex">
                        <div className="card tilt text-white flex flex-col justify-between mb-8 lg:mb-0">
                          <div>
                            <h3 className='lg:mr-8'>
                            CDMO Services: Greater Capacity and End-to-End LBP&nbsp;Manufacturing
                            </h3>
                            <p className="text-xl mt-6">
                            List Labs is one of the most experienced CDMOs, with the vision of harnessing bacteria’s potential for a healthier world. Our expertise is now embodied within the engineering of our new Phase III / Commercial facility that will support innovators in this exciting area.
                            </p>
                          </div>

                          <div className="mt-10">
                          <a href="#" className="transition duration-300 rounded-[5px] hover:bg-white hover:text-[#476E8A] px-8 py-5 leading-none text-lg uppercase border inline-block w-auto font-bold border-white card-btn">Read More</a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 lg:px-12">
                        <div className="card tilt text-white flex flex-col justify-between mb-8 lg:mb-0">
                          <div>
                            <h3 className='lg:mr-24'>
                            Leading Experience in Applications for Live Bacteria 
                            </h3>
                            <p className="text-xl mt-6">
                            The use of Live Biotherapeutic Products (LBPs) to reintroduce beneficial microorganisms has the potential to provide transformative therapies that improve lives. List Labs is uniquely positioned as one of the most experienced CDMOs, delivering leading-edge therapies to patients around the globe.  
                            </p>
                          </div>
                          <div className="mt-10">
                          <a href="#" className="transition duration-300 rounded-[5px] hover:bg-white hover:text-[#476E8A] px-8 py-5 leading-none text-lg uppercase border inline-block w-auto font-bold border-white card-btn">Read More</a>
                          </div>
                          
                        </div>
                      </div>
                    </div>
            </div>
        </section>

    )
}

export default Vision
