import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //为应用程序提供 bootstrap 方法，以便在客户端编译模板
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
    enableProdMode();  //启用工程模式
}
platformBrowserDynamic().bootstrapModule(AppModule);
