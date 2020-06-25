import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import Cards from './components/Cards/Cards.jsx';
// import Chart from './components/Chart/Chart.jsx';
// import CountryPicker from './components/CountryPicker/CountryPicker.jsx';

import {Cards, Chart, CountryPicker} from './components';
import styles from './app.module.css';
//import { fetchData } from './covidapi';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        confirmed : 0,
        recovered: 0,
        deaths: 0,
        lastUpdated: 0
      }
    }


    componentDidMount() {
      this.covidData();
    }

    covidData () {
      $.ajax({
        method: 'GET',
        url: 'https://covid19.mathdro.id/api'
      }).done((data) => {
          this.setState({
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdated: data.lastUpdated
          })
          console.log(this.state.confirmed)
        }
      );
    }

    render () {


      return (
      <div class= 'container'>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));