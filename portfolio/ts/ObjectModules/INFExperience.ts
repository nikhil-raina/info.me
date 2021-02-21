/* eslint-disable prettier/prettier */
/**
 * @providesModule INFExperience
 * @flow
 */

type EmploymentStatus =
  | 'FULL_TIME'
  | 'PART_TIME'
  | 'SELF_EMP'
  | 'FREELANCE'
  | 'CONTRACT'
  | 'INTERN'
  | 'APPRENTICESHIP';

type Location = {
  state: string;
  country: string;
};

export default class Experience {
  id!:               number;
  job_title!:        string;
  employment_type!:  EmploymentStatus;
  company!:          string;
  location!:         Location;
  start_date!:       string;
  end_date!:         string;
  job_headLine!:     string;
  job_description!:  string;
  isWorking!:        boolean;

	constructor(exp: object) {
    this.id = exp.id;
    this.job_title = exp.job_title;
    this.employment_type = exp.employment_type;
    this.company = exp.company;
    this.location = exp.location;
    this.start_date = exp.start_date;
    this.isWorking = exp.isWorking;
  }
}
