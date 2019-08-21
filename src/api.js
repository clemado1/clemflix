import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "85e4447c4e350cb547394622d5434ef3",
        language: "en-US"
    }
});


export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => 
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: (term) => 
        api.get("movie/search", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("movie/airing_today"),
    showDetail: (id) => 
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: (term) => 
        api.get("tv/search", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}

export default api;