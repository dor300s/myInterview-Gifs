import React, { ChangeEvent, useState, useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import { AppState } from '../store/store';
import { thunkSetGifs, thunkSetGif, thunkUpdateGifs, thunkClearGifs, thunkClearCurrGif } from '../store/actions/gifAction';
import { GifList } from '../components/GifList';


const DEBOUNCE_TIME = 1000;

export const GifApp: React.FC = (props: any) => {
    const [query, setQuery] = useState<string>('');
    const [offset, setOffset] = useState<number>(0);
    const debouncer = useRef<unknown>();
    const triggerRef = useRef<any>();
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        observer.current = new IntersectionObserver((enteries) => {
            if (enteries[0].isIntersecting) setOffset(prev => prev + 9);
        }, { threshold: .9 })
    }, [])

    useEffect(() => {
        props.thunkUpdateGifs(query, offset);
    }, [offset])

    useEffect(() => {
        clearTimeout(debouncer.current as number);
        debouncer.current = setTimeout(() => {
            setOffset(0);
            props.thunkSetGifs(query, 0);
        }, DEBOUNCE_TIME);

    }, [query])

    useEffect(() => {
        if (triggerRef.current) {
            observer.current?.observe(triggerRef.current);
        }
    }, [triggerRef.current])

    useEffect(() => {
        console.log(props.gifs)
    }, [props.gifs])

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(() => target.value);
    }




    return (
        <div className="giphy-app-container">
            <input className="search-input" type="text" onChange={handleChange} />
            <GifList gifs={props.gifs} thunkSetGif={props.thunkSetGif} />
            <div className="trigger" ref={triggerRef} style={{ height: '20px' }} />
        </div>
    )
}


const mapStateToProps = (state: AppState) => {
    return {
        gifs: state.gifApp.gifs,
        currGif: state.gifApp.currGif
    }
}

const mapDispatchToProps = {
    thunkSetGifs,
    thunkSetGif,
    thunkUpdateGifs,
    thunkClearGifs,
    thunkClearCurrGif
}

export default connect(mapStateToProps, mapDispatchToProps)(GifApp);