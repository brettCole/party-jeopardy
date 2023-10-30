import { FC, PropsWithChildren, ReactNode } from 'react';

interface RoomButtonProps {
  clickFunction: () => void
  children: ReactNode
}

const RoomButton: FC<PropsWithChildren<RoomButtonProps>> = ({
  clickFunction,
  children
}) => {
  return (
    <button
      className='border border-jeopardyYellow w-full py-5'
      onClick={clickFunction}
    >
      {children}
    </button>
  )
}

export default RoomButton;