//import * as genresAPI from './fakeGenreService';

const movies = [
    { 
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        liked : true,
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 5,
        dailyRentalRate: 4.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        liked : false,
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
        numberInStock: 8,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471818",
        title: "Trip to Italy",
        genre: {_id: "5b21ca3eeb7f6fbccd471819", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 5.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Airplane",
        genre: {_id: "5b21ca3eeb7f6fbccd471819", name: "Comedy"},
        numberInStock: 6,
        dailyRentalRate: 1.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471820",
        title: "Wedding Crashers",
        genre: {_id: "5b21ca3eeb7f6fbccd471821", name: "Romance"},
        numberInStock: 6,
        dailyRentalRate: 8.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
      _id: "5b21ca3eeb7f6fbccd471824",
      title: "365 Days",
      genre: {_id: "5b21ca3eeb7f6fbccd471821", name: "Romance"},
      numberInStock: 6,
      dailyRentalRate: 7.0,
      publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
      _id: "5b21ca3eeb7f6fbccd471825",
      title: "Love Again",
      genre: {_id: "5b21ca3eeb7f6fbccd471821", name: "Romance"},
      numberInStock: 6,
      dailyRentalRate: 5.5,
      publishDate: "2018-01-03T19:04:28.809Z"
   },
     { 
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "Gone Girl",
        genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
        numberInStock: 7,
        dailyRentalRate: 4.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "The Sixth Sense",
        genre: {_id: "5b21ca3eeb7f6fbccd471822", name: "Horror"},
        numberInStock: 9,
        dailyRentalRate: 5.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
     { 
        _id: "5b21ca3eeb7f6fbccd471823",
        title: "The Avengers",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 10,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z"
     },
];

export function getMovies () {
    return movies;
}

export function getMovie (id) {
    return movies.find( m => m._id === id);
}

