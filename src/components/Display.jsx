import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

function Display() {
    const displayRef = useRef(null);
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const bgColor = isAlbum ? albumsData[Number(albumId)].bgColor : null;

    useEffect(() => {
        if (displayRef.current) {
            if (isAlbum && bgColor) {
                displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
            } else {
                displayRef.current.style.background = `linear-gradient(#121212)`;
            }
        }
    }, [displayRef, isAlbum, bgColor]);

    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    );
}

export default Display;
