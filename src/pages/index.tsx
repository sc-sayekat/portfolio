import HeroSection from '@/components/HeroSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Boilerplate | Next</title>
        <meta name='description' content='App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  )
}
