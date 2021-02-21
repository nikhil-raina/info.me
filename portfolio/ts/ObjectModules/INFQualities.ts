/* eslint-disable prettier/prettier */
/**
 * @providesModule INFQualities
 * @flow
 */

import Project from './INFProjects';
import Course from './INFCourses';
import Activity from './INFActivities'
import Skill from './INFSkills';
import WorkHistory from './INFWorkHistory';


export default class Qualities {

  /* TODO: This needs to change to just five static entities. Quality will be clicked and then the 
    GET request should go through for that specific data entity.
  */
  skills: Array<Skill>;
  projects: Array<Project>;
  courses: Array<Course>;
  activities: Array<Activity>;
  workHistory: Array<WorkHistory>

  constructor() {
    this.activities = [];
    this.courses = [];
    this.projects = [];
    this.skills = [];
    this.workHistory = [];
  }

}