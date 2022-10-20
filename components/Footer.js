import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className=' bg-[#3f484c] flex justify-center'>
        <Image src={'/images/listlabs-footer.png'} alt={'Footer'} width={1711} height={632} />
    </div>
  )
}

export default Footer