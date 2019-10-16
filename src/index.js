import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    // THIS IS THE ONLY TIME we do direct assigment to this.setState
    constructor(props) {
        super(props);

        this.state = {lat: null, long: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we calles setState
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    // React says we have to define render!!
    render () {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDom.render(<App />, document.querySelector('#root'));
