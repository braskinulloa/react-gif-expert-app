export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uTlIITl5Bp5jPKwGSAToE0dGNw5McD5s&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}