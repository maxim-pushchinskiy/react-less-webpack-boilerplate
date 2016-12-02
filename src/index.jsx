import React, {Component} from 'react';
import {render} from 'react-dom';

import './main.less';

class Greeter extends Component{
    render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

render(<Greeter />, document.getElementById('root'));