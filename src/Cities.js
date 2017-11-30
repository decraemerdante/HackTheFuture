import React, {Component} from 'react';
//import $ from 'jquery';


class Cities extends Component {

    constructor(props) {
        super(props);

        this.state = {city: []};
    }

    componentDidMount() {
        this.CityList();
    }

    CityList() {
        /*
         $.get('http://cunning-cities.azurewebsites.net/api/cities')
         .then(({results}) => this.setState({city: results}));
         */

        this.setState({
            city: [{
                "id": "37aa0786-f2bc-4331-aee5-e8b05a8ab90c",
                "name": "Tokyo/Yokohama",
                "population": 33218276,
                "area": 6993,
                "country": "Japan"
            }, {
                "id": "3fab2c2c-9f03-456b-b1d6-f19c0f77f939",
                "name": "New York Metro",
                "population": 17819296,
                "area": 8683,
                "country": "USA"
            }, {
                "id": "522a7976-2972-423f-8f51-a6067b030719",
                "name": "Sao Paulo",
                "population": 17717241,
                "area": 1968,
                "country": "Brazil"
            }, {
                "id": "3c3022fa-ea1d-4ebe-9287-5826199e001b",
                "name": "Seoul/Incheon",
                "population": 17517983,
                "area": 1049,
                "country": "South Korea"
            }, {
                "id": "9c572cc4-cc33-4391-a8e4-da81d3fe4956",
                "name": "Mexico City",
                "population": 17419823,
                "area": 2072,
                "country": "Mexico"
            }, {
                "id": "36b314ca-dcf4-4ee6-88ad-b76d1b445180",
                "name": "Osaka/Kobe/Kyoto",
                "population": 16444747,
                "area": 2564,
                "country": "Japan"
            }, {
                "id": "6c475f9d-738a-4cb7-a3a4-48df86adbdde",
                "name": "Manila",
                "population": 14768164,
                "area": 1399,
                "country": "Philippines"
            }, {
                "id": "9bcb954c-71e8-4ce8-a096-3094abc067f7",
                "name": "Mumbai",
                "population": 14369335,
                "area": 484,
                "country": "India"
            }]
        })

    }

    render() {
        const cities = this.state.city.map((item, i) => (
            <div>
                <h1>{ item.name }</h1>
                <p>
                    { item.population }
                </p>
                <p>
                    { item.area }
                </p>
                <p>
                    { item.country }
                </p>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ cities }</div>
            </div>
        );
    }
}

export default Cities;








