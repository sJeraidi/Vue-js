import { createStore } from 'vuex'

import { SET_NOTE } from '@/store/mutation-types';

// Create a new store instance.
const store = createStore({
  state: {
    currentMovie: {},
    movies: [{
      id: 1,
      title: "Disney Aladdin",
      image: "https://www.shoofpro.com/wp-content/uploads/2019/01/s12.jpg",
      note: 3,
    },
    {
      id: 2,
      title: "Dragon Ball Z",
      image: "https://images-na.ssl-images-amazon.com/images/I/71aEVyDw%2B8L._AC_SY606_.jpg",
      note: 5,
    },
    {
      id: 3,
      title: "Dragon Ball Z",
      image: "https://images-na.ssl-images-amazon.com/images/I/41hyeY%2BUqnL._AC_.jpg",
      note: 5,
    },
    {
      id: 4,
      title: "Kiki la Petite Sorcière",
      image: "https://www.ecranlarge.com/uploads/image/001/118/wug1aszirmcqqsmavvn7yzktuyb-689.jpg",
      note: 4,
    },{
      id: 5,
      title: "Tom and Jerry",
      image: "https://fr.web.img6.acsta.net/r_1280_720/pictures/210/525/21052583_2013102415340471.jpg",
      note: 5,
    },
    {
      id: 6,
      title: "Spongebob Squarepants",
      image: "https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg",
      note: 4,
    },
    {
      id: 7,
      title: "Princesse Mononoké",
      image: "https://unc.nc/wp-content/uploads/2018/04/204765.jpg",
      note: 5,
    },
    {
      id: 8,
      title: "Mon voisin Totoro",
      image: "https://cdn1.cinenode.com/movie_poster/43/full/mon-voisin-totoro-43444.jpg",
      note: 4,
    }]
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
    getCurrentMovie(state) {
      return state.currentMovie;
    }
  },
  mutations: {
    setCurrentMovie (state, movie) {
      state.currentMovie = movie;
    },
    setCurrentMovieVersionMutation (state, movieId) {
      let movieFound = {};
      state.movies.forEach((movie) => {
        if (movieId == movie.id) {
          movieFound = movie;
        }
      });
      state.currentMovie = movieFound;
    },
    [SET_NOTE] (state, note) {
      state.currentMovie.note = note;
    }
  },
  actions: {
    setCurrentMovie ({commit, state}, movieId) {
      let movieFound = {};
      state.movies.forEach((movie) => {
        if (movieId == movie.id) {
          movieFound = movie;
        }
      })
      commit('setCurrentMovie', movieFound);
    }
  }
})

export default store;