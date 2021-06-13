import React from 'react';
import { GifInterface } from '../interfaces/gifsInrefaces';

interface IProps {
    gif: GifInterface,
    thunkSetGif: any
}

export const GifPreview: React.FC<IProps> = ({ gif, thunkSetGif }) => {

    return (
        <div className="gif-preview-wrapper" style={{ maxWidth: '800px' }} onClick={() => thunkSetGif(gif)}>
            <img src={gif.images.downsized.url} />
        </div>
    )
}