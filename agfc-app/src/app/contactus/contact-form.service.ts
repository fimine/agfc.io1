import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ContactForm }  from "contactus";

@Injectable()
export class SendContactFormService {
private _apiUrl: string = "api.com";
    constructor(private _http: Http) { }

postContactForm(contactForm : ContactForm) : Observable<number>{
    
}


}

