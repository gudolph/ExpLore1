import React from "react";
// import Info from "./Info";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";


export class Checkin extends React.Component {
    state = { userLocation: { lat: 32, lng: 32 }, loading: true };

    componentDidMount(props, marker, e) {

        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                this.setState({
                    userLocation: { lat: latitude, lng: longitude },
                    loading: false
                });
                // Call function
                this.props.passUpCoordinates({ lat: latitude, lng: longitude })
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }

    render() {
        const { loading, userLocation } = this.state;
        const { google } = this.props;
        const style = {
            display: 'block',
            margin: '0 auto', 
            width: '60%',
            height: '75%'
        }

        if (loading) {
            return null;
        }

        return (
            <div>
                <Map style={style} google={google} initialCenter={userLocation} zoom={15} >
                    <Marker onReady={this.onReady}
                        name={'Current location'} />
                </Map>
            </div>

        );

    };
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBY2MMkLEfuCTnKO_iUgyw2HMQLoPqfzLg"

})(Checkin); 
