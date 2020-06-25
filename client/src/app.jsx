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
        countries: [],
        country: '',
        countryData: {},
        selected: false
      }
      this.handleCountryChange = this.handleCountryChange.bind(this);
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
            //console.log(data.countries[i].name)
            storage.push(data.countries[i].name)
          }
          this.setState({
            countries: storage
          })
          //console.log(this.state.countries)


        }
      );
    }

    handleCountryChange (newcountry) {
      if (newcountry === 'global') {
        this.setState({
          country: '',
          selected: false
        })
      } else {
        console.log(newcountry);
        this.setState({
          country: newcountry,
          selected: true
        })
        this.covidCountrySelectedData(newcountry);
      }


    }

    covidCountrySelectedData (country) {
      $.ajax({
        method: 'GET',
        url: `https://covid19.mathdro.id/api/countries/${country}`
      }).done((data) => {

          this.setState({
            countryData: {
              confirmed: data.confirmed.value,
              recovered: data.recovered.value,
              deaths: data.deaths.value
            }
          })
          console.log(this.state.countryData)
        }
      );
    }


    render () {


      return (
      <div className= {styles.container}>
        <img className={styles.image} src='https://malyarctest.s3-us-west-1.amazonaws.com/image.png' alt="COVID-19" />
        <Cards confirmed={this.state.data.confirmed} recovered={this.state.data.recovered} deaths={this.state.data.deaths} lastUpdated={this.state.data.lastUpdate}/>
        <CountryPicker data={this.state.countries} handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.daily} bar={this.state.selected} countryData = {this.state.countryData} countryName= {this.state.country}/>
      </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('app'));