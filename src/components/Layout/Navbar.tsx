import PrimaryButton from '@/components/common/PrimaryButton'
import HamburgerMenu from '@/components/Layout/HamburgerMenu'
import { memo, useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const onMenuClick = () => {
    setOpen((prevValue) => !prevValue)
  }

  const onDownloadResumeClick = () => {
    //TODO: Add resume download link
    return
    const pdfLink = ''
    window.open(pdfLink, '_blank')
  }

  return (
    <div className='fixed top-0 z-20 min-h-0 w-full bg-[#0f0d0d26] backdrop-blur-3xl'>
      <div className='container h-full'>
        <div className='relative flex h-full py-2 text-primary md:items-center md:py-6'>
          {/* If there is any space in font name, add underscore instead of them */}
          <span className="text-bold  flex h-[45px]  items-center font-['Dancing_Script'] text-[24px] leading-tight text-primary md:h-auto">
            sayekat
          </span>
          <ul
            className={
              open
                ? 'mt-10 flex h-[200px] grow flex-col items-center gap-4 overflow-hidden  transition-[height] duration-500 ease-in-out md:ml-auto md:mt-0 md:grow-0 md:flex-row md:gap-12 md:overflow-visible'
                : 'mt-10 flex h-0 grow flex-col items-center gap-4 overflow-hidden   transition-[height] duration-500 ease-in-out md:ml-auto md:mt-0 md:grow-0 md:flex-row md:gap-12 md:overflow-visible'
            }>
            <li className='uppercase'>
              <a href='#'>
                <p className='font-bold text-accent'>Home</p>
              </a>
            </li>
            <li className='uppercase'>
              <a href='#'>
                <p className='font-bold'>Work</p>
              </a>
            </li>
            <li className='uppercase'>
              <a href='#'>
                <p className='font-bold'>About</p>
              </a>
            </li>
            <li className='uppercase'>
              <a href='#'>
                <p className='font-bold'>Contact</p>
              </a>
            </li>
            <li className='uppercase'>
              <button></button>
              <PrimaryButton onClick={onDownloadResumeClick}>
                Resume
              </PrimaryButton>
            </li>
          </ul>
          <div className='flex md:hidden md:items-center'>
            <HamburgerMenu open={open} onClick={onMenuClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Navbar)
