import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    // THIS IS THE ONLY TIME we do direct assigment to this.setState
    constructor(props) {
        super(props);

        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we calles setState
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    // React says we have to define render!!
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));
