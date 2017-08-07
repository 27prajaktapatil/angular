import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


export class IMessage {
    name: string;
    telephone: string;
    message: string;
}


@Injectable()
export class MailerService {
    message: string = 'testing';
    private emailUrl = '../assets/contact.php';

    constructor(private http: Http) {
    }

    sendEmail(message: string): Observable<string> | any {
        JSON.stringify(message);   // also tried without it
        return this.http.post(this.emailUrl, message)
            .map(response => {
                console.log('Sending email was successfull', response);
                return response;
            })
            .catch(error => {
                console.log('Sending email got error', error);
                return Observable.throw(error);
            })
    }

}