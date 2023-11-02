import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
//import { getEntities } from "../functions/getEntities";
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";
import { DataTable, TableColumn } from '@dynatrace/strato-components-preview/tables';


//TODO: Add scopes to api, then assign api to get entities call

var count = 1;

//https://italonascimento.github.io/applying-a-timeout-to-your-promises/

/*const entity = {
  name: string;
} */

/*interface apiData{
  data:Object[]
}*/

var apiData: {host: string, traffic: number, memoryTotal: number, timestamp: number}[] = [];

apiData.push({"host": "test", "traffic": 213.4, "memoryTotal": 100, "timestamp": 99})
console.log(apiData)


const config: Object = {
  entitySelector: "type(HOST)",
  from: "now-365d",
  to: "now",
  fields: "-fromRelationships, +properties.ipAddress",
}

monitoredEntitiesClient.getEntities(config)
.then((response) => {
  response.entities?.forEach(entity => {
    console.log(entity.displayName);
  })
})
.catch((response) => {
  console.log("error:", response)
})

const cols: TableColumn[] = [
  {
    header: 'Host Info',
    id: 'hostid',
    columns: [
      {
        header: 'Host',
        accessor: 'host',
        minWidth: 150,
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        minWidth: 200,
      },
    ],
  },
  {
    header: 'Performance Information',
    id: 'performanceInfo',
    columns: [
      {
        header: 'Traffic',
        accessor: 'traffic',
        autoWidth: true,
      },
      {
        header: 'Memory Total',
        accessor: 'memoryTotal',
        autoWidth: true,
      },
    ],
  },
];

const data = [
  {
    host: 'et-demo-2-win4',
    traffic: '213.4',
    memoryTotal: 5830000000,
    timestamp: '2022-09-26T12:45:07Z',
    price: 290,
  },
  {
    host: 'et-demo-2-win3',
    traffic: '374',
    memoryTotal: 3520000000,
    timestamp: '2022-09-27T14:10:02Z',
    price: 324,
  },
  {
    host: 'et-demo-2-win1',
    traffic: '625',
    memoryTotal: 4670000000,
    timestamp: '2022-09-27T13:10:02Z',
    price: 343,
  },
  {
    host: 'et-demo-2-win8',
    traffic: '98.7',
    memoryTotal: 5820000000,
    timestamp: '2022-09-28T11:29:10Z',
    price: 289,
  },
  {
    host: 'dev-demo-5-macOS',
    traffic: '164.6',
    memoryTotal: 3460000000,
    timestamp: '2022-09-28T10:22:56Z',
    price: 193,
  },
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
        <DataTable columns={cols} data={apiData}/>
      </Flex>
   </>
  );
};
