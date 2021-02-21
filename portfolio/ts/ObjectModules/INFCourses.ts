/* eslint-disable prettier/prettier */
/**
 * @providesModule INFCourses
 * @flow
 */

export default class Courses {
  name:              string;
  id:                number;

  constructor(course: object) {
    this.id = course.id;
    this.name = course.name;
  }
  
  public getName() : string {
    return this.name;
  }
  
  public getId() : number {
    return this.id;
  }
}