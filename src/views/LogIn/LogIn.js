import '../../assets/css/logIn.css';

/**COMPONENTS */
import SecondaryHeader from '../../components/secondaryHeader';

/**IMAGES */
import logoGoogle from '../../assets/images/logo-google.jpg';
import logoFace from '../../assets/images/face_logo.jpg';

function LogIn() {
  return (
    <div className="App">
      <div className="header">
        <SecondaryHeader />
      </div>
      {/** CLEAR FLOATS */}
      <div className="clearfix"></div>

      <div className="square">
        <h2>Inicia Sesión</h2>
        <div>
          <button className="facebook"><img className="btn-logo" src={logoFace}></img><p className="btn-text">Continuar con Facebook</p></button>
        </div>
        <div>
          <button className="google"><img className="btn-logo" src={logoGoogle}></img><p className="btn-text">Continuar con Google</p></button>
        </div>
        <p className="separate">O</p>
        <form>
          <div className='form-group'>
            <input type="email" ></input>
          </div>
          <div className='form-group'>
            <input type="password" ></input>
          </div>
          <div className="link">
            <a  href="#">¿Has olvidado tu contraseña?</a>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>Guardar sesión
              No lo marques si compartes ordenador
            </label>
          </div>
          <div>
            <button className="submit" type="submit"><p className="btn-text">Inicia sesión</p></button>
          </div>
          <div>
            <p>¿Nuevo en Just Eat? <a href="#">Crear cuenta</a></p>
            <br></br>
            <p>Al crear la cuenta, aceptas nuestros <a href="#">términos y condiciones</a>. Por favor, lee nuestra <a href="#">política de privacidad</a>
              y nuestra <a href="#">política de cookies</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;