import React from 'react';
import { GifInterface } from '../interfaces/gifsInrefaces';
import { GifPreview } from './GifPreview';

interface IProps {
    gifs: GifInterface[];
}

export const GifList: React.FC<IProps> = ({ gifs }) => {

    return (
        <div className="gif-list-wrapper">
            {gifs.map(gif => <GifPreview key={gif.id} gif={gif}  />)}
        </div>
    )
}