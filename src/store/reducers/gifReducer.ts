import { GifInterface } from "../../interfaces/gifsInrefaces";
import { GifActionTypes } from "../types/actionTypes";


const gifState: GifInterface[] = [];

const initialState = {
    gifs: gifState,
    currGif: null as GifInterface | null
}

export const gifReducer = (state = initialState, action: GifActionTypes) => {

    switch (action.type) {
        case "SET_GIFS":
            return {
                ...state,
                gifs: [...action.gifs]
            }
        case "SET_GIF":
            return {
                ...state,
                currGif: { ...action.gif }
            }
        case "UPDATE_GIFS":
            return {
                ...state,
                gifs: [...state.gifs, ...action.gifs]
            };
        case "CLEAR_GIFS":
            return {
                ...state,
                gifs: []
            };
        case "CLEAR_CURR_GIF":
            return {
                ...state,
                currGif: null
            };

        default:
            return state;
    }

}