

export const Login = () => {

	return (
        <div className="formulario">
            <h1>Inicio de sesión</h1>
            <form method="post">
                <div className="username">
                    <input type="text" required /><br /><br />
                    <label>Nombre del usuario</label>
                </div>
                <div className="contrasena">
                    <input type="password" required /><br /><br />
                    <label>Contraseña</label>
                </div>
                <div className="recordar">Olvidé mi contraseña</div><br />
                <input type="submit" value="Ingresar" className="iniciar"/><br />
               <br /> <div className="registrarse">No tengo una cuenta y quiero <a href="#">registrarme</a></div>
            </form>
        </div>
    );
};