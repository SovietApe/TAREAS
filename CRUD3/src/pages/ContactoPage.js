import React from 'react'
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (porps) => {
    return (
        <body class='body3'>
            <main class="holderForm">
                <div class="containerForm">
                    <div>
                        <h2>Contacto Rapido</h2>
                        <form class="formulario">
                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text"/>
                            </p>
                            <p>
                            <label for="email">Email</label>
                            <input type="text"/>
                            </p>
                            <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text"/>
                            </p>
                            <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea></textarea>
                            </p>
                            <p>
                            <input type="submit" value="Enviar"/>
                            </p>
                        </form>
                    </div>
                    <div class="datos">
                        <h2>Otras Vias de Comunicacion</h2>
                        <p>Tambien puede contactarse con nosotros usando los siguientes metodos</p>
                        <ul>
                            <li>Teléfono: 2335135</li>
                            <li>Email: contactosofovial@gmail.com</li>
                            <li>Facebook: Sofovial</li>
                            <li>Instagram: @Sofovial</li>
                        </ul>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default ContactoPage;
