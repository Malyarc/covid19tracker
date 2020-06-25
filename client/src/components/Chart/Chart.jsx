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
    //console.log(this.props.data);

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
        {lineChart}
      </div>
    )
  }

}

export default Chart;