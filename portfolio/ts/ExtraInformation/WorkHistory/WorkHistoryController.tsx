/* eslint-disable prettier/prettier */
/**
 * @providesModule WorkHistoryScreenController
 * @flow
 */

import React from 'react';
import Experience from '../../ObjectModules/INFExperience';
import WorkHistory from '../../ObjectModules/INFWorkHistory';
import WorkHistoryScreen from './WorkHistoryScreen/WorkHistoryScreen';
import * as data from '../../DataFiles/workHistoryData.json';


class WorkHistoryController {

  experience: Array<Experience>;
  workHistoryData: Array<WorkHistory>;

  // TODO get all the data from the API call for the work history and
  // pass it in the work history component screen for it to be printed.
  constructor() {
    this.experience = [];
    this.workHistoryData = data;
  }

  getExperience(workId: number): Array<Experience> | null {
    for (var i = 0; i < this.workHistoryData.length; i++) {
      if (this.workHistoryData[i].workHistoryID === workId) {
        return this.workHistoryData[i].workExp;
      }
    }
    return null;
  }

  showWorkHistory(): Array<WorkHistory> {
    return this.workHistoryData;
  }

}

export default new WorkHistoryController();
