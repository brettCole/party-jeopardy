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
    <>
      {categoryRows.map(({ title, id }:ICategoryRow) => (
        <h1 key={`row-${id}`} className="michroma.className text-2xl">{title}</h1>
      ))}
    </>
  )
}

export default CategoryTitle;