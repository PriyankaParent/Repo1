import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UnmergepullComponent = class UnmergepullComponent {
    constructor(api, http) {
        this.api = api;
        this.http = http;
        this.time = 'lastweek';
        this.isFlag = false;
        this.isStatusFlag = false;
    }
    ngOnInit() {
        this.getUnmergedPullReq();
        // this.api.setTimeframe(this.api.time);
    }
    getUnmergedPullReq() {
        this.http.get('http://localhost:8080/gitprime/getallusers/' + this.time + '/unmerge').subscribe((unmerged) => {
            this.type = 'Unmerged Pull Request';
            this.isFlag = false;
            this.isStatusFlag = true;
            this.response = unmerged;
            console.log(this.response);
        });
    }
    setTimeframe(selectedTime) {
        this.time = selectedTime;
    }
};
UnmergepullComponent = tslib_1.__decorate([
    Component({
        selector: 'app-unmergepull',
        templateUrl: './unmergepull.component.html',
        styleUrls: ['./unmergepull.component.css']
    })
], UnmergepullComponent);
export { UnmergepullComponent };
//# sourceMappingURL=unmergepull.component.js.map