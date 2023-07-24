import { FC } from 'react';

export interface ICategoryRow {
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: Number;
}

interface ICategoryProps {
  categoryRows: ICategoryRow[]
}

const CategoryTitle: FC<ICategoryProps> = ({ categoryRows }) => {
  return (
    <div className='grid grid-cols-6 gap-1 h-28'>
      {categoryRows.map(({ title, id }:ICategoryRow) => (
        <div className='flex items-center justify-center border border-jeopardyYellow'>
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