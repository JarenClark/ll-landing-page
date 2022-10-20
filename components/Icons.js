import React from 'react'
import {
    AccentLine,
    CDMOfacility,
    Indiana,
    Online,
    Phase3,
    SquareFootage
} from './SVG'

function Icons() {
    return (
        <section id="icons">
            <div className="container mx-auto mb-16">
                <div className="hidden lg:flex -mx-4">
                    <div className='inline-flex w-1/5 relative items-end  px-4'>
                        <div className="mb-2 scale-75 w-1/2 pr-2 overflow-hidden transform">
                            <AccentLine/>
                        </div>
                        <div className='w-1/2'>
                            <CDMOfacility/>
                        </div>
                    </div>
                    <div className='inline-flex w-1/5 relative items-end px-4'>
                        <div className="mb-2 scale-75 w-1/2 pr-2 overflow-hidden transform">
                            <AccentLine/>
                        </div>
                        <div className='w-1/2'>
                            <Phase3/>
                        </div>
                    </div>
                    <div className='inline-flex w-1/5 relative items-end px-4'>
                        <div className="mb-2 scale-75 w-1/2 pr-2 overflow-hidden transform  ">
                            <AccentLine/>
                        </div>
                        <div className='w-1/2'>
                            <SquareFootage/>
                        </div>
                    </div>
                    <div className='inline-flex w-1/5 relative items-end px-4'>
                        <div className="mb-2 scale-75 w-1/2 pr-2 overflow-hidden transform">
                            <AccentLine/>
                        </div>
                        <div className='w-1/2'>

                            <Indiana/>
                        </div>
                    </div>
                    <div className='inline-flex w-1/5 relative items-end px-4'>
                        <div className="mb-2 scale-75 w-1/2 pr-2 overflow-hidden transform">
                            <AccentLine/>
                        </div>
                        <div className='w-1/2'>

                            <Online/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Icons