export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=J1So1Itq2u2HgEYdDB5VTe90fUx4rcsM&q=${ category }&limit=20`
    const res = await fetch( url );
    const { data } = await res.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};