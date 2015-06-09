# Angular-nvD3

[![Build Status](https://travis-ci.org/krispo/angular-nvd3.svg?branch=master)](https://travis-ci.org/krispo/angular-nvd3)

This thing is designed to make it easier to work with [nvd3.js](https://github.com/novus/nvd3) re-usable charting library. This directive allows you to easily customize your charts via JSON API.

The key feature is that the original hierarchical structure of nvd3 models is completely preserved in directive JSON structure. This means that while you creating a complex chart that containing multiple elementary chart models (such as `line`, `bar`, `axis`, ...), you can in turn customize the properties of each internal elementary models as well as the global charting properties the way you want. This can be done as usual, but it becomes quite easily to customize while applying JSON approach to.

Try it [online](http://krispo.github.io/angular-nvd3/).

## How to use

### Basic usage

Inject `nvd3` directive into angular module, set up some chart options and push some data to the controller:
```javascript
angular.module('myApp', ['nvd3'])
       .controller('myCtrl', function('$scope'){
           $scope.options = { /* JSON data */ };
           $scope.data = { /* JSON data */ }
        })
```

and in html again you can use it like:
```html
<div ng-app='myApp'>
    <div ng-controller='myCtrl'>
        <nvd3 options='options' data='data'></nvd3>
    </div>
</div>
```

The chart would be displayed on the page.

### Example

Let's create a simple **Discrete Bar Chart**.

Configure options:
```javascript
$scope.options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
        }
    }
};
```

Push some data:
```javascript
$scope.data = [{
    key: "Cumulative Return",
    values: [
        { "label" : "A" , "value" : -29.765957771107 },
        { "label" : "B" , "value" : 0 },
        { "label" : "C" , "value" : 32.807804682612 },
        { "label" : "D" , "value" : 196.45946739256 },
        { "label" : "E" , "value" : 0.19434030906893 },
        { "label" : "F" , "value" : -98.079782601442 },
        { "label" : "G" , "value" : -13.925743130903 },
        { "label" : "H" , "value" : -5.1387322875705 }
    ]
}];
```

See the [result](http://krispo.github.io/angular-nvd3/#/discreteBarChart).

Read more [docs](http://krispo.github.io/angular-nvd3/#/quickstart).

### Contribute

Test it using command:

    $npm test

Then build using [grunt](http://gruntjs.com/) (*node.js must be installed*):

    $grunt

## Release Notes

### [1.0.0-beta (current, nvd3 v1.7.1)](https://github.com/krispo/angular-nvd3/releases/tag/v1.0.0-beta)
Under developing in **master** (1.x) branch

### [0.1.1 (stable, nvd3 v1.1.15-beta)](https://github.com/krispo/angular-nvd3/releases/tag/v0.1.1)
Under developing in **0.x** branch

### 0.1.0
* added update method to global api, [pull request](https://github.com/krispo/angular-nvd3/pull/27)
* fixed bug for `multiChart`
* added getScope method to global api. (give an access to internal directive scope, for example, we can get chart object like: `$scope.api.getScope().chart`)
* fixed multiple chart rendering under initializing (fixed multiple callback calls)

### 0.0.9
...

## License
Licensed under the terms of the [MIT License](https://github.com/krispo/angular-nvd3/blob/master/LICENSE)
