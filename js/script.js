import peliculas from './peliculas.js'

/* const img = document.createElement("img");
img.src = "https://image.tmdb.org/t/p/w500" + peli.poster_path; */

/* Pelis Acción */
const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
console.log(peliculasAccion);

const contenedorAccion = document.getElementById("genero-28");

peliculasAccion.forEach(peli =>{
    const div= document.createElement("div");
    const img= document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w200" + peli.poster_path; img.alt = "poster peli";
    const p = document.createElement("p");
    p.textContent = peli.title + " " + peli.vote_average + " ⭐️";
    div.appendChild(img);
    div.appendChild(p);
    contenedorAccion.appendChild(div);s
});


/* Pelis Thriller */
const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
console.log(peliculasThriller);

const contenedorThriller = document.getElementById("genero-53");

peliculasThriller.forEach(peli =>{
    const div = document.createElement("div");
    const img= document.createElement("img");
    img.src= "https://image.tmdb.org/t/p/w200" + peli.poster_path; img.alt = "poster peli";
    const p = document.createElement("p");
    p.textContent = peli.title + " " + peli.vote_average + " ⭐️";
    div.appendChild(img);
    div.appendChild(p);
    contenedorThriller.appendChild(div);
});



/* Pelis Aventura */
const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
console.log(peliculasAventura);

const contenedorAventura = document.getElementById("genero-12");

peliculasAventura.forEach(peli =>{
    const div = document.createElement("div");
    const img= document.createElement("img");
    img.src= "https://image.tmdb.org/t/p/w200" + peli.poster_path; img.alt = "poster peli";
    const p = document.createElement("p");
    p.textContent = peli.title + " " + peli.vote_average + " ⭐️";
    /* p.textContent = peli.vote_average; */
    div.appendChild(img);
    div.appendChild(p)
    contenedorAventura.appendChild(div);
});