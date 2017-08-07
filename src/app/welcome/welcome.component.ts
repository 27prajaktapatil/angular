import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MailerService } from './mailer.service';
import { Http, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
// import { IMessage } from './mailer.service';
import { appRoutes } from '../app.routing';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: string = 'testing';
  navLinks = [];
  tabLink = [];
  temp;
  constructor(private mail: MailerService) { }

  ngOnInit() {
    console.log(appRoutes);
    for (let i = 0; i < appRoutes.length; i++) {
      this.temp = {path: appRoutes[i].path};
      this.tabLink.push(this.temp);
    }
    // this.temp = appRoutes[0].path ;
    console.log(this.tabLink);

    

  }
  sendMail() {
    // this.mail.sendEmail(this.message);
  }
}
