import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {GateCheckList} from './gate-check-list.model';

@Injectable({
  providedIn: 'root'
})
export class GateCheckListService {

  selectedGateCheckList: GateCheckList;
  gateCheckLists: GateCheckList[];
  readonly baseURL = 'http://localhost:3000/gates';

  constructor(private http: HttpClient) { }

  createGateCheckList(gateCheck: GateCheckList) {
    return this.http.post(this.baseURL, gateCheck);
  }

  getGateCheckList() {
    return this.http.get(this.baseURL);
  }

  updateGateCheckList(gateCheck: GateCheckList) {
    return this.http.put(this.baseURL + `/${gateCheck._id}`, gateCheck);
  }

  deleteGateCheckList(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
