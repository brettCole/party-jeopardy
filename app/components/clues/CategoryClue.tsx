'use client';
import { FC, useEffect, useState } from 'react';
import DisplayClue from './DisplayClue';
import { useCategoriesAndClues } from "@/app/appState/CategoryAndClue";
import { useJeopardyFunctionality } from "@/app/appState/JeopardyFunctionality";
import { shallow } from "zustand/shallow";

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
    const [currentClue, setCurrentClue] = useState<Clue>();
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [bible_clues, updateClues] = useCategoriesAndClues(
        (state) => [state.bible_clues, state.updateClues],
        shallow
    );
    const rounds = useJeopardyFunctionality(
        (state) => state.rounds
    )

    useEffect(() => {
        if (rounds.double_jeopardy) {
            updateClues(clueRows.slice(31, 61));
        } else {
            updateClues(clueRows.slice(0, 30));
        }
    }, [rounds, clueRows, updateClues]);

    const handleModalState = () => {
        setDisplayModal(!displayModal);
    }

  const handleClue = (id: Number) => {
    let foundClue = clueRows.find((element) => element.id === id);
    if (foundClue !== undefined) {
      console.log('Clue is found.', foundClue);
      setCurrentClue(foundClue);
      setDisplayModal(true);
    }
  }

  return (
    <>
      <div className='grid grid-cols-6 grid-rows-5 grid-flow-col gap-1 w-full'>
        {bible_clues.map(({ id, point_value }:Clue) => (
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