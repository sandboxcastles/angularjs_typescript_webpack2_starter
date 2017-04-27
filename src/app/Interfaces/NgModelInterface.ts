import * as angular from 'angular';
export interface NgModelInterface{
    name:string;
    register(ngModule?: ng.IModule):void;
}