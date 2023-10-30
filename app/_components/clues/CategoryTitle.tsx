'use client';
import { FC, useEffect } from 'react';
import { RootState } from '@/appState/store';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from '@/appState/CategoryAndClueSlice';

export type Category = {
  title: string;
  created_at: Date;
  updated_at: Date;
  id: number;
}

interface ICategoryProps {
  categoryRows: Category[]
}

const CategoryTitle: FC<ICategoryProps> = ({ categoryRows }) => {
  const categories = useSelector((state: RootState) => state.categoryAndClues.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCategories(categoryRows));  
  }, []);

  const categoryTitles = (categories:Category[]) => {
    let titles = [];
    for (const category in categories) {
      const { id, title } = categories[category];
      titles.push(
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
      )
    }
    return titles;
  }

  return (
    <div className='grid grid-cols-6 gap-1 h-28'>
      {categoryTitles(categories)}
    </div>
  )
}

export default CategoryTitle;