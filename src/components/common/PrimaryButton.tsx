import { FC } from 'react'

type Props = {
  children: React.ReactNode
  onClick: () => void
}

const PrimaryButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='rounded-full bg-gradient-to-r from-primary via-primary to-primary px-5 py-2.5 text-center text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300'>
      {children}
    </button>
  )
}

export default PrimaryButton
