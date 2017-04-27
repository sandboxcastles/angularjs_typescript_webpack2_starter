import * as angular from 'angular';
import {NgModelInterface} from './NgModelInterface';

export interface NgComponentInterface extends NgModelInterface{
    component: ng.IComponentOptions;
}