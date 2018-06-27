require.config({
  paths: {
    'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min',
    'normalization': 'normalization'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'normalization': ['angular']
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});

require(['normalization'], function (normalization) {
  normalization.bootstrap();
});