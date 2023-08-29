'use strict';

const movies = [];

let more = true;
while (more) {
  const title = prompt('Enter a movie title:');
  const rating = prompt('Enter a rating for the movie (1-5):');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Do you want to enter more movies?');
}

function sortMovies(a, b) {
  const sort = b.rating - a.rating;
  return sort;
}
movies.sort(sortMovies);

const tbody = document.getElementById('target');
for (const movie of movies) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerText = movie.title;
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;
  tr.appendChild(td2);
  tbody.appendChild(tr);
}

const favourite = movies[0];
document.getElementById('fav').innerText = favourite.title;
