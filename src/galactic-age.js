export class GalacticAge {

  constructor() {
    this.userBirthDate = null;
    this.mercuryAge = null;
    this.venusAge = null;
    this.marsAge = null;
    this.jupiterAge = null;
    this.earthAgeYears = 0;
    this.mercuryAgeYears = 0;
    this.venusAgeYears = 0;
    this.marsAgeYears = 0;
    this.jupiterAge = 0;
    this.nextEarthBirthday = null
    this.nextMercuryBirthday = null;
    this.nextVenusBirthday = null;
    this.nextMarsBirthday = null;
    this.nextJupiterBirthday = null;
  }

  setUserBirthDate(date) {
    this.userBirthDate = date;
  }

  calculateSolarAge() {
    let diffAge = new Date().getTime() - this.userBirthDate.getTime();
    let diffDate = new Date(diffAge);

    this.earthAgeYears = Math.abs(diffDate.getUTCFullYear() - 1970);
    
    // Mercury Age    
    let mercuryMills = diffAge / .24; 
    this.mercuryAge = new Date(mercuryMills);
    this.mercuryAgeYears = Math.abs(this.mercuryAge.getUTCFullYear() - 1970);

    // Venus Age
    let venusMills = diffAge / .62; 
    this.venusAge = new Date(venusMills);
    this.venusAgeYears = Math.abs(this.venusAge.getUTCFullYear() - 1970);

    // Mars Age
    let marsMills = diffAge / 1.88; 
    this.marsAge = new Date(marsMills);
    this.marsAgeYears = Math.abs(this.marsAge.getUTCFullYear() - 1970);

    // Jupiter Age
    let jupiterMills = diffAge / 11.86; 
    this.jupiterAge = new Date(jupiterMills);
    this.jupiterAgeYears = Math.abs(this.jupiterAge.getUTCFullYear() - 1970);

  }

  calculateNextBirthdays() {
    let currentDate = new Date();
    let earthYear, mercuryYear, venusYear, marsYear, jupiterYear;
    earthYear = currentDate.getFullYear();
    mercuryYear = currentDate.getFullYear();
    venusYear = currentDate.getFullYear();
    marsYear = currentDate.getFullYear();
    jupiterYear = new Date((currentDate.getTime() - this.jupiterAge.getTime()) + (913430718720 / 11.86));

    if(this.userBirthDate.getMonth() <= currentDate.getMonth() || this.userBirthDate.getDay() <= currentDate.getDay()) earthYear += 1;
    if(this.mercuryAge.getMonth() <= currentDate.getMonth() || this.mercuryAge.getDay() <= currentDate.getDay()) mercuryYear += 1;
    if(this.venusAge.getMonth() <= currentDate.getMonth() || this.venusAge.getDay() <= currentDate.getDay()) venusYear += 1;
    if(this.marsAge.getMonth() <= currentDate.getMonth() || this.marsAge.getDay() <= currentDate.getDay()) marsYear += 1;
    if(this.jupiterAge.getMonth() <= currentDate.getMonth() || this.jupiterAge.getDay() <= currentDate.getDay()) jupiterYear.setFullYear(jupiterYear.getFullYear() + 1);
    
    this.nextEarthBirthday = new Date(earthYear, this.userBirthDate.getMonth(), this.userBirthDate.getDay());
    this.nextMercuryBirthday = new Date(mercuryYear, this.mercuryAge.getMonth(), this.mercuryAge.getDay());
    this.nextVenusBirthday = new Date(venusYear, this.venusAge.getMonth(), this.venusAge.getDay());
    this.nextMarsBirthday = new Date(marsYear, this.marsAge.getMonth(), this.marsAge.getDay());
    this.nextJupiterBirthday = new Date(jupiterYear.getFullYear(), this.jupiterAge.getMonth(), this.jupiterAge.getDay());
  }


}