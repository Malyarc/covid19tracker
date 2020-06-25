import $ from 'jquery';

const urlapi = 'https://covid19.mathdro.id/api';

export const fetchData = () => {
  $.ajax({
    type: 'GET',
    url: urlapi
  }).done((data) => {
    return data
  })
}