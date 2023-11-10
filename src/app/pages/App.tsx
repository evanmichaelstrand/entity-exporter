import React from "react";
import { useEffect, useState } from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import { useEntitiesAPI } from "../functions/getEntities";
//import { useEntitiesAPI } from "../functions/sample";
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";
import { DataTable, TableColumn } from '@dynatrace/strato-components-preview/tables';
import { Response } from "dt-app";

var data: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

//const please = apiData;

//console.log("this is the testfunc data", testfunc);


//https://italonascimento.github.io/applying-a-timeout-to-your-promises/

var theData: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

for (let i=0; i<3; i++){
  theData.push({"host": "test", "hostGroupName": "test group", "ipAddress": "100.100", "monitoringMode": "yes", "osType": "linux/windows"});
}

console.log("this is the mock data", theData);

const config: Object = {
  entitySelector: "type(HOST)",
  from: "now-2h",
  to: "now",
  fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType",
}

/*
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
*/

const cols: TableColumn[] = [
      {
        header: 'Host',
        accessor: 'displayName',
        minWidth: 150,
      },
      {
        header: 'Host Group',
        accessor: 'properties.hostGroupName',
        minWidth: 200,
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
/*const somefunc = function(){
  const [monitoredEntities, RVA, RVARAP] = useEntitiesAPI()
  console.log(monitoredEntities)
}

som*/

export const App = () => {
  const apiData = useEntitiesAPI();
  return (
    <>
    <Flex flexDirection="column" alignItems="center" padding={32}>

        <Heading>Dynatrace Non-Named Biz Event Impact Analysis App</Heading>
        <Paragraph>
        This app is designed to assist a new App developer better understand the basics of the application
        </Paragraph>
        <Paragraph>To run the app please enter an email address below</Paragraph>
        <FormField label="">
          <TextInput placeholder="john.lagona@dtinside.com" />
        </FormField>
        <DataTable columns={cols} data={apiData}/>
      </Flex>
   </>
  );
};
