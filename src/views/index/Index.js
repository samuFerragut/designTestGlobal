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
                    <Carousel />
                </div>            
        );
    }
}

export default Index;