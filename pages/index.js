import Head from 'next/head'
import Image from 'next/image'
import { Header, Footer,Contact, Hero, Icons, Vision } from '../components'

export default function MainPage() {
  return (
    <>
    <Head>
      <title>List Labs</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet"></link>
    </Head>
    <main>
      <Header></Header>
      <Hero />
      <Icons />
      <Vision />
      <Contact />
      <Footer></Footer>
    </main>
    </>
  )
}
