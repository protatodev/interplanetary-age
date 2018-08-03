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
  }


}