import React from 'react';
import { thunkClearGifs, thunkClearCurrGif } from '../store/actions/gifAction';
import { AppState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom'


export const GifDetails: React.FC = () => {
    const gif = useSelector((state: AppState) => state.gifApp.currGif);
    const history = useHistory();
    const dispatch = useDispatch()
    const actions = bindActionCreators({ thunkClearGifs, thunkClearCurrGif }, dispatch);


    const onCloseDetail = () => {
        actions.thunkClearGifs();
        actions.thunkClearCurrGif();
        history.replace('/');
    }

    return (
        <>
            <div className="screen" onClick={onCloseDetail} />
            { gif &&
                <div className="gif-detail-wrapper flex column">
                    <img src={gif.images.original.url} alt="" />
                    <h3>{gif.title}</h3>
                    <p>Resolution: {gif.images.original.height + ' x ' + gif.images.original.width}</p>
                </div>
            }
        </>
    )
}
