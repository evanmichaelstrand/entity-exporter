const abortController = new AbortController();
const abortSignal = abortController.signal;

export const config: Object = {
    entitySelector: "type(HOST)",
    from: "now-365d",
    to: "now",
    fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType",
    abortSignal: abortSignal
  }