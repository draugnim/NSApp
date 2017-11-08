import { Component, OnInit } from "@angular/core";
import * as permissions from "nativescript-permissions";
declare var android: any;



@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    public getCameraPermission() {
        permissions.requestPermission(android.Manifest.permission.CAMERA, "Needed for connectivity status").then(() => {
            console.log("Permission granted!");
        }).catch(() => {
            console.log("Permission is not granted (sadface)");
        });
    }
  }

