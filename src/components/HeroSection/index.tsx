import PrimaryButton from '@/components/common/PrimaryButton'

const HeroSection = () => {
  const onMoreButtonClick = () => {
    // Implement this function
    // console.log('More button clicked')
    return
  }

  return (
    <div className='relative flex min-h-[400px] items-center justify-center bg-black py-6 sm:min-h-[400px] md:min-h-[450px]'>
      <div>
        <div className='container relative z-10 flex flex-col justify-center gap-6 text-primary'>
          <p className='text-4xl'>✋🏼ola</p>
          <h1 className='max-w-[695px] text-2xl leading-normal md:text-3xl md:leading-10'>
            I&apos;m Sayekat Chakraborty — A highly motivated and creative UX
            designer with 3 years of experience in designing intuitive and
            user-centered digital products.
          </h1>
          <div>
            <PrimaryButton onClick={onMoreButtonClick}>More</PrimaryButton>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 left-0 bottom-0 z-0 bg-doodle bg-center opacity-10 grayscale' />
    </div>
  )
}

export default HeroSection
