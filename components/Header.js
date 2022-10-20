import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-center'>
        <Image src={'/images/listlabs-header.png'} alt={'Header'} width={1711} height={75} />
    </div>
  )
}

export default Header