import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import { test } from "../functions/getEntities";
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";
import { DataTable, TableColumn } from '@dynatrace/strato-components-preview/tables';


//TODO: Add scopes to api, then assign api to get entities call

var count = 1;

//https://italonascimento.github.io/applying-a-timeout-to-your-promises/

var apiData: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

apiData.push({"host": "test", "hostGroupName": "test group", "ipAddress": "100.100", "monitoringMode": "yes", "osType": "linux/windows"})


const config: Object = {
  entitySelector: "type(HOST)",
  from: "now-2h",
  to: "now",
  fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType",
}

monitoredEntitiesClient.getEntities(config)
.then((response) => {
  response.entities?.forEach(entity => {
    console.log(entity.properties?.hostGroupName);
    apiData.push({"host": String(entity.displayName), "hostGroupName": String(entity.properties?.hostGroupName), "ipAddress": String(entity.properties?.ipAddress), "monitoringMode": String(entity.properties?.monitoringMode), "osType": String(entity.properties?.osType)});
  })
})
.catch((response) => {
  console.log("error:", response)
})

console.log(apiData)

const cols: TableColumn[] = [
      {
        header: 'Host',
        accessor: 'host',
        minWidth: 150,
      },
      {
        header: 'Host Group',
        accessor: 'hostGroupName',
        minWidth: 200,
      },
      {
        header: 'IP Address',
        accessor: 'ipAddress',
        autoWidth: true,
      },
      {
        header: 'Monitoring Mode',
        accessor: 'monitoringMode',
        autoWidth: true,
      },
      {
        header: 'Operating System',
        accessor: 'osType',
        autoWidth: true,
      }
];

export const App = () => {
  return (
    <>
    <Flex flexDirection="column" alignItems="center" padding={32}>

        <Heading>Dynatrace Non-Named Biz Event Impact Analysis App</Heading>
        <Paragraph>
        This app is designed to assist a new App developer better understand the basics of the application {count}
        </Paragraph>
        <Paragraph>To run the app please enter an email address below</Paragraph>
        <FormField label="">
          <TextInput placeholder="john.lagona@dtinside.com" />
        </FormField>
        <Paragraph>{test}</Paragraph>
        <DataTable columns={cols} data={apiData}/>
      </Flex>
   </>
  );
};
