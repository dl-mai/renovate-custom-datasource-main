module.exports = {
  "platform": "github",
  "branchConcurrentLimit": "10",
  "prHourlyLimit": 0,

  regexManagers: [
    {
      fileMatch: ['k3s.version'],
      matchStrings: ['(?<currentValue>\\S+)'],
      // used for display and templating purposes, if combined with customDatasources
      depNameTemplate: 'k3s',
      versioningTemplate: 'semver-coerced',
      // if the datasource is prefixed with `custom.`, Renovate will try to find customDatasource with a fitting name
      datasourceTemplate: 'custom.k3s',
    },
  ],
  customDatasources: {
    k3s: {
      defaultRegistryUrlTemplate: 'https://update.k3s.io/v1-release/channels',
      transformTemplates: [
        '{"releases":[{"version": $$.(data[id = \'stable\'].latest),"sourceUrl":"https://github.com/k3s-io/k3s","changelogUrl":$join(["https://github.com/k3s-io/k3s/releases/tag/",data[id = \'stable\'].latest])}],"sourceUrl": "https://github.com/k3s-io/k3s","homepage": "https://k3s.io/"}',
      ],
    },
  },
}

