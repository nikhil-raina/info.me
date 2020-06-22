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

  jobs: Array<Experience>;
  workHistoryData: Array<WorkHistory>;

  // TODO get all the data from the API call for the work history and
  // pass it in the work history component screen for it to be printed.
  constructor() {
    this.jobs = [];
    this.workHistoryData = [];
  }

  getJobs(workId: number) {

  }

  showJobs(): Array<WorkHistory> {
    return [];
  }

}

export default new WorkHistoryController();
