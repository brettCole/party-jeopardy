import React from 'react';
import { sql } from '@vercel/postgres';
import  CategoryTitle, { ICategoryRow } from "../components/CategoryTitle";
import CategoryClue, { Clue } from '../components/CategoryClue';

export default async function BibleJeopardy() {

  const { rows }: { rows:ICategoryRow[] } = await sql`SELECT * FROM bible_categories WHERE id BETWEEN 0 AND 6;`;
  const clues: { rows:Clue[] } = await sql`SELECT * FROM bible_clues WHERE bible_category_id BETWEEN 1 AND 6`;
  
  return (
    <>
      <header>
        <CategoryTitle categoryRows={rows} />
      </header>
      <main className="flex justify-center min-h-screen pt-4">
        <CategoryClue clueRows={clues.rows} />
      </main>
    </>
  )
}