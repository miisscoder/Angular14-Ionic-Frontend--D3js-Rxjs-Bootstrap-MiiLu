import { Injectable } from '@angular/core';
import { ApiBaseService } from '../common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransactions } from '../../models/transactions';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TransactionsApiService extends ApiBaseService {

    constructor(
        private http: HttpClient,
    ) {
        super('/transactions');
    }

    /**
     * get transactions data
     */
    getTransactions(): Observable<ITransactions> {
     // return this.http.get<ITransactions>(this.endpoint('/data'));
      return this.http.get<ITransactions>(environment.apiLocalHost + 'GetTransactions.json');
    }
     

} 
