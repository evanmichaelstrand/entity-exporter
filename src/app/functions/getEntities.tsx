import React from "react";
import { AppHeader, AppName, Page, Flex, Code, Heading, Paragraph, FormField, TextInput } from "@dynatrace/strato-components-preview";
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

var data: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

const config: Object = {
  entitySelector: "type(HOST)",
  from: "now-2h",
  to: "now",
  fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType",
}

export const test = "this is the test";

/* export const apiData = {
  
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

  return data;
}
*/