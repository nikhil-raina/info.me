/* eslint-disable prettier/prettier */
/**
 * @providesModule INFWorkHistory
 * @flow
 */

import Experience from './INFExperience';

export default class WorkHistory {
  private work_id:    number;
  private experience: Array<Experience>;

  constructor(data: object) {
    this.work_id = data.work_id;
    this.experience = data.experience;
  }

  public get workHistoryID() : number {
    return this.work_id;
  }

  public get workExp() : Array<Experience> {
    return this.experience;
  }

}
