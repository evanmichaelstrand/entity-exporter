import React from "react";
import { useEffect, useState } from "react";
import { config } from "../functions/apiConfig"
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

//var data: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

export const useEntitiesAPI = () => {
  const [monitoredEntities, setMonitoredEntities] = useState<Object[]>([])
  useEffect(() => {
      
      monitoredEntitiesClient.getEntities(config)
      .then((response) => {
          if (response.entities) {
              setMonitoredEntities(response.entities)
          }
      })
      /*return () => {
        abortController.abort();
      }*/
    }, [])
    return monitoredEntities
}

/*export const formattedData = () => {
  var tableData: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];
  const apiData = useEntitiesAPI();
  apiData.forEach(entity => {
    if (entity){
      console.log("this is an entity", entity)
    }
  })
}
*/

/*

var tableData: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

export const apiData = async () => {
  const [monitoredEntities, setMonitoredEntities] = useState<Object[]>([])
  const sendData = await monitoredEntitiesClient.getEntities(config)
  .then((response) => {
    response.entities?.forEach(entity => {
      tableData.push({"host": String(entity.displayName), "hostGroupName": String(entity.properties?.hostGroupName), "ipAddress": String(entity.properties?.ipAddress), "monitoringMode": String(entity.properties?.monitoringMode), "osType": String(entity.properties?.osType)});
    })
    
    if (response.entities){
      setMonitoredEntities(response.entities);
    }
    return monitoredEntities;
  })
  .catch((response) => {
    console.log("error:", response)
  })
  
  return monitoredEntities;
}
*/