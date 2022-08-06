import { Temas } from './../../models/temas';
import { TemasService } from './../../service/temas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-agregar-tema',
  templateUrl: './agregar-tema.component.html',
  styleUrls: ['./agregar-tema.component.css']
})
export class AgregarTemaComponent implements OnInit {

  constructor(public TemasService: TemasService) { }

  ngOnInit(): void {
    this.getTemas();
  }

  getTemas(){
    this.TemasService.getTemas().subscribe(
      res => {
        this.TemasService.temas= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createTemas(form:NgForm){
    if(form.value._cveTema){
      console.log('actualizando');
      this.TemasService.editTemas(form.value).subscribe(
        res=> console.log(res),
        err=> console.log(err)
      );
    }else{//Creando
      this.TemasService.createTemas(form.value).subscribe(
        res=> {
          this.getTemas();
          form.reset();
        },
        err=> console.log(err)
      )}
  }

  deleteTemas(_cveTema:any){
    const resp = confirm('¿Estas seguro de eliminarlo?')
    console.log('eliminando '+_cveTema);
    if(resp){
      this.TemasService.deleteTemas(_cveTema).subscribe(
        (res)=> {
          this.getTemas();
        },
        (err)=> console.log(err)
      );
    }
  }

  
  editEmpleado(tema:Temas){
    this.TemasService.tema = tema;
  }

  formReset(form:NgForm){
    this.TemasService.tema=form.value;
    form.reset(); 
   }


}
