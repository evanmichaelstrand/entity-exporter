import React from "react";
import { TableColumn } from '@dynatrace/strato-components-preview/tables';

export const hostColumns: TableColumn[] = [
    {
      header: 'Host Name',
      accessor: 'displayName',
      autoWidth: true,
    },
    {
      header: 'Host Group',
      accessor: 'properties.hostGroupName',
      autoWidth: true,
    },
    {
      header: 'IP Address',
      accessor: 'properties.ipAddress',
      autoWidth: true,
    },
    {
      header: 'Monitoring Mode',
      accessor: 'properties.monitoringMode',
      autoWidth: true,
    },
    {
      header: 'Operating System',
      accessor: 'properties.osType',
      autoWidth: true,
    }
];