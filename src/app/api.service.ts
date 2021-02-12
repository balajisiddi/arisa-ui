import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private FIREBASE_SERVER_URL= "https://ng-rest-products-default-rtdb.firebaseio.com/products.json";
  private SERVER_URL="http://localhost:3000";
  public first: string = "";  
public prev: string = "";  
public next: string = "";  
public last: string = "";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse){
    let errorMessage='Unknown Error';
    if(error.error instanceof ErrorEvent){
      errorMessage= `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;  
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

  public get(){
    return this.httpClient.get(this.SERVER_URL+'/products');
  }
  public saveProducts(){
    this.httpClient.post(this.FIREBASE_SERVER_URL, {title: 'Ipad', content: 'electrical devise'})
    .subscribe(responseData =>{
      console.log(responseData);
    });
  }
  public getProducts(){
    this.httpClient.get(this.FIREBASE_SERVER_URL)
    .subscribe(prods=>{
      console.log(prods);
    })
  }

}
