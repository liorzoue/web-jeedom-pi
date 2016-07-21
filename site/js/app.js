var JeedomControllers = angular.module('JeedomControllers', ['ngResource', 'ngRoute', 'LocalStorageModule']);
var JeedomApp = angular.module('JeedomApp', ['JeedomControllers', 'angular-jsonrpc-client']);

JeedomApp
	.config(function (localStorageServiceProvider, jsonrpcConfigProvider) {
	  	localStorageServiceProvider
	  		.setPrefix('JeedomApp')
	  		.setNotify(true, true);

        jsonrpcConfigProvider.set({
            url: 'http://my.jeedom.org:8080/core/api/jeeApi.php'
        });
});