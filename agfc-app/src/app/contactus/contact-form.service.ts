import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";

@Injectable()
export class SendContactFormService {
private _apiUrl: string = "api.com";
    constructor(private _http: Http) { }
}