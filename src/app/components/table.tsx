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