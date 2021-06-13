import React from 'react';
import { GifInterface } from '../interfaces/gifsInrefaces';
import { GifPreview } from './GifPreview';

interface IProps {
    gifs: GifInterface[];
    thunkSetGif: any
}

export const GifList: React.FC<IProps> = ({ gifs, thunkSetGif }) => {

    return (
        <div className="gif-list-wrapper">
            {gifs.map(gif => <GifPreview key={gif.id} gif={gif} thunkSetGif={thunkSetGif} />)}
        </div>
    )
}