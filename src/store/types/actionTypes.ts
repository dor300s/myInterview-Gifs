import { GifInterface } from "../../interfaces/gifsInrefaces";


export const SET_GIFS = "SET_GIFS";
export const SET_GIF = "SET_GIF";
export const UPDATE_GIFS = "UPDATE_GIFS";
export const CLEAR_GIFS = "CLEAR_GIFS";
export const CLEAR_CURR_GIF = "CLEAR_CURR_GIF";


export interface SetGifsAction {
    type: typeof SET_GIFS;
    gifs: GifInterface[];
}

export interface SetGifAction {
    type: typeof SET_GIF;
    gif: GifInterface;
}

export interface UpdateGifsAction {
    type: typeof UPDATE_GIFS;
    gifs: GifInterface[];
}

export interface ClearGifstAction {
    type: typeof CLEAR_GIFS;
}

export interface ClearCurrGiftAction {
    type: typeof CLEAR_CURR_GIF;
}

export type GifActionTypes = SetGifsAction | SetGifAction | UpdateGifsAction | ClearGifstAction | ClearCurrGiftAction;