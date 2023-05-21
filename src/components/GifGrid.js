import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: gifs, loading } = useFetchGifs( category );

    return (
        <>
            <h2 className='animate__animated animate__slideInLeft'>{ category }</h2>
            { loading && <p>Loading...</p> }
            <div className='card-grid'>
                {
                    gifs.map( gif => <GifGridItem key={gif.id} {...gif}></GifGridItem> )
                }
            </div>
        </>
    )
}
