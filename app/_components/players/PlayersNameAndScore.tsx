import { FC } from 'react';

const PlayersNameAndScore: FC = () => {
  return (
    <footer className='grid grid-cols-3 gap-1 w-full'>
      <div className='flex items-center justify-center border border-jeopardyYellow'>
        <h3>Player 1</h3>
      </div>
      <div className='flex items-center justify-center border border-jeopardyYellow'>
        <h3>Player 2</h3>
      </div>
      <div className='flex items-center justify-center border border-jeopardyYellow'>
        <h3>Player 3</h3>
      </div>
    </footer>
  )
}

export default PlayersNameAndScore;