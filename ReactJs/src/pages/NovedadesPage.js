import react from 'react';
import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (porps) => {
    return (
    <body class='body2'>
        <main class="holder">
        <div class="bottom-header">
            <div class="navegacion">
                <div>
                    BIBLIOTECA
                </div>
                <nav class="navbar bg-gradient">
                    <div class="buscador">
                        <input type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                </nav>
            </div>
        </div>
            <div class='espacio2'>
                <div class="container2">
                    <div class="novedades">
                        <h3>Titulo</h3>
                        <h4>Subtitulo</h4>
                        <p>Descripcion- Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est temporibus quis! Ex nulla quibusdam, 
                        veritatis quod ad, obcaecati consequuntur ipsum perferendis sunt iure assumenda culpa eaque quia harum commodi?
                        </p>
                    </div>
                    <div class="novedades">
                        <h3>Titulo</h3>
                        <h4>Subtitulo</h4>
                        <p>Descripcion- Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est temporibus quis! Ex nulla quibusdam, 
                        veritatis quod ad, obcaecati consequuntur ipsum perferendis sunt iure assumenda culpa eaque quia harum commodi?
                        </p>
                    </div>
                    <div class="novedades">
                        <h3>Titulo</h3>
                        <h4>Subtitulo</h4>
                        <p>Descripcion- Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est temporibus quis! Ex nulla quibusdam, 
                        veritatis quod ad, obcaecati consequuntur ipsum perferendis sunt iure assumenda culpa eaque quia harum commodi?
                        </p>
                    </div>
                </div>
            </div> 
        </main>
    </body>

    );
}

export default NovedadesPage;

