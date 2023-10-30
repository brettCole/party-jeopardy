import { ReactNode } from 'react';
import JeopardyHeader from "@/app/_components/JeopardyHeader";

export default function DesignateRoomLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <JeopardyHeader />
      {children}
    </>
  )
}