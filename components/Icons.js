import React from 'react'
import {
    AccentLine,
    CDMOfacility,
    Indiana,
    Online,
    Phase3,
    SquareFootage
} from './SVG'

const iconItems = [CDMOfacility, Indiana, Online, Phase3, SquareFootage]
import Slider from 'react-slick'
function Icons() {
    return (

        <div className="flex flex-wrap justify-center -mx-4">

            {/* {iconItems.map((item, i) => (
                <div
                    key={i}
                    className='inline-flex w-1/2 sm:w-1/3 lg:w-1/5 relative items-end  px-4'>

                    <div className="mb-2 w-1/2 pr-2 overflow-hidden transform">
                        <AccentLine/>
                    </div>
                    <div className='w-1/2'>
                        {iconItems[i]} - {item}
                    </div>
                </div>
            ))} */}

            <div className='inline-flex w-1/2 sm:w-1/3 lg:w-1/5 relative items-end  px-4'>

                <div className="mb-2 w-1/2 pr-2 overflow-hidden transform">
                    <AccentLine/>
                </div>
                <div className='w-1/2'>
                    <CDMOfacility/>
                </div>
            </div>

            <div className='inline-flex w-1/2 sm:w-1/3 lg:w-1/5 relative items-end px-4'>
                <div className="mb-2 w-1/2 pr-2 overflow-hidden transform">
                    <AccentLine/>
                </div>
                <div className='w-1/2'>
                    <Phase3/>
                </div>
            </div>
            <div className='inline-flex w-1/2 sm:w-1/3 lg:w-1/5 relative items-end px-4'>
                <div className="mb-2 w-1/2 pr-2 overflow-hidden transform  ">
                    <AccentLine/>
                </div>
                <div className='w-1/2'>
                    <SquareFootage/>
                </div>
            </div>
            <div className='inline-flex w-1/2 sm:w-1/3 lg:w-1/5 relative items-end px-4'>
                <div className="mb-2 w-1/2 pr-2 overflow-hidden transform">
                    <AccentLine/>
                </div>
                <div className='w-1/2'>

                    <Indiana/>
                </div>
            </div>
            <div className='inline-flex w-1/2 sm:w-1/3 lg:w-1/5 relative items-end px-4'>
                <div className="mb-2 w-1/2 pr-2 overflow-hidden transform">
                    <AccentLine/>
                </div>
                <div className='w-1/2'>

                    <Online/>
                </div>
            </div>

        </div>
    )
}

export default Icons