import * as angular from 'angular';
'use strict';

export interface ISampleService {
    getUser(username:string): ng.IPromise<GithubUser>;
}
class SampleServiceClass implements ISampleService {
    static $inject = ['$http'];

    constructor(private $http: ng.IHttpService){};

    getUser(username:string):ng.IPromise<GithubUser>{
        return this.$http.get('https://api.github.com/users/' + username)
            .then((response: ng.IHttpPromiseCallbackArg<GithubUser>): any => {
                return <GithubUser>response.data;
            })
            .catch(function(err){
                console.log('There was an error');
            });
    };
}
export function SampleService(ngModule: ng.IModule = null):void{
    ngModule = ngModule || angular.module('MainApp');
    ngModule.service('SampleService', SampleServiceClass);
};
export class GithubUser implements GithubUserInterface{
    public name:string;
    public login:string;
    public avatar_url:string;

}
export interface GithubUserInterface{
    name: string;
    login:string;
    avatar_url:string;
}