import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private htttClient: HttpClient) {}
  getAllProducts(): Observable<Iproduct[]> {
    return this.htttClient.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.htttClient.get<Iproduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
  getProductsByCatId(catId: number): Observable<Iproduct[]> {
    return this.htttClient.get<Iproduct[]>(
      `${environment.baseUrl}/products?catId=${catId}`
    );
  }
  //   addNewProducts(prd:Iproduct):Observable<Iproduct>{
  //     return   this.htttClient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(prd) ,{
  //       headers:{
  //         'content-type':'application/json'
  //       }
  //     }).pipe(
  //       retry(2),
  //       catchError((err:HttpErrorResponse)=>{
  //         return throwError(()=>{
  //           return new Error('Error in adding new product')
  //         })
  //       })
  //     )

  // }

  //

  addNewProducts(prd: Iproduct): Observable<Iproduct> {
    // Returns an Observable of type Iproduct
    return this.htttClient
      .post<Iproduct>(
        // Makes an HTTP POST request to the API endpoint
        `${environment.baseUrl}/products`,
        // Uses the base URL from environment config + '/products' endpoint

        JSON.stringify(prd),
        // Converts the product object to a JSON string

        {
          headers: {
            'content-type': 'application/json',
            // Sets the Content-Type header to indicate JSON data
          },
        }
      )
      .pipe(
        // Begins a chain of RxJS operators

        retry(2),
        // If the request fails, it will automatically retry up to 2 times

        catchError((err: HttpErrorResponse) => {
          // Handles any HTTP errors that occur
          return throwError(() => {
            // Creates a new Observable that emits an error
            return new Error('Error in adding new product');
            // Returns a custom error message
          });
        })
      );
  }


  
}
