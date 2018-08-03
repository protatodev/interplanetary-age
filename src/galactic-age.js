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


}