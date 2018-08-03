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
    this.nextEarthBirthday = null;
    this.nextMercuryBirthday = null;
    this.nextVenusBirthday = null;
    this.nextMarsBirthday = null;
    this.nextJupiterBirthday = null;
    this.earthLifeExpectancy = 0;
    this.mercuryLifeExpectancy = 0;
    this.venusLifeExpectancy = 0;
    this.marsLifeExpectancy = 0;
    this.jupiterLifeExpectancy = 0;
  }

  setUserBirthDate(date) {
    this.userBirthDate = date;
    console.log(this.userBirthDate);
  }

  calculateSolarAge() {
    const diffAge = new Date(new Date().getTime() - this.userBirthDate.getTime());
    const diffDate = new Date(diffAge);

    this.earthAgeYears = Math.abs(diffDate.getUTCFullYear() - 1970);
    
    // Mercury Age    
    const mercuryMills = diffAge / .24; 
    this.mercuryAge = new Date(mercuryMills);
    this.mercuryAgeYears = Math.abs(this.mercuryAge.getUTCFullYear() - 1970);

    // Venus Age
    const venusMills = diffAge / .62; 
    this.venusAge = new Date(venusMills);
    this.venusAgeYears = Math.abs(this.venusAge.getUTCFullYear() - 1970);

    // Mars Age
    const marsMills = diffAge / 1.88; 
    this.marsAge = new Date(marsMills);
    this.marsAgeYears = Math.abs(this.marsAge.getUTCFullYear() - 1970);

    // Jupiter Age
    const jupiterMills = diffAge / 11.86; 
    this.jupiterAge = new Date(jupiterMills);
    this.jupiterAgeYears = Math.abs(this.jupiterAge.getUTCFullYear() - 1970);

  }

  calculateNextBirthdays() {
    const currentDate = new Date();
    let earthYear, mercuryYear, venusYear, marsYear, jupiterYear;
    earthYear = currentDate.getFullYear();
    mercuryYear = currentDate.getFullYear();
    venusYear = currentDate.getFullYear();
    marsYear = currentDate.getFullYear();
    jupiterYear = new Date((currentDate.getTime() - this.jupiterAge.getTime()) + 374265450720).getFullYear();

    if(this.userBirthDate.getMonth() <= currentDate.getMonth() || this.userBirthDate.getDay() <= currentDate.getDay()) earthYear += 1;
    if(this.mercuryAge.getMonth() <= currentDate.getMonth() || this.mercuryAge.getDay() <= currentDate.getDay()) mercuryYear += 1;
    if(this.venusAge.getMonth() <= currentDate.getMonth() || this.venusAge.getDay() <= currentDate.getDay()) venusYear += 1;
    if(this.marsAge.getMonth() <= currentDate.getMonth() || this.marsAge.getDay() <= currentDate.getDay()) marsYear += 1;
    if(this.jupiterAge.getMonth() <= currentDate.getMonth() || this.jupiterAge.getDay() <= currentDate.getDay()) jupiterYear += 1;
    
    this.nextEarthBirthday = new Date(earthYear, this.userBirthDate.getMonth(), this.userBirthDate.getDay());
    this.nextMercuryBirthday = new Date(mercuryYear, this.mercuryAge.getMonth(), this.mercuryAge.getDay());
    this.nextVenusBirthday = new Date(venusYear, this.venusAge.getMonth(), this.venusAge.getDay());
    this.nextMarsBirthday = new Date(marsYear, this.marsAge.getMonth(), this.marsAge.getDay());
    this.nextJupiterBirthday = new Date(jupiterYear, this.jupiterAge.getMonth(), this.jupiterAge.getDay());
  }

  calculateLifeExpectancy(age) {
    this.earthLifeExpectancy = age - this.earthAgeYears;
    this.mercuryLifeExpectancy = age - this.mercuryAgeYears;
    this.venusLifeExpectancy = age - this.venusAgeYears;
    this.marsLifeExpectancy = age - this.marsAgeYears;
    this.jupiterLifeExpectancy = age - this.jupiterAgeYears;
  }


}