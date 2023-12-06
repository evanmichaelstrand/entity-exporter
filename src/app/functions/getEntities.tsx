import React from "react";
import { useEffect, useState } from "react";
//import { hostConfig } from "../functions/apiConfig"
import { monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

//var data: {host: string, hostGroupName: string, ipAddress: string, monitoringMode: string, osType: string}[] = [];

export const useEntitiesAPI = (config) => {
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