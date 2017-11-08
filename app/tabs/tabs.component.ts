import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { SelectedIndexChangedEventData, TabView, TabViewItem } from "tns-core-modules/ui/tab-view";

import * as camera from "nativescript-camera";
import {Image} from "ui/image";
import {View} from 'ui/core/view';
import {Page} from 'ui/page';
import {EventData} from 'data/observable';
import {ActionBar} from "ui/action-bar";


var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
var Observable = require("data/observable").Observable;
var myImage;
var view = require("ui/core/view");

@Component({
    selector: "TabsComponent",
    moduleId: module.id,
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {

    private _title: string;

    constructor(private page:Page) {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole tab
        * navigation layout as a whole.
        *************************************************************/
    }


    public isklj(page){
        console.log("Isklj radi!");
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
        }
    }

    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    getIconSource(icon: string): string {
        return isAndroid ? "" : "res://tabIcons/" + icon;
    }

    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];

        this.title = selectedTabViewItem.title;

         if(this.title == "Kamera" ) {  
            // statement(s) will execute if the boolean expression is true
            // console.log("Jupi ja ja jee!!"); 
            
               this.launchCamera();

        }  
    }



    launchCamera(){



        var viewModel = new Observable();
        console.log("Jupi ja ja jee!!");
        viewModel.picture = "https://placehold.it/300x300";
    
        var options = { width: 300, 
                        height: 300, 
                        keepAspectRatio: false, 
                        saveToGallery: true };
    
    
        viewModel.takePicture = function() {
    
            if(!camera.isAvailable()){
                console.log("Camera is not available on this device")
            }
            else
            {
                console.log("222222!!");
                camera.takePicture(options)   
                    .then(function (imageAsset) {
    
                        viewModel.set('picture', imageAsset);
    
                    }).catch(function (err) {
                        console.log("Error -> " + err.message);
                });
            }     
    
        }

        viewModel.takePicture();
    
        return viewModel;
    }
    
//exports.createViewModel = createViewModel; 



/*         camera.takePicture(options).then(function(picture) {
            let image = new Image();
            image.src = picture;

            
        }).catch((err) => {
            console.log("Error -> " + err.message);
        });
    } */


        

}


