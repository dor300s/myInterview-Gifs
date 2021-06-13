import React, { useState } from 'react';
import { GifInterface } from '../interfaces/gifsInrefaces';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thunkSetGif } from '../store/actions/gifAction';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


interface IProps {
    gif: GifInterface,
}


export const GifPreview: React.FC<IProps> = ({ gif }) => {
    const dispatch = useDispatch();
    const actions = bindActionCreators({ thunkSetGif }, dispatch);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleClick = () => {
        actions.thunkSetGif(gif);
        history.replace('/details');
    }

    return (
        <div className="gif-preview-wrapper" style={{ maxWidth: '800px' }} onClick={handleClick}>
            <img src={gif.images.downsized.url} onLoad={() => setIsLoading(false)} hidden={isLoading} />
            {isLoading && <Skeleton height={400}/>}
        </div>
    )
}