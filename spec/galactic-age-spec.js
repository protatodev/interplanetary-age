import { GalacticAge } from './../src/galactic-age.js';

describe('GalacticAge', function(){
  let age;
  let birthDate;
  let currentDate;

  beforeEach(function(){
    age = new GalacticAge();
    birthDate = new Date(1979, 4, 23);
    currentDate = new Date();
  });

  it('should create a date object from the inputted age', function() {
    age.userBirthDate = birthDate; 
    expect(age.userBirthDate).not.toEqual(null);
    expect(age.userBirthDate.getFullYear()).toEqual(1979);
  });

  it('should calculate and return the users earth age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    console.log(age.marsAge);
    console.log(age.mercuryAge);

    expect(age.earthAgeYears).toEqual(39);
  });

  it('should calculate and return the users mercury age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.mercuryAgeYears).toEqual(163);
  });

  it('should calculate and return the users venus age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.venusAgeYears).toEqual(63);
  });

  it('should calculate and return the users mars age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.marsAgeYears).toEqual(20);
  });

  it('should calculate and return the users jupiter age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.jupiterAgeYears).toEqual(3);
  });

  it('should calculate and return the correct future birthdate for earth', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    age.calculateNextBirthdays();

    expect(age.nextEarthBirthday.getFullYear()).toEqual(2019);
  });

  it('should calculate and return the correct future birthdate for mercury', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    age.calculateNextBirthdays();

    expect(age.nextMercuryBirthday.getFullYear()).toEqual(2019);
  });

  it('should calculate and return the correct future birthdate for venus', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    age.calculateNextBirthdays();

    expect(age.nextVenusBirthday.getFullYear()).toEqual(2019);
  });

  it('should calculate and return the correct future birthdate for mars', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    age.calculateNextBirthdays();

    expect(age.nextMarsBirthday.getFullYear()).toEqual(2019);
  });

  it('should calculate and return the correct future birthdate for jupiter', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    age.calculateNextBirthdays();

    expect(age.nextJupiterBirthday.getFullYear()).toEqual(2026);
  });

  it('should calculate and return remaining years based on life expectancy entered by user', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();
    age.calculateLifeExpectancy(75);

    expect(age.earthLifeExpectancy).toEqual(36);
    expect(age.mercuryLifeExpectancy).toEqual(-88);
    expect(age.venusLifeExpectancy).toEqual(12);
    expect(age.marsLifeExpectancy).toEqual(55);
    expect(age.jupiterLifeExpectancy).toEqual(72);
  });


});
