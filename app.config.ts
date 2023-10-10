import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://guu84124.apps.dynatrace.com/',
  app: {
    name: 'entityExporter',
    version: '0.0.0',
    description: 'An empty project',
    id: 'my.entity.exporter',
    scopes: [{ name: 'storage:logs:read', comment: 'default template' }, { name: 'storage:buckets:read', comment: 'default template' }]
  },
};

module.exports = config;