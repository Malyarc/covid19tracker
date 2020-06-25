import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {

  return (

    <FormControl className={styles.formControl}>
      <NativeSelect>
      <option value="global">Global</option>
      {props.data.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>

  )
}

export default CountryPicker;