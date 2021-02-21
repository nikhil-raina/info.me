/* eslint-disable prettier/prettier */
/**
 * @providesModule INFCourses
 * @flow
 */

export default class Course {
  name:              string;
  id:                number;

  constructor(course: Course) {
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