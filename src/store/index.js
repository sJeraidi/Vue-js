import { createStore } from 'vuex'

import { SET_NOTE } from '@/store/mutation-types';

// Create a new store instance.
const store = createStore({
  state: {
    currentMovie: {},
    movies: [{
      id: 1,
      title: "Arrietty : Le Petit Monde des Chapardeurs",
      image: "https://imgsrc.cineserie.com/2011/01/519702.jpg?ver=1",
      note: 3,
    },
    {
      id: 2,
      title: "Le Château Ambulant",
      image: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUuVSLwHMx3GlpfY634H93zyjuEPISA2pwZxgB/jpg",
      note: 5,
    },
    {
      id: 3,
      title: "Le Voyage de Chihiro",
      image: "https://images-na.ssl-images-amazon.com/images/I/41hyeY%2BUqnL._AC_.jpg",
      note: 5,
    },
    {
      id: 4,
      title: "Kiki la Petite Sorcière",
      image: "https://resizing.flixster.com/GcW_2ZRRiHn7HbOM14sbXx1kzhM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzI4ZDY2MTllLWQ5MzktNDVlNC04MWQ4LWVmODQ4ODZiYTRkMS53ZWJw",
      note: 4,
    },{
      id: 5,
      title: "Le Vent se lève",
      image: "https://fr.web.img6.acsta.net/r_1280_720/pictures/210/525/21052583_2013102415340471.jpg",
      note: 5,
    },
    {
      id: 6,
      title: "Porco Rosso",
      image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4463b1a9af706a0f148357eb00f77aceec3447ebf543c7b48508145052200394._RI_V_TTW_.jpg",
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