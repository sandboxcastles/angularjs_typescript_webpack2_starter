import * as angular from 'angular';
import * as interfaces from './Interfaces';
const css = require('./app.component.scss');

export function AppComponent(ngModule: ng.IModule = null): void{
    ngModule = ngModule || angular.module('MainApp');
    new AppComp(ngModule, 'appCmpt');
};

export class AppComp implements interfaces.NgComponentInterface{
    name:string;
    component: ng.IComponentOptions;
    constructor(ngModule?: ng.IModule, name: string = 'appCmpt'){
        this.name = name;
        this.component = new AppCmpt();
        this.register(ngModule)
    }
    register(ngModule: ng.IModule = null):void {
        ngModule = ngModule || angular.module('MainApp');
        ngModule.component(this.name, this.component);
    }
}

class AppCmpt implements ng.IComponentOptions{
    public template:string;
    public controller: any;
    constructor(){
        this.template = require('./app.component.html');
        this.controller = AppCtrl;
    }
}

class AppCtrl implements ng.IComponentController{
    static $inject = ['$scope', '$http'];
    constructor(private $scope: ng.IScope, private $http: ng.IHttpService){
        let $ctrl = this;
        let z: ng.IHttpPromise<string> = $http.get('');
    }
    show():any {
        alert('Now Showing!');
    };
    // Not ACTUALLY private. Only helps Typescript check code...
    private getResults(): ng.IPromise<Result> {
        alert('got results... then break...');
        throw new Error('Got an error');
    }
}
class Result {
    result:string;
}