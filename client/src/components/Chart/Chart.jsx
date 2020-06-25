import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }




  render () {



    const barChart = (
      this.props.bar ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [this.props.countryData.confirmed, this.props.countryData.recovered, this.props.countryData.deaths],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${this.props.countryName}` },
          }}
        />
      ) : null
    );


    const lineChart = (

      this.props.data.length ? (

        <Line
          data={{
            labels: this.props.data.map((data) => data.reportDate),
            datasets: [{
              data: this.props.data.map((data) => data.totalConfirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: this.props.data.map((data) => data.deaths.total),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            },
            ],
          }}
        />
      ) : null
    );

    return (
      <div className={styles.container}>
        {this.props.bar ? barChart : lineChart}
      </div>
    )
  }

}

export default Chart;