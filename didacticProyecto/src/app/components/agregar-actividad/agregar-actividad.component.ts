import { Temas } from './../../models/temas';
import { TemasService } from './../../service/temas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.css']
})
export class AgregarActividadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
