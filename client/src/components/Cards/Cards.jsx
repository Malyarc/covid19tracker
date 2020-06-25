import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = (props) => {
  if (!props.confirmed) {
    return 'Loading...';
  }
  //console.log(props.lastUpdated)

  return (

    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary"> {new Date(props.lastUpdated).toDateString()} </Typography>
            <Typography variant="body2">Number of Active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(props.lastUpdated).toDateString()}</Typography>
            <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(props.lastUpdated).toDateString()}</Typography>
            <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div>

    )
}

export default Cards;