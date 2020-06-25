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
        data: [],
        daily: [],
        countries: []
      }
    }


    componentDidMount() {
      this.covidData();
      this.covidDailyData();
      this.covidCountriesData();

    }

    covidData () {
      $.ajax({
        method: 'GET',
        url: 'https://covid19.mathdro.id/api'
      }).done((data) => {
          this.setState({
            data: data
          })

        }
      );
    }

    covidDailyData () {
      $.ajax({
        method: 'GET',
        url: 'https://covid19.mathdro.id/api/daily'
      }).done((data) => {
          this.setState({
            daily: data
          })


        }
      );
    }

    covidCountriesData () {
      $.ajax({
        method: 'GET',
        url: 'https://covid19.mathdro.id/api/countries'
      }).done((data) => {
          var storage = [];
          for (var i = 0; i < data.countries.length; i++) {
            console.log(data.countries[i].name)
            storage.push(data.countries[i].name)
          }
          this.setState({
            countries: storage
          })
          //console.log(this.state.countries)


        }
      );
    }


    render () {


      return (
      <div className= {styles.container}>
        <Cards confirmed={this.state.data.confirmed} recovered={this.state.data.recovered} deaths={this.state.data.deaths} lastUpdated={this.state.data.lastUpdate}/>
        <CountryPicker data={this.state.countries}/>
        <Chart data={this.state.daily}/>
      </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));