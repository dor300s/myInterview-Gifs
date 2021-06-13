import { GifInterface } from "../../interfaces/gifsInrefaces";
import { GifActionTypes } from "../types/actionTypes";
import { get } from '../../services/gifService';
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { Action } from "redux";


export const setGifs = (gifs: GifInterface[]): GifActionTypes => ({
    type: "SET_GIFS",
    gifs
})

export const setGif = (gif: GifInterface): GifActionTypes => ({
    type: "SET_GIF",
    gif
})

export const updateGifs = (gifs: GifInterface[]): GifActionTypes => ({
    type: "UPDATE_GIFS",
    gifs
})

export const clearGifs = (): GifActionTypes => ({
    type: "CLEAR_GIFS"
})

export const clearCurrGif = (): GifActionTypes => ({
    type: "CLEAR_CURR_GIF"
})


export const thunkSetGifs = (query: string, offset: number): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
    try {
        const gifs = await get(query, offset);
        dispatch(setGifs(gifs));
    } catch (err) {
        console.log('gifAction: Errow while setting gifs', err);
    }
}

export const thunkSetGif = (gif: GifInterface): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
    try {
        dispatch(setGif(gif));
    } catch (err) {
        console.log('gifAction: Errow while set gif', err);
    }
}

export const thunkUpdateGifs = (query: string, offset: number): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
    try {
        const gifs = await get(query, offset);
        dispatch(updateGifs(gifs));
    } catch (err) {
        console.log('gifAction: Errow while updating gifs', err);
    }
}

export const thunkClearGifs = (): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
    try {
        dispatch(clearGifs());
    } catch (err) {
        console.log('gifAction: Errow while clearing gifs', err);
    }
}

export const thunkClearCurrGif = (): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
    try {
        dispatch(clearCurrGif());
    } catch (err) {
        console.log('gifAction: Errow while clearing gif', err);
    }
}