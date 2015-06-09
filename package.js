Package.describe({
  name: 'purplecones:angular-nvd3',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'An AngularJS directive for NVD3 re-usable charting library (based on D3). Easily customize your charts via JSON API.calculations. ',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/purplecones/meteor-angular-nvd3.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('nv.d3.js', 'client');
  api.addFiles('nv.d3.css', 'client')
  api.addFiles('angular-nvd3.js', 'client')
  //api.export('Finance');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('purplecones:angular-nvd3');
  api.addFiles('angular-nvd3-tests.js');
});
