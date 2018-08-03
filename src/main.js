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

function fillMercuryDiv(obj) {
	$("#mercuryAge").text(obj.mercuryAgeYears);
	$("#mercuryNextBday").text(obj.nextMercuryBirthday.toString());
	$("#mercuryLifeExp").text(obj.mercuryLifeExpectancy);
}

function fillVenusDiv(obj) {
	$("#venusAge").text(obj.venusAgeYears);
	$("#venusNextBday").text(obj.nextVenusBirthday.toString());
	$("#venusLifeExp").text(obj.venusLifeExpectancy);
}

function fillMarsDiv(obj) {
	$("#marsAge").text(obj.marsAgeYears);
	$("#marsNextBday").text(obj.nextMarsBirthday.toString());
	$("#marsLifeExp").text(obj.marsLifeExpectancy);
}

function fillJupiterDiv(obj) {
	$("#jupiterAge").text(obj.jupiterAgeYears);
	$("#jupiterNextBday").text(obj.nextJupiterBirthday.toString());
	$("#jupiterLifeExp").text(obj.jupiterLifeExpectancy);
}

$(document).ready(function() {

	$("#birthDateForm").submit(function(event) {
		event.preventDefault();

		let galaxy = new GalacticAge();
		let inputtedBirthdate = $("#inputtedBirthDate").val();
		let lifeExp = $("#inputtedLifeExp").val();
		let birthdate = new Date(inputtedBirthdate);
		galaxy.setUserBirthDate(birthdate);
		galaxy.calculateSolarAge();
		galaxy.calculateNextBirthdays(lifeExp);

		fillEarthDiv(galaxy);
		fillMercuryDiv(galaxy);
		fillVenusDiv(galaxy);
		fillMarsDiv(galaxy);
		fillJupiterDiv(galaxy);

		$(".prehidden").hide().fadeIn(1000);
	});

});
