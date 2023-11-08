import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PopUpEducationComponent } from './pop-up-education/pop-up-education.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})

export class EducationComponent implements OnInit {
  openDialog(){
    this.dialog.open(PopUpEducationComponent)
  }

  ngOnInit() {}

  constructor(public dialog: MatDialog){}
}