/* eslint-disable prettier/prettier */
/**
 * @providesModule INFProjects
 * @flow
 */

export default class Project {
  name:              string;
  id:                number;
  description:       string;

  constructor(skill: Project) {
    this.id = skill.id;
    this.name = skill.name;
    this.description = skill.description;
  }
  
  public getName() : string {
    return this.name;
  }
  
  public getId() : number {
    return this.id;
  }

  public getDescription() : string {
    return this.description;
  }
}