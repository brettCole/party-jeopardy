import { create } from "zustand";

type JeopardyFunctionalityState = {
    rounds: {
        jeopardy: boolean,
        double_jeopardy: boolean,
        final_jeopardy: boolean
    }
}

type Action = {
    updateJeopardyRound: () => void
}

const jeopardyFunctionality = (set) => ({
    rounds: {
        jeopardy: true,
        double_jeopardy: false,
        final_jeopardy: false
    },
    // TODO: build out updateRound, which uses current game board state to do so
    // updateJeopardyRound: () => set(() => )
})

export const useJeopardyFunctionality = create<JeopardyFunctionalityState & Action>(jeopardyFunctionality);