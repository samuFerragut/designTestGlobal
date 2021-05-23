import { Component } from 'react';

/** CSS */
import '../../assets/css/india.css';

/** COMPONENTS */
import Header from '../../components/header';
import Carousel from '../../components/carousel';

/** IMAGES */
import india from '../../assets/images/cocina_india2.jpg';
import tandoori from '../../assets/images/Pollo-Tandoori.jpg';
import tikka from '../../assets/images/Pollo-Tikka.jpg';


class India extends Component {
    render(){
        return (
            <div className="bg-color">
                <div className="App">
                    <Header />
                </div>

                <div className="section">
                    <div className="section-box">
                    <img src={india}></img>
                    </div>
                    <div className="section-box">
                        <h2>Comida a domicilio</h2>
                        <p>Tikka masala, pollo tandoori, biryani, madras... no hay nada como una buena ración de curry indio para caldear el estómago. 
                            Es el plato más popular de la comida india y no es de extrañar. Son un remedio infalible para acabar con la sensación de hambre. 
                            Pero la gastronomía de la India tiene mucho más que proponer. Ofrece una maravillosa y amplia variedad de platos creados con especias 
                            locales, hierbas, verduras y frutas.</p>

                        <p>La India y sus diferentes regiones poseen estilos culinarios únicos y sabores identificativos. 
                            El norte es famoso por su tandoori picante y suave y su korma cremoso. Al sur le encantan los dosas finos, crujientes y rellenos. 
                            El este es caliente, como los chiles. El oeste se vuelve loco por el coco picante y el marisco. Y el centro es una combinación de todos ellos. 
                            La cocina india cubre todo el espectro de comidas. Cuando finalmente has decidido elegir el plato de tus sueños, 
                            todavía tienes la oportunidad de escoger el arroz o el pan perfecto. Arroz blanco, arroz integral, arroz pilau, naan, naan con ajo, naan relleno... 
                            Cada persona tiene su preferencia y todas ellas puedes encargarlas a domicilio con Just eat.</p>
                    </div>
                </div>
                <div className="sections-popular-body">
                    <h1>Platos populares</h1>
                    <div className="two-sections">
                        <div className="section-popular">
                            <div>
                                <img src={tandoori}></img>
                            </div>
                            <div className="section-popular-text">
                                <h2>Pollo Tandoori</h2>
                                <p>Si te hablan de pollo tandoori, ¿en qué tipo de gastronomía piensas? Es verdad, lo asocias con la cocina india y, 
                                    en parte, aciertas. En realidad, es típico de la región de Punyab, que se extiende por India y Pakistán. 
                                    En cualquier caso, es absolutamente delicioso y, por eso, es uno de los platos de pollo más demandados en los restaurantes 
                                    de cocina india. Lo preparan utilizando pollo troceado, sin deshuesar y sin piel, que se macera en una fantástica 
                                    mezcla de especias y yogur hasta que adquiere ese sabor exótico que nos encanta. Finalmente, se hornea en un horno taandor. 
                                    Lo sirven con una guarnición de arroz pilau o pilaf, y queda genial acompañado de un pan especial con frutos secos que, 
                                    muchas veces, los restaurantes indios también envían con este plato. Pídelo a domicilio, recíbelo cómodamente y 
                                    ¡déjate sorprender por su color, su textura y su increíble sabor!
                                </p>
                            </div>
                        </div>
                        <div className="section-popular">
                            <div>
                                <img src={tikka}></img>
                            </div>
                            <div className="section-popular-text">
                                <h2>Pollo Tikka</h2>
                                <p>Entre los platos más populares de la India destaca el pollo tikka masala. 
                                    Pero, ¿Qué es el pollo tikka? Es delicioso pollo deshuesado, marinado en especias y yogur y asado en un horno tandoor. 
                                    Con respecto a la increíble salsa masala, cada chef le da su toque especial, en función de las especias que utiliza. 
                                    Además, lleva salsa de tomate o leche de coco y nata. Lo sirven acompañado, habitualmente, por un sabroso arroz especiado 
                                    conocido como pilau o pilaf. Se cree es originario de Punyab y su exótico sabor ha enamorado a los paladares de todo 
                                    el mundo y viene causando furor en los restaurantes de cocina india en España. Anímate y pruébalo, ¡te conquistará!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <Carousel />
                </div>
            </div>
        );
    }
}

export default India;