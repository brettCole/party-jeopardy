import { create } from "zustand";
import { persist } from 'zustand/middleware'

type JeopardyFunctionalityState = {
    rounds: {
        jeopardy: boolean,
        double_jeopardy: boolean,
        final_jeopardy: boolean
    },
    roomName: string
}

type Action = {
    // updateJeopardyRound: () => void,
    updateRoomName: ( name:string ) => void
}

// const jeopardyFunctionality = (set) => ({
const useJeopardyFunctionality = create<JeopardyFunctionalityState & Action>()(
    persist(
        (set) => ({
            rounds: {
                jeopardy: true,
                double_jeopardy: false,
                final_jeopardy: false
            },
            roomName: "",
            updateRoomName: ( name ) => set(() => ({ roomName:name }))
            // TODO: build out updateRound, which uses current game board state to do so
            // updateJeopardyRound: () => set(() => )
        }),
        {
            name: 'JeopardyFuntionalityState'
        }
    )
)

export default useJeopardyFunctionality;