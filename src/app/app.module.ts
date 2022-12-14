import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { DetailRekeningMenuComponent } from './popovers/detail-rekening-menu/detail-rekening-menu.component';

import { AppRoutingModule } from './app-routing.module';

import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, DetailRekeningMenuComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: '__sippp',
            driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
        })
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent, DetailRekeningMenuComponent]
})
export class AppModule {}
