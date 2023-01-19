import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendarService {

  private readonly API = 'api/agendar';


  constructor(private httpClient: HttpClient) { 
    

    this.httpClient.post('./api/upload', File).
    subscribe(response => {
      console.log(response);
    });
  } 

  private create(record: Partial<AgendarService>){
    return this.httpClient.post<AgendarService>(this.API, record).pipe(first());

  }

    remove( regiao: string) {
      return this.httpClient.delete(`${this.API}${regiao}`).pipe(first());
    }


}
