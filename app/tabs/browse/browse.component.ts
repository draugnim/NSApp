import { Component, OnInit } from "@angular/core";
import { Border } from "tns-core-modules/ui/border";
import * as camera from "nativescript-camera";
var imageModule = require("ui/image");

import * as permissions from "nativescript-permissions";
var view = require("ui/core/view");
var myImage;
declare var android: any;

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
        permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
            console.log("Permission granted!");
        }).catch(() => {
            console.log("Permission is not granted (sadface)");
        });
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }
}

/* export function launchCamera(){
    
            console.log("Jupi ja ja jee!!");
        } */