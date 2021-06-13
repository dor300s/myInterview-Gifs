import React from 'react';
import { connect } from 'react-redux';
import { GifInterface } from '../interfaces/gifsInrefaces';
import { thunkSetGif, thunkClearCurrGif } from '../store/actions/gifAction';
import { AppState } from '../store/store';

interface IProps {
    gif: GifInterface
}

const GifDetails: React.FC<IProps> = ({ gif }) => {


    return (
        <div className="gif-detail-wrapper">
            <img src={gif.images.original.url} alt="" />
            <div>{gif.title}</div>
            <div>{gif.images.original.height + ' x ' + gif.images.original.width}</div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        currGif: state.gifApp.currGif
    }
}

const mapDispatchToProps = {
    thunkSetGif,
    thunkClearCurrGif
}

export default connect(mapStateToProps, mapDispatchToProps)(GifDetails);