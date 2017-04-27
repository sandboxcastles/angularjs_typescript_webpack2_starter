import * as angular from 'angular';

export class NgComponentOptions implements ng.IComponentOptions{
    public template:string;
    public controller: any;
    public bindings: {[boundProperty: string]: string};
    constructor(template:string, controller: ng.IComponentController, bindings: {[boundProperty: string]: string} = null){
        this.template = template;
        this.controller = controller;
        this.bindings = bindings;
    }
}

export class NgComponent {
    name: string;
    cmpt: NgComponentOptions;

    constructor(name: string, cmpt: NgComponentOptions){
        this.name = name;
        this.cmpt = cmpt;
    }
}

export class NgComponentController implements ng.IComponentController{
    static $inject:string[] = ['$http'];
    constructor(){
    }
}

var ngComp = new NgComponentOptions('',{});
var cmpt = new NgComponent('', null);
cmpt.name = '';
cmpt.cmpt = ngComp;