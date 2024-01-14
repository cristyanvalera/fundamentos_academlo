# Actividad 2: Marcado Avanzado y Validación de HTML

## Objetivo:
En esta actividad, los estudiantes trabajarán en la mejora de su conocimiento sobre HTML, utilizando etiquetas de estructura semántica, listas, tablas y multimedia. Además, se enfocarán en validar su código HTML.

## Pasos a Seguir:

1. **Marcado Semántico:**
   - Revisa tu código y asegúrate de que estás utilizando etiquetas semánticas de manera adecuada. Integra las etiquetas `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, y `<footer>` según sea necesario.

2. **Listas:**
   - Agrega al menos dos listas en tu contenido. Pueden ser listas ordenadas (`<ol>`) o listas no ordenadas (`<ul>`). Utiliza la etiqueta `<li>` para cada elemento de la lista.

3. **Tablas:**
   - Introduce una tabla en tu contenido. Utiliza las etiquetas `<table>`, `<tr>` (fila), `<th>` (celda de encabezado) y `<td>` (celda de datos) para estructurar la tabla. Asegúrate de incluir títulos para las columnas utilizando `<th>`.

4. **Multimedia:**
   - Incorpora al menos un elemento multimedia. Puede ser una imagen (`<img>`), un video (`<video>`), o un audio (`<audio>`). Utiliza el atributo `src` para especificar la fuente del archivo multimedia.

5. **Validación de Código:**
   - Guarda tu archivo HTML después de realizar todos los pasos anteriores.
   - Abre tu navegador web o utiliza un servicio en línea para validar tu código HTML. Puedes utilizar el siguiente enlace para acceder al "Markup Validation Service": [Markup Validation Service](https://validator.w3.org/#validate_by_upload).
   - Sube tu archivo HTML y verifica que no haya errores de validación. Si los hay, corrige tu código según las recomendaciones del validador.

### Ejemplo (con algunos elementos adicionales):
```html
<!DOCTYPE html>
<html lang='es'>
  <head>
    ...
    <title>Mi Portafolio Avanzado</title>
  </head>
  <body>
    <header>
      <h1>Mi Portafolio</h1>
      <nav>
        <ul>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#educacion">Educación</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="sobre-mi">
        <h2>Sobre Mí</h2>
        <p>Me encanta el desarrollo web...</p>
      </section>

      <section id="educacion">
        <h2>Educación</h2>
        <p>Estudié en Academlo...</p>
      </section>

      <section id="habilidades">
        <h2>Habilidades</h2>

        <h3>Tecnologías</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h3>Habilidades blandas</h3>
        <ul>
          <li>Trabajo en equipo</li>
          <li>Comunicación</li>
          <li>Resolución de problemas</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 Mi Portafolio</p>
    </footer>
  </body>
</html>
```

¡Felicidades! Has completado la segunda actividad, integrando marcado avanzado y validando tu código HTML. Estos conceptos te permitirán crear páginas web más completas y accesibles.