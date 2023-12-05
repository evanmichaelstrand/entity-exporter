const abortController = new AbortController();
const abortSignal = abortController.signal;

export const hostConfig: Object = {
    entitySelector: "type(HOST)",
    from: "now-365d",
    to: "now",
    fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType, +properties.cpuCores, +properties.dnsNames, +properties.macAddresses, +properties.physicalMemory, +properties.memoryTotal",
    abortSignal: abortSignal
  }
