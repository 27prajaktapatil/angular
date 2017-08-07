import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MailerService } from './welcome/mailer.service';

// npm packages
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule, MdToolbarModule, MdSidenavModule } from '@angular/material';
import { Routes, RouterModule, /* PreloadAllModules */ } from '@angular/router';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    WelcomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdToolbarModule,
    MdSidenavModule,
    MaterialModule,
    AppRouting
  ],
  exports: [MaterialModule],
  providers: [MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
