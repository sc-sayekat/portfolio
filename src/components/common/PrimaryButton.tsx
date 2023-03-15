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
      className='rounded-full bg-gradient-to-r from-primary via-primary to-primary px-5 py-2.5 text-center text-sm font-medium uppercase tracking-widest text-white ring-offset-0 transition-all duration-100 hover:bg-gradient-to-br focus:ring-2 focus:ring-slate-200 '>
      {children}
    </button>
  )
}

export default PrimaryButton
