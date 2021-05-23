import { Component } from 'react';

/** CSS */
import '../../assets/css/index.css';

/** COMPONENTS */
import Header from '../../components/header';
import Carousel from '../../components/carousel'


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
                    <Carousel />
                </div>
            </div>
            
        );
    }
}

export default Index;