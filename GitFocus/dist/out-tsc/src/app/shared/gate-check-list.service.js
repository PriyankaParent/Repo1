import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
let GateCheckListService = class GateCheckListService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:3000/gates';
    }
    createGateCheckList(gateCheck) {
        return this.http.post(this.baseURL, gateCheck);
    }
    getGateCheckList() {
        return this.http.get(this.baseURL);
    }
    updateGateCheckList(gateCheck) {
        return this.http.put(this.baseURL + `/${gateCheck._id}`, gateCheck);
    }
    deleteGateCheckList(_id) {
        return this.http.delete(this.baseURL + `/${_id}`);
    }
};
GateCheckListService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GateCheckListService);
export { GateCheckListService };
//# sourceMappingURL=gate-check-list.service.js.map