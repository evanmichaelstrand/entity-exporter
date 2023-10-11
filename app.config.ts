import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://ire34927.sprint.apps.dynatracelabs.com/',
  app: {
    name: 'entityExporter',
    version: '0.0.0',
    description: 'An empty project',
    id: 'my.entity.exporter',
    scopes: [{ name: 'storage:logs:read', comment: 'default template' }, { name: 'storage:buckets:read', comment: 'default template' }, { name: 'environment-api:entities:read', comment: 'default template'}]
  },
};

module.exports = config;