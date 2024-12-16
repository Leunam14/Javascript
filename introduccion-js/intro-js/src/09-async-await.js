
const getImage = async() => {
    
    const apiKey = 'XKlZqDzYDELb0C79B3oJUsZPfNruPxYi';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
}

getImage( )