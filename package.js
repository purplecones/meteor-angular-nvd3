Package.describe({
  name: 'purplecones:angular-nvd3',
  version: '0.0.3',
  summary: 'An AngularJS directive for NVD3 re-usable charting library (based on D3).',
  git: 'https://github.com/purplecones/meteor-angular-nvd3.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('nv.d3.js', 'client');
  api.addFiles('nv.d3.css', 'client');
  api.addFiles('angular-nvd3.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('purplecones:angular-nvd3');
  api.addFiles('angular-nvd3-tests.js');
  api.use('d3', 'client');
});
