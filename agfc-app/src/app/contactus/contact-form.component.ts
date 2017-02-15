import {Component, OnInit} from "@angular/core";
import { ContactForm } from "./conactus";
import {} from "./contactus/contact-form.service";

@Component({
    moduleId: module.id,
    templateUrl: "contact-form.component.html",
    styleUrls : ["contact-form.component.css"]

})
export class ContactFormComponent implements OnInit {

constructor(private _contactService: SendContactFormService){

}

}