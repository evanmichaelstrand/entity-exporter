import { accessTokensApiTokensClient, monitoredEntitiesClient } from "@dynatrace-sdk/client-classic-environment-v2";

(async () => {
    try {
  
        const config: Object = {
          entitySelector: "type(HOST)",
          from: "now-365d",
          to: "now",
        }
  
        const text = await monitoredEntitiesClient.getEntities(config);
        //you can only use "await" within "async"
        console.log(text);
    } catch (e) {
        // Deal with the fact the chain failed
    }
  })();