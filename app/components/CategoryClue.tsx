'use client';
import { FC, useEffect, useState } from 'react';

export interface IClueRow {
    description?: string;
    answer?: string;
    point_value?: Number;
    bible_category_id?: Number;
    created_at?: Date;
    updated_at?: Date;
    id?: Number;
}

interface IClueProps {
    clueRows: IClueRow[]
}

const CategoryClue: FC<IClueProps> = ({ clueRows }) => {
  const [clues, setClues] = useState<IClueRow[]>([]);

  useEffect(() => {
    setClues(clueRows);
  }, []);

  const handleClue = (id: Number) => {
    console.log(id);
  }

  return (
    <div className='grid grid-cols-6 grid-rows-5 grid-flow-col gap-1 w-full'>
      {clues.map(({ id, description, answer, point_value, bible_category_id }:IClueRow) => (
        <div
         className='flex items-center justify-center border border-2 border-jeopardyYellow'
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
  )
}

export default CategoryClue;