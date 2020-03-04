import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpAngularProvider } from './http-angular.provider';
import { HttpNativeProvider } from './http-native.provider';

@Injectable()
export class HttpProvider {
    public http: HttpNativeProvider | HttpAngularProvider;

    constructor(private platform: Platform, private angularHttp: HttpAngularProvider, private nativeHttp: HttpNativeProvider) {
        console.log('is iOS:', this.platform.is('ios'));
        console.log('is android:', this.platform.is('android'));
        console.log('is web:', (!this.platform.is('android') && !this.platform.is('ios')));
        this.http = this.platform.is('ios') || this.platform.is('android') ? this.nativeHttp : this.angularHttp;
    }
}