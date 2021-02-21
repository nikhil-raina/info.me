/* eslint-disable prettier/prettier */
/**
 * @providesModule INFActivities
 * @flow
 */

export default class Courses {
  name:              string;
  id:                number;
  role:              string;

  constructor(activity: object) {
    this.id = activity.id;
    this.name = activity.name;
    this.role = activity.role
  }
  
  public getName() : string {
    return this.name;
  }
  
  public getId() : number {
    return this.id;
  }

  public getRole() : string {
    return this.getRole;
  }
}