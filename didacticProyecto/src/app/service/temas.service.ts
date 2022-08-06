import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Temas } from './../models/temas';

@Injectable({
  providedIn: 'root'
})

export class TemasService {

  URL_API = 'http://localhost:9000/temas/';

  public tema:Temas=
  {cveArea: 0,nombre:'',descripcion:''};

  temas: Temas[]=[];

  constructor(private http: HttpClient) { }

  getTemas(){
    return this.http.get<Temas[]>(this.URL_API);
  }

  createTemas(tema:Temas){
    return this.http.post(this.URL_API,tema);
  }

  deleteTemas(_cveTema:any){
    return this.http.delete(this.URL_API+_cveTema);
  }

  editTemas(tema:Temas){
  return this.http.put(this.URL_API+tema._cveTema,tema);
  }

}
