export const API_KEY = "?api_key=4a49da4a24dd25aba0ffba3f451d1f60";

export function searchMovies(title) {
    const init = {
        method: 'GET',
        headers: new Headers(),
        mode: 'no-cors',
        cache: 'default' 
    };
    return fetch(new Request("search/movie/" + API_KEY + "&page=1&query=" + title))
    .then((response) => {
        return Promise.resolve(response);
    })
    .then((value) => {
        return value.json();
    })
    .then((parsed) => {
        return parsed;
    })
    .catch((error) => {
        console.error(error);
    });
}

export function getMovieDetails(id) {
   fetch(new Request("movie/" + id + "/credits" + API_KEY))
    .then((response) => {
        return Promise.resolve(response);
    }) 
    .then((value) => {
        return value.json();
    })
    .catch((error) => {
        console.error(error);
    });
}