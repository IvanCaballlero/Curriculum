import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ShareEventService } from 'src/app/core/services/share-event.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('invisible', [
      state('visible', style({
        width: '100%',
        opacity: '100%',
      })),
      state('invisible', style({
        minWidth: '0%',
        width: '200px',
        borderTopRightRadius: '100px',
        borderBottomRightRadius: '100px',
        opacity: '-50%',
      })),

      transition('visible => invisible', [
        animate('2s'),
      ]),
    ]),
  ]
})

export class EducationComponent implements OnInit {
  @ViewChild('containerInformation') containerInformation!: ElementRef;
  @ViewChild('containerMainTitle') containerMainTitle!: ElementRef;
  @ViewChild('containerText') containerText!: ElementRef;

  clicked: boolean = false

  actualStateInvisible = 'visible';
  actualStateOpacity = 'opaque';

  constructor(
    private shareEventService: ShareEventService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.shareEventService.event$.subscribe(() => {
      this.hideMainTitle();
    });
  }

  hideMainTitle() {
    this.actualStateInvisible = this.actualStateInvisible === 'visible' ? 'invisible' : 'visible';

    setTimeout(() => {
      this.renderer.setStyle(this.containerMainTitle.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.containerText.nativeElement, 'width', '100%');
      this.renderer.setStyle(this.containerText.nativeElement, 'position', 'static');
      this.renderer.setStyle(this.containerText.nativeElement, 'display', 'flex');
    }, 2000)
  }
}
