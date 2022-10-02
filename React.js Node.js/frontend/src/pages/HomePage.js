import React from 'react';
import '../styles/components/pages/HomePage.css'
import homeimg from '../public/images/home_img.JPG'
const HomePage = (props) => {
    return(
    <body class='body-'>
        <main className='holder'>
        <div id="vacio"></div>        
        <div class="espacio">
            <div class="container">
                <figure id="titulo" class="text-center">
                    <blockquote class="blockquote">
                        <p>Sociedad de Fomento del Video Alternativo</p>
                      </blockquote>
                      <figcaption class="blockquote-footer">
                        fundada en el año<cite title="Source Title"> 1989</cite>
                      </figcaption>
                </figure>
                <div class="contenido">
                    <div class="cuadro">
                        <img src={homeimg} alt="niños con bandera" class="home_img"/>
                        <p>
                            Sofovial puede definirse como un colectivo de trabajo comunicacional solidario que generó en la región un tipo de prácticas y organización  articuladoras de experiencias y saberes habitualmente distantes, una creativa relación entre el Video Proceso, la Educación Popular y la Estrategia de APS (Atención Primaria de la Salud).
                            Desde tal conjunción acompaña desde 1989 el que hacer cotidiano de muchísimas instituciones y organizaciones sociales, aportando producciones y capacitación tanto en el campo de la Salud como en los alcances políticos/estratégicos de la Comunicación Alternativa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </body>
    );
}

export default HomePage;