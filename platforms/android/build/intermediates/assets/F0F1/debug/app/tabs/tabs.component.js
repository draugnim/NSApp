"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var camera = require("nativescript-camera");
var page_1 = require("ui/page");
var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
var myImage;
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
        /*  if(this.title == "Kamera" ) {
            // statement(s) will execute if the boolean expression is true
            // console.log("Jupi ja ja jee!!");
            this.launchCamera();
        }  */
    };
    TabsComponent.prototype.launchCamera = function () {
        camera.takePicture(options).then(function (picture) {
            // let image = new Image();
            // image.src = picture;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBcUM7QUFHckMsNENBQThDO0FBRzlDLGdDQUE2QjtBQUk3QixJQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN2RixJQUFJLE9BQU8sQ0FBQztBQVNaO0lBSUksdUJBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3pCOzs7c0VBRzhEO0lBQ2xFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0k7OztzRUFHOEQ7SUFDbEUsQ0FBQztJQUdNLDZCQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0JBQUksZ0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQzs7O09BTkE7SUFRRDs7OztrRUFJOEQ7SUFDOUQscUNBQWEsR0FBYixVQUFjLElBQVk7UUFDdEIsTUFBTSxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsOENBQXNCLEdBQXRCLFVBQXVCLElBQW1DO1FBQ3RELElBQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQztRQUV2Qzs7OzthQUlLO0lBQ1QsQ0FBQztJQUlELG9DQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE9BQU87WUFDOUMsMkJBQTJCO1lBQzNCLHVCQUF1QjtRQUUxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXRFUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUsyQixXQUFJO09BSnBCLGFBQWEsQ0F1RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFRhYlZpZXcsIFRhYlZpZXdJdGVtIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQge0ltYWdlfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7Vmlld30gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQge0V2ZW50RGF0YX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7QWN0aW9uQmFyfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuXG52YXIgb3B0aW9ucyA9IHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogZmFsc2UsIHNhdmVUb0dhbGxlcnk6IHRydWUgfTtcbnZhciBteUltYWdlO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhYnNDb21wb25lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YWJzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB3aWxsIGJlIG5lZWRlZCBmb3JcbiAgICAgICAgKiB0aGUgd2hvbGUgdGFiIG5hdmlnYXRpb24gbGF5b3V0IGFzIGEgd2hvbGUuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB3aG9sZSB0YWJcbiAgICAgICAgKiBuYXZpZ2F0aW9uIGxheW91dCBhcyBhIHdob2xlLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuXG4gICAgcHVibGljIGlza2xqKHBhZ2Upe1xuICAgICAgICBjb25zb2xlLmxvZyhcIklza2xqIHJhZGkhXCIpO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgXCJnZXRJY29uU291cmNlXCIgZnVuY3Rpb24gcmV0dXJucyB0aGUgY29ycmVjdCB0YWIgaWNvbiBzb3VyY2VcbiAgICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBhcHAgaXMgcmFuIG9uIEFuZHJvaWQgb3IgaU9TLlxuICAgICogWW91IGNhbiBmaW5kIGFsbCByZXNvdXJjZXMgaW4gL0FwcF9SZXNvdXJjZXMvb3NcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZCA/IFwiXCIgOiBcInJlczovL3RhYkljb25zL1wiICsgaWNvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogR2V0IHRoZSBjdXJyZW50IHRhYiB2aWV3IHRpdGxlIGFuZCBzZXQgaXQgYXMgYW4gQWN0aW9uQmFyIHRpdGxlLlxuICAgICogTGVhcm4gbW9yZSBhYm91dCB0aGUgb25TZWxlY3RlZEluZGV4Q2hhbmdlZCBldmVudCBoZXJlOlxuICAgICogaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvY29va2Jvb2svdWkvdGFiLXZpZXcjdXNpbmctc2VsZWN0ZWRpbmRleGNoYW5nZWQtZXZlbnQtZnJvbS14bWxcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgdGFiVmlldyA9IDxUYWJWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRhYlZpZXdJdGVtID0gdGFiVmlldy5pdGVtc1thcmdzLm5ld0luZGV4XTtcblxuICAgICAgICB0aGlzLnRpdGxlID0gc2VsZWN0ZWRUYWJWaWV3SXRlbS50aXRsZTtcblxuICAgICAgICAvKiAgaWYodGhpcy50aXRsZSA9PSBcIkthbWVyYVwiICkgeyAgXG4gICAgICAgICAgICAvLyBzdGF0ZW1lbnQocykgd2lsbCBleGVjdXRlIGlmIHRoZSBib29sZWFuIGV4cHJlc3Npb24gaXMgdHJ1ZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJKdXBpIGphIGphIGplZSEhXCIpOyBcbiAgICAgICAgICAgIHRoaXMubGF1bmNoQ2FtZXJhKCk7XG4gICAgICAgIH0gICovXG4gICAgfVxuXG5cblxuICAgIGxhdW5jaENhbWVyYSgpe1xuICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucykudGhlbihmdW5jdGlvbihwaWN0dXJlKSB7XG4gICAgICAgICAgIC8vIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAvLyBpbWFnZS5zcmMgPSBwaWN0dXJlO1xuICAgICAgICBcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19