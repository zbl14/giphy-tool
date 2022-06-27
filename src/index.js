import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#getGifs').click(function() {
    const keyword = $('#keyword').val();
    $('#keyword').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        /* eslint-disable*/
        getElements(response);
        /* eslint-enable*/
      }
    };

    request.open("GET", url, true);
    request.send();

    /* eslint-disable*/
    function getElements(response) {
      for (let i = 0; i < `${response.data.length}`; i++){
      $('.showGifs').append(`<img src="${response.data[i].images.original.url}">`);
      }
    };
    /* eslint-enable*/
  });
});