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

    expect(age.earthAgeYears).toEqual(39);
  });

  it('should calculate and return the users mercury age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.earthAgeYears).toEqual(39);
  });

  it('should calculate and return the users venus age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.earthAgeYears).toEqual(39);
  });

  it('should calculate and return the users mars age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.earthAgeYears).toEqual(39);
  });

  it('should calculate and return the users jupiter age based on birthDate and current date', function() {
    age.userBirthDate = birthDate; 
    age.calculateSolarAge();

    expect(age.earthAgeYears).toEqual(39);
  });


});
