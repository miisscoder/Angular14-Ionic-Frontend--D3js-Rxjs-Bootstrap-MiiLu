import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBudget } from '../../models/budget';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BudgetApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/budget');
    }

    /**
     * get tickets 
     */
    getBudget(): Observable<IBudget> {
      //return this.http.get<IBudget>(this.endpoint('/data'));
      return this.http.get<IBudget>(environment.apiLocalHost + 'GetBudget.json');
    }
     

} 
