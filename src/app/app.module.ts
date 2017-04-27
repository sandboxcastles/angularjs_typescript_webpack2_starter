import * as angular from 'angular';
import {AppComponent} from './app.component';
import {SampleComponent} from './Components';
import {SampleService} from './Services';

let ngModule: ng.IModule = angular.module('MainApp', []);
// AppComponent(ngModule);
// MainComponent(ngModule);
register([
    AppComponent,
    SampleComponent,
    SampleService
]);

function register(registrations: {(ngModule:ng.IModule): void;}[]): void {    
    registrations.forEach(registration => {
        registration(ngModule);
    });
};