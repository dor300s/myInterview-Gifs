import { GifInterface } from "../../interfaces/gifsInrefaces";


const SET_GIFS = "SET_GIFS";
const SET_GIF = "SET_GIF";
const UPDATE_GIFS = "UPDATE_GIFS";
const CLEAR_GIFS = "CLEAR_GIFS";
const CLEAR_CURR_GIF = "CLEAR_CURR_GIF";


interface SetGifsAction {
    type: typeof SET_GIFS;
    gifs: GifInterface[];
}

interface SetGifAction {
    type: typeof SET_GIF;
    gif: GifInterface;
}

interface UpdateGifsAction {
    type: typeof UPDATE_GIFS;
    gifs: GifInterface[];
}

interface ClearGifstAction {
    type: typeof CLEAR_GIFS;
}

interface ClearCurrGiftAction {
    type: typeof CLEAR_CURR_GIF;
}

export type GifActionTypes = SetGifsAction | SetGifAction | UpdateGifsAction | ClearGifstAction | ClearCurrGiftAction;