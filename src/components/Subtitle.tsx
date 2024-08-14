import { FC, PropsWithChildren } from 'react'

type SubtitleProps = {
  children: PropsWithChildren['children'],
}

const Subtitle: FC<SubtitleProps> = ({ children }) => {
  return (
    <p className='text-sm text-slate-400'>{children}</p>
  )
}

export default Subtitle