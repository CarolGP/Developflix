import peliculas from './peliculas.js'

/* Pelis Acción */
const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
console.log(peliculasAccion);

const contenedorAccion = document.getElementById("genero-28");

peliculasAccion.forEach(peli =>{
    const p = document.createElement("p");
    p.textContent = peli.title;
    contenedorAccion.appendChild(p);
})

/* Pelis Thriller */
const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
console.log(peliculasThriller);

const contenedorThriller = document.getElementById("genero-53");

peliculasThriller.forEach(peli =>{
    const p = document.createElement("p");
    p.textContent = peli.title;
    contenedorThriller.appendChild(p);
})

/* Pelis Aventura */
const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
console.log(peliculasAventura);

const contenedorAventura = document.getElementById("genero-12");

peliculasAventura.forEach(peli =>{
    const p = document.createElement("p");
    p.textContent = peli.title;
    contenedorAventura.appendChild(p);
})