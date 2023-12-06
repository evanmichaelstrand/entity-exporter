import React from "react";
import { units } from '@dynatrace-sdk/units';
import { TableColumn } from '@dynatrace/strato-components-preview/tables';

export const hostColumns: TableColumn[] = [
    {
      header: 'Host Name',
      accessor: 'displayName',
      ratioWidth: 2,
    },
    {
      header: 'Host Group',
      accessor: 'properties.hostGroupName',
      ratioWidth: 1,
    },
    {
      header: 'Monitoring Mode',
      accessor: 'properties.monitoringMode',
      ratioWidth: 1,
    },
    {
      header: 'IP Address',
      accessor: 'properties.ipAddress',
      ratioWidth: 2,
    },
    {
      header: 'Operating System',
      accessor: 'properties.osType',
      ratioWidth: 1,
    },
    {
      header: 'CPU Cores',
      accessor: 'properties.cpuCores',
      autoWidth: true,
    },
    {
      header: 'Total Memory',
      accessor: 'properties.memoryTotal',
      autoWidth: true,
      formatter: { input: units.data.bit, output: units.data.gigabit }
    }
];

export const process_groupColumns: TableColumn[] = [
    {
      header: 'Process Group',
      accessor: 'displayName',
      ratioWidth: 2,
    },
    {
      header: 'Main Technology',
      accessor: 'properties.softwareTechnologies[0].type',
      ratioWidth: 1,
    },
    {
      header: 'Edition',
      accessor: 'properties.softwareTechnologies[0].edition',
      ratioWidth: 1,
    },
    {
      header: 'Version',
      accessor: 'properties.softwareTechnologies[0].version',
      ratioWidth: 1,
    }
];

export const applicationColumns: TableColumn[] = [
  {
    header: 'Application',
    accessor: 'displayName',
    ratioWidth: 2,
  },
  {
    header: 'Type',
    accessor: 'properties.applicationType',
    ratioWidth: 1,
  },
  {
    header: 'Rule pattern',
    accessor: 'properties.ruleAppliedPattern',
    ratioWidth: 1,
  }
];