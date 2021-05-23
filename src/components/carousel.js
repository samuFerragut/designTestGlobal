import { Component } from 'react';

class Carousel extends Component {
    render(){
        return (
            <div className="carousel-horizontal">
                <div className="carousel-india">
                    <h3 className="carousel-text"><a href="/India">India</a></h3>
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
        );
    }
}

export default Carousel;