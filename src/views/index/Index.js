import { Component } from 'react';

/** CSS */
import '../../assets/css/index.css';
import Header from '../../components/header';

/** IMAGES */
import Griega from '../../assets/images/griega.jpeg';
import India from '../../assets/images/india.jpeg';
import Japonesa from '../../assets/images/japonesa.jpeg';
import Kebab from '../../assets/images/kebab.jpeg';
import Mexicana from '../../assets/images/mexicana.jpeg';
import Pizza from '../../assets/images/pizza.jpeg';


class Index extends Component {
    render(){
        return (
            <div>
                <div className="App">
                    <Header />
                </div>
                <div className="body">
                    <div>
                        <h1>¿Que te apetece pedir?</h1>
                        <p>Tenemos una gran variedad de ...</p>
                    </div>
                    <div className="carousel-horizontal">
                        <div className="carousel-india">
                            <h3 className="carousel-text"><a href="#">India</a></h3>
                        </div>
                        <div className="carousel-pizza">
                            <h3 className="carousel-text"><a href="#">Pizza</a></h3>
                        </div>
                        <div className="carousel-kebab">
                            <h3 className="carousel-text"><a href="#">Kebab</a></h3>
                        </div>
                        <div className="carousel-griega">
                            <h3 className="carousel-text"><a href="#">Griega</a></h3>
                        </div>
                        <div className="carousel-japonesa">
                            <h3 className="carousel-text"><a href="#">Japonesa</a></h3>
                        </div>
                        <div className="carousel-mexicana">
                            <h3 className="carousel-text"><a href="#">Mexicana</a></h3>
                        </div>
                    </div>
                </div>
            
            </div>
            
        );
    }
}

export default Index;