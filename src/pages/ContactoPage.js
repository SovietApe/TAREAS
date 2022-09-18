import React from 'react'

const ContactoPage = (porps) => {
    return (
        <main className='holder contacto'>
            <div>
                <h2>Contacto Rapido</h2>
                <form className='formulario'>
                    <p>
                        <label for='nombre'>Nombre</label>
                        <input type='text'/>
                    </p>
                    
                    <p>
                        <label for='email'>Email</label>
                        <input type='text'/>
                    </p>
                    <p>
                        <label for='telefono'>Telefono</label>
                        <input type='text'/>
                    </p>
                    <p>
                        <label for='mensaje'>Mensaje</label>
                        <input type='text'/>
                    </p>
                    <p class='acciones'><input type='submit' value='enviar'/></p>
                </form>
            </div>
            <div class='datos'>
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telélofono: 4323141</li>
                    <li>Email: contacto@trasportesx.com.ar</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
