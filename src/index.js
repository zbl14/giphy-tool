import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { GiphyService } from './giphy-service.js';

$(document).ready(function() {
  $('#getGifs').click(function() {
    const keyword = $('#keyword').val();
    $('#keyword').val("");
    let promise = GiphyService.getGiphy(keyword);
    promise.then((response) => {
      const body = JSON.parse(response);
      for (let i = 0; i < `${body.data.length}`; i++){
        $('.showGifs').append(`<img src="${body.data[i].images.original.url}">`);
      }
    });
  });
});