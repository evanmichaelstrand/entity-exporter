import { useEffect, useState } from "react";
import { monitoredEntitiesClient } from '@dynatrace-sdk/client-classic-environment-v2';

const calculateAppSecUnits = (memory) => {
    let RVA_estimate = 0
    let RVA_RAP_estimate = 0
        if (memory < 4){
            RVA_estimate = RVA_estimate + 0.10
        }
        else if (memory >= 4 && memory < 8){
            RVA_estimate = RVA_estimate + 0.25
        }
        else if (memory >= 8 && memory < 16){
            RVA_estimate = RVA_estimate + 0.50
        }
        else {
            RVA_estimate = RVA_estimate + Math.floor(memory / 16)
        }
        RVA_RAP_estimate = RVA_estimate * 2
    return [RVA_estimate, RVA_RAP_estimate]
  }

export const useEntitiesAPI = () => {
    const [monitoredEntities, setMonitoredEntities] = useState<Object[]>([])
    useEffect(() => {
        const abortController = new AbortController();
        const abortSignal = abortController.signal;

        const config: Object = {
            entitySelector: "type(HOST)",
            from: "now-2h",
            to: "now",
            fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType",
            abortSignal: abortSignal
          }

        monitoredEntitiesClient.getEntities(config)
        .then((response) => {
            if (response.entities) {
                setMonitoredEntities(response.entities)
            }
        })
        return () => {
          abortController.abort();
        }
      }, [])
      return monitoredEntities
}