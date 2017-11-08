"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var camera = require("nativescript-camera");
var page_1 = require("ui/page");
var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
var Observable = require("data/observable").Observable;
var myImage;
var view = require("ui/core/view");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(page) {
        this.page = page;
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }
    TabsComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole tab
        * navigation layout as a whole.
        *************************************************************/
    };
    TabsComponent.prototype.isklj = function (page) {
        console.log("Isklj radi!");
    };
    Object.defineProperty(TabsComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    TabsComponent.prototype.getIconSource = function (icon) {
        return platform_1.isAndroid ? "" : "res://tabIcons/" + icon;
    };
    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    TabsComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title;
        if (this.title == "Kamera") {
            // statement(s) will execute if the boolean expression is true
            // console.log("Jupi ja ja jee!!"); 
            this.launchCamera();
        }
    };
    TabsComponent.prototype.launchCamera = function () {
        var viewModel = new Observable();
        console.log("Jupi ja ja jee!!");
        viewModel.picture = "https://placehold.it/300x300";
        var options = { width: 300,
            height: 300,
            keepAspectRatio: false,
            saveToGallery: true };
        viewModel.takePicture = function () {
            if (!camera.isAvailable()) {
                console.log("Camera is not available on this device");
            }
            else {
                console.log("222222!!");
                camera.takePicture(options)
                    .then(function (imageAsset) {
                    viewModel.set('picture', imageAsset);
                }).catch(function (err) {
                    console.log("Error -> " + err.message);
                });
            }
        };
        viewModel.takePicture();
        return viewModel;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "TabsComponent",
            moduleId: module.id,
            templateUrl: "./tabs.component.html",
            styleUrls: ["./tabs.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBcUM7QUFHckMsNENBQThDO0FBRzlDLGdDQUE2QjtBQUs3QixJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN2RixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDdkQsSUFBSSxPQUFPLENBQUM7QUFDWixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFRbkM7SUFJSSx1QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFDekI7OztzRUFHOEQ7SUFDbEUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSTs7O3NFQUc4RDtJQUNsRSxDQUFDO0lBR00sNkJBQUssR0FBWixVQUFhLElBQUk7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBSSxnQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDOzs7T0FOQTtJQVFEOzs7O2tFQUk4RDtJQUM5RCxxQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixNQUFNLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCw4Q0FBc0IsR0FBdEIsVUFBdUIsSUFBbUM7UUFDdEQsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBRXRDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUyxDQUFDLENBQUMsQ0FBQztZQUMxQiw4REFBOEQ7WUFDOUQsb0NBQW9DO1lBRWpDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUzQixDQUFDO0lBQ0wsQ0FBQztJQUlELG9DQUFZLEdBQVo7UUFJSSxJQUFJLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxTQUFTLENBQUMsT0FBTyxHQUFHLDhCQUE4QixDQUFDO1FBRW5ELElBQUksT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztZQUNYLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUd0QyxTQUFTLENBQUMsV0FBVyxHQUFHO1lBRXBCLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO1lBQ3pELENBQUM7WUFDRCxJQUFJLENBQ0osQ0FBQztnQkFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztxQkFDdEIsSUFBSSxDQUFDLFVBQVUsVUFBVTtvQkFFdEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRXpDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBRUwsQ0FBQyxDQUFBO1FBRUQsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhCLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQXJHUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUsyQixXQUFJO09BSnBCLGFBQWEsQ0F3SHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhIRCxJQXdIQztBQXhIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXcsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7Vmlld30gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQge0V2ZW50RGF0YX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7QWN0aW9uQmFyfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuXG5cbnZhciBvcHRpb25zID0geyB3aWR0aDogMzAwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZSB9O1xudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG52YXIgbXlJbWFnZTtcbnZhciB2aWV3ID0gcmVxdWlyZShcInVpL2NvcmUvdmlld1wiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGFic0NvbXBvbmVudFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWJzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RhYnMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSkge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IGFwcCBzZXJ2aWNlcyB0aGF0IHdpbGwgYmUgbmVlZGVkIGZvclxuICAgICAgICAqIHRoZSB3aG9sZSB0YWIgbmF2aWdhdGlvbiBsYXlvdXQgYXMgYSB3aG9sZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHdob2xlIHRhYlxuICAgICAgICAqIG5hdmlnYXRpb24gbGF5b3V0IGFzIGEgd2hvbGUuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaXNrbGoocGFnZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXNrbGogcmFkaSFcIik7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fdGl0bGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFRoZSBcImdldEljb25Tb3VyY2VcIiBmdW5jdGlvbiByZXR1cm5zIHRoZSBjb3JyZWN0IHRhYiBpY29uIHNvdXJjZVxuICAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGFwcCBpcyByYW4gb24gQW5kcm9pZCBvciBpT1MuXG4gICAgKiBZb3UgY2FuIGZpbmQgYWxsIHJlc291cmNlcyBpbiAvQXBwX1Jlc291cmNlcy9vc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0SWNvblNvdXJjZShpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaXNBbmRyb2lkID8gXCJcIiA6IFwicmVzOi8vdGFiSWNvbnMvXCIgKyBpY29uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBHZXQgdGhlIGN1cnJlbnQgdGFiIHZpZXcgdGl0bGUgYW5kIHNldCBpdCBhcyBhbiBBY3Rpb25CYXIgdGl0bGUuXG4gICAgKiBMZWFybiBtb3JlIGFib3V0IHRoZSBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkIGV2ZW50IGhlcmU6XG4gICAgKiBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb29rYm9vay91aS90YWItdmlldyN1c2luZy1zZWxlY3RlZGluZGV4Y2hhbmdlZC1ldmVudC1mcm9tLXhtbFxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFiVmlld0l0ZW0gPSB0YWJWaWV3Lml0ZW1zW2FyZ3MubmV3SW5kZXhdO1xuXG4gICAgICAgIHRoaXMudGl0bGUgPSBzZWxlY3RlZFRhYlZpZXdJdGVtLnRpdGxlO1xuXG4gICAgICAgICBpZih0aGlzLnRpdGxlID09IFwiS2FtZXJhXCIgKSB7ICBcbiAgICAgICAgICAgIC8vIHN0YXRlbWVudChzKSB3aWxsIGV4ZWN1dGUgaWYgdGhlIGJvb2xlYW4gZXhwcmVzc2lvbiBpcyB0cnVlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkp1cGkgamEgamEgamVlISFcIik7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICB0aGlzLmxhdW5jaENhbWVyYSgpO1xuXG4gICAgICAgIH0gIFxuICAgIH1cblxuXG5cbiAgICBsYXVuY2hDYW1lcmEoKXtcblxuXG5cbiAgICAgICAgdmFyIHZpZXdNb2RlbCA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSnVwaSBqYSBqYSBqZWUhIVwiKTtcbiAgICAgICAgdmlld01vZGVsLnBpY3R1cmUgPSBcImh0dHBzOi8vcGxhY2Vob2xkLml0LzMwMHgzMDBcIjtcbiAgICBcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHdpZHRoOiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0cnVlIH07XG4gICAgXG4gICAgXG4gICAgICAgIHZpZXdNb2RlbC50YWtlUGljdHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgICAgICAgICAgaWYoIWNhbWVyYS5pc0F2YWlsYWJsZSgpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBpcyBub3QgYXZhaWxhYmxlIG9uIHRoaXMgZGV2aWNlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMjIyMjIhIVwiKTtcbiAgICAgICAgICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykgICBcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGltYWdlQXNzZXQpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zZXQoJ3BpY3R1cmUnLCBpbWFnZUFzc2V0KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gICAgIFxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdmlld01vZGVsLnRha2VQaWN0dXJlKCk7XG4gICAgXG4gICAgICAgIHJldHVybiB2aWV3TW9kZWw7XG4gICAgfVxuICAgIFxuLy9leHBvcnRzLmNyZWF0ZVZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbDsgXG5cblxuXG4vKiAgICAgICAgIGNhbWVyYS50YWtlUGljdHVyZShvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHBpY3R1cmUpIHtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGljdHVyZTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgLT4gXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0gKi9cblxuXG4gICAgICAgIFxuXG59XG5cblxuIl19