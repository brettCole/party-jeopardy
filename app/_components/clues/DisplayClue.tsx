'use client';
import { FC, useEffect, useRef } from "react";
import useSpeechSynthesis from 'beautiful-react-hooks/useSpeechSynthesis' 
import { Clue } from "./CategoryClue";

interface DisplayClueProps {
  clue: Clue
  displayModal: boolean
  handleModalState: () => void
}

const DisplayClue: FC<DisplayClueProps> = ({ clue: { id, description, answer, point_value, bible_category_id }, displayModal, handleModalState }) => {
  const clueRef = useRef<HTMLHeadingElement>(null);
  const { speak } = useSpeechSynthesis(`${description}`);

  useEffect(() => {
    clueRef.current?.click();
  }, [id]);

  const readClue = () => {
    const delayClue = setTimeout(() => {
      speak();
    }, 500);

    return () => clearTimeout(delayClue);
  }

  if (id) {
    return (
      <>
        <input type='checkbox' checked={displayModal} id='clue-modal' className="modal-toggle" />
        <div className='modal'>
          <div className="modal-box w-11/12 max-w-5xl">
            <h1 className="text-3xl leading-loose m-5" ref={clueRef} onClick={readClue}>{description}</h1>
          </div>
          <label 
            className="modal-backdrop" 
            htmlFor="clue-modal"
            onClick={handleModalState}
          >
            Close
          </label>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default DisplayClue;