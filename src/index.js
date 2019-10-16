import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {lat: null};
    }

    // React says we have to define render!!
    render () {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div>Latitude: </div>;
    }
}

ReactDom.render(<App />, document.querySelector('#root'));
