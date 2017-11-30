/**
 * Created by Panda on 30/11/2017.
 */




import React, { Component } from 'react';
//import $ from 'jquery';


class Convoys extends Component {

    constructor(props) {
        super(props);

        this.state = {convoy: []};
    }

    componentDidMount() {
        this.ConvoyList();
    }

    ConvoyList() {
        /*
         $.get('http://cunning-convoys.azurewebsites.net/api/convoys')
         .then(({results}) => this.setState({convoy: results}));
         */

        this.setState({convoy: [
            {
                "id": "string",
                "destinationCity": "string",
                "distanceFromCityBorder": 0,
                "speedInKmPerHour": 0,
                "vehicles": [
                    {
                        "id": "string",
                        "licensePlate": "string",
                        "numberOfNomads": 0,
                        "nomads": [
                            {
                                "firstName": "string",
                                "lastName": "string"
                            }
                        ]
                    }
                ],
                "origin": "string"
            }
        ] })

        }

    render() {
        const convoys = this.state.convoy.map((item, i) => (
            <div>
                <h1>{ item.name } { item.destinationCity}</h1>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ convoys }</div>
            </div>
        );
    }
}

export default Convoys;













