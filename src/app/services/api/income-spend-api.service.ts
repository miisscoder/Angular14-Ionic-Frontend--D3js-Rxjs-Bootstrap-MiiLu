import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIncomeSpend } from '../../models/incomeSpend';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class IncomeSpendApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('');
    }

    /**
     * get income
     */
    getIncome(): Observable<IIncomeSpend> {
      //return this.http.get<IIncomeSpend>(this.endpoint('/income/data'));
      return this.http.get<IIncomeSpend>(environment.apiLocalHost + 'GetIncome.json');
    }

    /**
     * get spend
     */
    getSpend(): Observable<IIncomeSpend> {
      //return this.http.get<IIncomeSpend>(this.endpoint('/spend/data'));
      return this.http.get<IIncomeSpend>(environment.apiLocalHost + 'GetSpend.json');
    }
     

} 
