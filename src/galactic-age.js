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
    let mercAge, venAge, venDate, marAge, marDate, jupAge, jupDate;

    this.earthAgeYears = Math.abs(diffDate.getUTCFullYear() - 1970);

    // Mercury Age
    mercAge = diffAge * .24;
    this.mercuryAge = new Date(mercAge);
    this.mercuryAgeYears = Math.abs(this.mercuryAge.getUTCFullYear() - 1970);

    // Venus Age

    // Mars Age

    // Jupiter Age

  }


}