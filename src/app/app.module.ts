import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import ProductView from '../pages/product/view/product-view';
import { ProductList } from '../pages/product/list/product-list';
import { ProductEdit } from '../pages/product/edit/product-edit';

@NgModule({
  declarations: [
    MyApp,
    ProductView,
    ProductList,
    ProductEdit
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductView,
    ProductList,
    ProductEdit
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
