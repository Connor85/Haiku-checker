
import { Haiku } from './haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#haikuForm").submit(function(event) {
        event.preventDefault();

        let lineOne = $("#lineOne").val();
        // let lineTwo = $("#lineTwo").val();
        // let lineThree = $("#lineThree").val();

        let haikuChecker = new Haiku(lineOne);

        $("#result").text(haikuChecker.findLetters());
  
    });
});