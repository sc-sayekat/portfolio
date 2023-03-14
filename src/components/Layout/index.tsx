import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='relative flex min-h-screen flex-col bg-lightBlack'>
      <div className=''>
        <Navbar />
        {children}
      </div>
      <div className='mt-auto w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
