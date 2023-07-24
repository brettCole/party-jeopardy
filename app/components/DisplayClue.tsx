import { FC } from "react";
import { Clue } from "./CategoryClue";

interface IDisplayClueProps {
  clue: Clue
  displayModal: boolean
  handleModalState: () => void
}

const DisplayClue: FC<IDisplayClueProps> = ({ clue: { id, description, answer, point_value, bible_category_id }, displayModal, handleModalState }) => {

  if (id) {
    return (
      <>
        <input type='checkbox' checked={displayModal} id='clue-modal' className="modal-toggle" />
        <div className='modal'>
          <div className="modal-box w-11/12 max-w-5xl">
            <h1 className="text-3xl leading-loose m-5">{description}</h1>
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