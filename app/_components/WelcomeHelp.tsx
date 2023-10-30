'use client';
import { FC, useState } from "react";

const WelcomeHelp: FC = () => {
  // TODO: check if loggedIn to display 'WelcomeHelp'
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  return (
    <>
      <input
        type='checkbox'
        id='welcome_description'
        className='modal-toggle'
        defaultChecked={showWelcomeModal}
      />
      <div className='modal'>
        <div className='modal-box w-8/12 max-w-5xl flex flex-col justify-around content-around'>
          <h2 className='text-2xl text-center'>Welcome to Bible Jeopardy!</h2>
          <ul className='flex flex-col items-center mt-5'>
            <li>A contestant has 10 seconds to enter their answer.</li>
            <li>Be sure to double check your spelling when entering your answer.</li>
            <li>Final Bible Jeopardy question has a 30 second time limit.</li>
          </ul>
          <div className='modal-action'>
            <label htmlFor='welcome_description' className='btn'>Close!</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeHelp;