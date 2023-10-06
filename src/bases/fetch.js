const apiKey = '3nL74NLGuqBMnhahzRRFtm3PU7kTG3O8';

//https://api.giphy.com/v1/gifs/random?api_key=3nL74NLGuqBMnhahzRRFtm3PU7kTG3O8

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then(
    (
      resp //{
    ) =>
      //resp.json().then((respJson) => console.log(respJson));
      resp.json()
  )
  // })
  .then(({ data }) => {
    const { url } = data.images.original;
    //console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.error);
