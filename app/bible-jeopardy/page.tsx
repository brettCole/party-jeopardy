import React from 'react';
import { sql } from '@vercel/postgres';
import CategoryTitle, { Category } from "@/app/_components/clues/CategoryTitle";
import CategoryClue, { Clue } from '@/app/_components/clues/CategoryClue';
import WelcomeHelp from "@/app/_components/WelcomeHelp";
import PlayersNameAndScore from "@/app/_components/players/PlayersNameAndScore";

export default async function Page() {
  const { rows:categories }: { rows:Category[] } = await sql`SELECT * FROM bible_categories`;
  const { rows:clues }: { rows:Clue[] } = await sql`SELECT * FROM bible_clues`;

  return (
    <>
      <WelcomeHelp />
      <header>
          <CategoryTitle categoryRows={categories} />
      </header>
      <main className="flex justify-center min-h-screen pt-4">
          <CategoryClue clueRows={clues} />
      </main>
      <PlayersNameAndScore />
    </>
  )
}