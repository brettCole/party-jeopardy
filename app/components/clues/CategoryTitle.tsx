'use client';
import { FC, useEffect } from 'react';
import { useCategoriesAndClues } from "@/app/appState/CategoryAndClue";
import { useJeopardyFunctionality } from "@/app/appState/JeopardyFunctionality";
import { shallow } from "zustand/shallow"

export type Category = {
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: Number;
}

interface ICategoryProps {
  categoryRows: Category[]
}

const CategoryTitle: FC<ICategoryProps> = ({ categoryRows }) => {
    const [bible_categories, updateCategories] = useCategoriesAndClues(
        (state) => [state.bible_categories, state.updateCategories],
        shallow
    )
    const rounds = useJeopardyFunctionality(
        (state) => state.rounds,
        shallow
    )

    useEffect(() => {
        if (rounds.double_jeopardy) {
            updateCategories(categoryRows.slice(6, 12));
        } else {
            updateCategories(categoryRows.slice(0, 6));
        }
    }, [categoryRows, updateCategories]);

    return (
        <div className='grid grid-cols-6 gap-1 h-28'>
        {bible_categories.map(({ id, title }:Category) => (
            <div
                key={`title-container-${id}`}
                className='flex items-center justify-center border border-jeopardyYellow'
            >
                <h1
                    key={`row-${id}`}
                    className="michroma.className text-2xl h-full text-center my-auto"
                >
                    {title}
                </h1>
            </div>
        ))}
      </div>
    )
}

export default CategoryTitle;