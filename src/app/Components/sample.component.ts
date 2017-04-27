import * as angular from 'angular';
import {ISampleService, GithubUser} from '../Services';
const css = require('./sample.component.scss');
class SampleCmptCtrl implements SampleCmptCtrlInterface {
    githubUsername:string;
    githubUser:GithubUser;
    static $inject = ['SampleService'];
    constructor(private SampleService: ISampleService){
        var $ctrl = this;
        $ctrl.$onInit = () : void =>{
            $ctrl.githubUsername = "sandboxcastles";
        };
        $ctrl.loadGithubUser = function(username:string):void{
            SampleService.getUser(username)
            .then(function(response){
                $ctrl.githubUser = response;
            })
            .catch(function(){
                console.log('THAT did NOT work...');
            });
        };
        $ctrl.loadGithubUser('sandboxcastles');
    }
    $onInit():void{};
    alertMe(){
        alert('got the sample controller');
    };
    loadGithubUser(username:string):void{
        this.SampleService.getUser(username)
            .then(function(response){
                this.githubUser = response;
            })
            .catch(function(err){
                console.log(err);
            });
    };
    loadNewGithubUser():void{
        this.loadGithubUser(this.githubUsername);
    };
}
class SampleCmpt implements ng.IComponentOptions {
    public bindings:any;
    public template : string;
    public controller: any;
    constructor(){
        this.bindings = {};
        this.template = require('./sample.component.html')
        this.controller = SampleCmptCtrl;
    }
}

interface SampleCmptCtrlInterface extends ng.IComponentController{
    githubUsername:string;
    githubUser:GithubUser;
    loadGithubUser(username:string):void;
}

export function SampleComponent(ngModule: ng.IModule = null): void{
    ngModule = ngModule || angular.module('MainApp');
    ngModule.component('sampleCmpt', new SampleCmpt());
}