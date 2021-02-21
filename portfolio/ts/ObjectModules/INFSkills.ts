/* eslint-disable prettier/prettier */
/**
 * @providesModule INFSkills
 * @flow
 */

export default class Skill {
  name:              string;
  id:                number;
  rating:            number;

  constructor(skill: Skill) {
    this.id = skill.id;
    this.name = skill.name;
    this.rating = skill.rating;
  }
  
  public getName() : string {
    return this.name;
  }
  
  public getId() : number {
    return this.id;
  }

  public getRating() : number {
    return this.rating;
  }
}