import React, { useState, useEffect, useRef } from 'react';
import { AppState } from '../store/store';
import { thunkSetGifs, thunkUpdateGifs } from '../store/actions/gifAction';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GifList } from '../components/GifList';



const DEBOUNCE_TIME = 1000;
const IMAGES_PER_REQUEST = 9;

export const GifApp: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [offset, setOffset] = useState<number>(0);
    const { gifs } = useSelector((state: AppState) => state.gifApp);
    const dispatch = useDispatch();
    const actions = bindActionCreators({ thunkSetGifs, thunkUpdateGifs }, dispatch);
    const debouncer = useRef<unknown>();
    const triggerRef = useRef<any>();
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        observer.current = new IntersectionObserver((enteries) => {
            if (enteries[0].isIntersecting) setOffset(prev => prev + IMAGES_PER_REQUEST);
        }, { threshold: .9 })

    }, [])

    useEffect(() => {
        offset && query && actions.thunkUpdateGifs(query, offset);
    }, [offset])

    useEffect(() => {
        clearTimeout(debouncer.current as number);
        debouncer.current = setTimeout(() => {
            setOffset(0);
            actions.thunkSetGifs(query, offset);
        }, DEBOUNCE_TIME);

    }, [query])

    useEffect(() => {
        triggerRef.current && observer.current?.observe(triggerRef.current);
    }, [triggerRef.current])

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(() => target.value);
    }




    return (
        <div className="giphy-app-container flex column">
            <input className="search-input" placeholder="Search" type="text" onChange={handleChange} />
            <GifList gifs={gifs} />
            <div className="trigger" ref={triggerRef} style={{ height: '20px' }} />
        </div>
    )
}
