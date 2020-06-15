/* eslint-disable prettier/prettier */
/**
 * @providesModule WorkHistoryScreenController
 * @flow
 */

import React from 'react';
import WorkHistoryScreen from './WorkHistoryScreen/WorkHistoryScreen';
import WorkHistory from '../../ObjectModules/INFWorkHistory';

class WorkHistoryController {

  jobs: Array<WorkHistory>;
  // TODO get all the data from the API call for the work history and
  // pass it in the work history component screen for it to be printed.
  constructor() {
    this.jobs = [];
  }

  getJobs() {

  }

  showJobs(): Array<WorkHistory> {
    return [];
  }

}

export default new WorkHistoryController();
