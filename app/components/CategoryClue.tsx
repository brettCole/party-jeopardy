'use client';
import { FC, useEffect, useState } from 'react';
import DisplayClue from './DisplayClue';

export type Clue = {
    description?: string;
    answer?: string;
    point_value?: Number;
    bible_category_id?: Number;
    created_at?: Date;
    updated_at?: Date;
    id?: Number;
}

interface IClueProps {
    clueRows: Clue[]
}

const CategoryClue: FC<IClueProps> = ({ clueRows }) => {
  const [clues, setClues] = useState<Clue[]>([]);
  const [currentClue, setCurrentClue] = useState<Clue>();
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  useEffect(() => {
    setClues(clueRows);
  }, [clueRows]);

  const handleModalState = () => {
    setDisplayModal(!displayModal);
  }

  const handleClue = (id: Number) => {
    let foundClue = clues.find((element) => element.id === id);
    if (foundClue !== undefined) {
      console.log('Clue is found.', foundClue);
      setCurrentClue(foundClue);
      setDisplayModal(true);
    }
  }

  return (
    <>
      <div className='grid grid-cols-6 grid-rows-5 grid-flow-col gap-1 w-full'>
        {clues.map(({ id, point_value }:Clue) => (
          <div
            key={`point-container-${id}`}
            className='flex items-center justify-center border border-jeopardyYellow'
            onClick={() => handleClue(id!)}
          >
            <h1 
              key={`row-${id}`} 
              className='michroma.className text-xl text-center'
            >
              {`${point_value}`}
            </h1>
          </div>
        ))}
      </div>
      {currentClue && (
        <DisplayClue 
          clue={currentClue} 
          displayModal={displayModal} 
          handleModalState={handleModalState} 
        />
      )}
    </>
  )
}

export default CategoryClue;