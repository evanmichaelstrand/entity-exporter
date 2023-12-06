const abortController = new AbortController();
const abortSignal = abortController.signal;

export const hostConfig: Object = {
    entitySelector: "type(HOST)",
    from: "now-365d",
    to: "now",
    fields: "-fromRelationships, +properties.ipAddress, +properties.hostGroupName, +properties.monitoringMode, +properties.osType, +properties.cpuCores, +properties.dnsNames, +properties.macAddresses, +properties.physicalMemory, +properties.memoryTotal, +properties.osServices",
    abortSignal: abortSignal
  }

  export const process_groupConfig: Object = {
    entitySelector: "type(PROCESS_GROUP)",
    from: "now-2h",
    to: "now",
    fields: "+properties.softwareTechnologies, +fromRelationships.runsOn, +properties.listenPorts",
    abortSignal: abortSignal
  }

  export const applicationConfig: Object = {
    entitySelector: "type(APPLICATION)",
    from: "now-365d",
    to: "now",
    fields: "+properties.ruleAppliedPattern, +properties.applicationType",
    abortSignal: abortSignal
  }