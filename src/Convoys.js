import React, { Component } from 'react';



class Convoys extends Component {

    constructor(props) {
        super(props);

        this.state = {convoy: []};
    }

    componentDidMount() {
        this.ConvoyList();
    }

    ConvoyList() {
        $.getJSON('http://cunning-convoys.azurewebsites.net/swagger/#!/Cities/ApiCitiesGet')
            .then(({results}) => this.setState({person: results}));
    }

    render() {
        const convoys = this.state.convoy.map((item, i) => (
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
                <div className="panel-list">{ convoys }</div>
            </div>
        );
    }
}








