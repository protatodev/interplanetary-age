import { GalacticAge } from './galactic-age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function fillEarthDiv(obj) {
	$("#earthAge").text(obj.earthAgeYears);
	$("#earthNextBday").text(obj.nextEarthBirthday.toString());
	$("#earthLifeExp").text(obj.earthLifeExpectancy);
}

$(document).ready(function() {

	$(".prehidden").hide();

	$("#birthDateForm").submit(function() {
		let galaxy = new GalacticAge();
		let birthdate = $("#inputtedBirthDate").val();
		let lifeExp = $("#inputtedLifeExp").val();
		galaxy.setUserBirthDate(birthdate);
		galaxy.calculateSolarAge();
		galaxy.calculateNextBirthdays(lifeExp);


	});



});
