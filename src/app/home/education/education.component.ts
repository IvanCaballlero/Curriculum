import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ShareEventService } from 'src/app/core/services/share-event.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})

export class EducationComponent implements OnInit {
  @ViewChild('containerInformation') containerInformation!: ElementRef;
  @ViewChild('containerMainTitle') containerMainTitle!: ElementRef;
  @ViewChild('containerText') containerText!: ElementRef;

  hideMainTitle() {
    alert('seccion educacion')
  }

  ngOnInit() {
    this.shareEventService.event$.subscribe(() => {
      this.hideMainTitle();
    });
  }

  constructor(
    private shareEventService: ShareEventService,
    private renderer: Renderer2
  ) { }
}
