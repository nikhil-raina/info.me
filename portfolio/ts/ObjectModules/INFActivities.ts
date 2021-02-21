/* eslint-disable prettier/prettier */
/**
 * @providesModule INFActivities
 * @flow
 */

export default class Activity {
  name:              string;
  id:                number;
  role:              string;

  constructor(activity: Activity) {
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
    return this.role;
  }
}