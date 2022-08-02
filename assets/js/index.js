const cargarPeliculas = async () => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=88c5e5cafe35c98ccdd8b4536fd8eead&language=es-CHI`
      );
      console.log(respuesta);

      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        let peliculas = "";
        datos.results.forEach((pelicula) => {
          peliculas += `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
            `;
        });

        document.getElementById("contenedor").innerHTML = peliculas;
      } else if (respuesta.status === 401) {
        const datos = await respuesta.json();
        console.log("llave mala");
      } else if (respuesta.status === 404) {
        const datos = await respuesta.json();
        console.log("la pelicula no existe");
      } else {
        console.log("hubi un error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  cargarPeliculas();