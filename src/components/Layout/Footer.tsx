import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-fit'>
      <div className='container -mb-20 lg:-mb-32'>
        <div className='relative z-10 flex items-center rounded-xl bg-accent p-8 md:p-8 lg:p-10'>
          <h1 className='text-primary md:text-4xl  md:leading-normal lg:text-5xl lg:leading-snug'>
            Would like to Hire me! <br /> or just want to chat...
          </h1>
          <div className='ml-auto hidden sm:block sm:h-[150px] sm:w-[140px] lg:h-[217px] lg:w-[200px]'>
            <Image
              width={200}
              height={217}
              src='/assets/images/meditating.png'
              alt='Meditation image'
              className='object-scale-down'
            />
          </div>
        </div>
      </div>

      <div className='relative bg-black pb-12 md:pb-20'>
        <div className='container relative z-10'>
          <div className='flex flex-col justify-center pt-28 lg:pt-44'>
            <div className='mb-12 md:mb-16'>
              <h1 className='mb-2 text-primary'>How to get in touch?</h1>
              <p className=' text-secondary'>
                Send over an email or message me on linkedIn
              </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-4 '>
              <div>
                <h2 className='pb-1 text-secondary'>Email</h2>
                <p>
                  <a href='mailto:sayekat.sc@gmail.com' className='text-link'>
                    sayekat.sc@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h2 className='pb-1 text-secondary'>LinkedIn</h2>
                <p>
                  <a
                    href='https://www.linkedin.com/in/scsayekat'
                    target='_blank'
                    className='text-link'>
                    Go to LinkedIn profile
                  </a>
                </p>
              </div>
              <div>
                <h2 className='pb-1 text-secondary'>Behance</h2>
                <p>
                  <a
                    href='https://www.behance.net/sc_sayekat'
                    target='_blank'
                    className='text-link'>
                    Go to behance
                  </a>
                </p>
              </div>
              <div>
                <h2 className='pb-1 text-secondary'>Dribble</h2>
                <p>
                  <a
                    href='https://dribbble.com/Sc_Sayekat'
                    target='_blank'
                    className='text-link'>
                    Go to dribbble
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-0 right-0 left-0 bottom-0 z-0 bg-doodle bg-center opacity-10' />
      </div>
    </div>
  )
}

export default React.memo(Footer)
