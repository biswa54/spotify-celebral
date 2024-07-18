import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from '../components/AlbumItem'
import SongItem from './SongItem'

function DisplayHome() {
    return (
        <>
            <NavBar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, idx) =>

                        <AlbumItem key={idx}
                            image={item.image}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                        />
                    )}
                </div>

            </div>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, idx) =>

                        <SongItem key={idx}
                            image={item.image}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                        />
                    )}
                </div>

            </div>
        </>
    )
}

export default DisplayHome
