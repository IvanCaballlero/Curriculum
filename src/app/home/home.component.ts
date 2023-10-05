import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ShareEventService } from '../core/services/share-event.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeVisibility', [
      state('visible', 
        style({
          opacity: '100%',
        })
      ),
      state('invisible',
        style({
          opacity: '-100%',
          fontSize: '20px'
        })
      ),
      transition(('visible => invisible'), [
        animate('1s')
      ])
    ]),
    trigger('changeSize', [
      state('maximized', 
        style({
          width: '100%',
        })
      ),
      state('minimized',
        style({
          minWidth: '0px',
          width: '200px',
          borderRadius: '100px'
        })
      ),
      transition(('maximized => minimized'), [
        animate('1s')
      ])
    ])
  ]
})

export class HomeComponent {
  @ViewChild('containerModuleProfessionalProfile') containerModuleProfessionalProfile!: ElementRef;
  @ViewChild('containerModuleEducation') containerModuleEducation!: ElementRef;
  @ViewChild('containerModuleExpertise') containerModuleExpertise!: ElementRef;
  @ViewChild('containerModuleProjects') containerModuleProjects!: ElementRef;
  @ViewChild('containerHeader') containerHeader!: ElementRef;
  @ViewChild('informationHeader') informationHeader!: ElementRef;
  @ViewChild('containerRight') containerRight!: ElementRef;
  // @ViewChild('containerHeaderRigth') containerHeaderRigth!: ElementRef;

  actualStateChangeVisibility = 'visible';
  actualStateChangeSize = 'maximized';

  changeVisibility(item: any) {
    switch (item) {
      case 'itemEducation':
        if(this.actualStateChangeVisibility == 'visible'){
          this.actualStateChangeVisibility = 'invisible';
          setTimeout(() => {
            this.actualStateChangeSize = 'minimized'
          }, 1000);
          setTimeout(() => {
            this.renderer.setStyle(this.containerHeader.nativeElement, 'minWidth', '300px');
            this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '300px');
            this.renderer.setStyle(this.informationHeader.nativeElement, 'display', 'none');
          }, 2000);
          setTimeout(() => {
            this.renderer.setStyle(this.containerRight.nativeElement, 'paddingTop', '10px');
            this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
          }, 2002);
          setTimeout(() => {
            this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'block');
          }, 2004);
        }else if(this.actualStateChangeVisibility == 'invisible'){
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'block');
        }

        //Avisar al componente de educación que se hizo click
        // this.shareEventService.emitEvent(true);
        break;
      case 'itemExpertise':
        if(this.actualStateChangeVisibility == 'visible'){
          this.actualStateChangeVisibility = 'invisible';
          setTimeout(() => {
            this.actualStateChangeSize = 'minimized'
          }, 1000);
          setTimeout(() => {
            this.renderer.setStyle(this.containerHeader.nativeElement, 'minWidth', '300px');
            this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '300px');
            this.renderer.setStyle(this.informationHeader.nativeElement, 'display', 'none');
          }, 2000);
          setTimeout(() => {
            this.renderer.setStyle(this.containerRight.nativeElement, 'paddingTop', '10px');
            this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
          }, 2002);
          setTimeout(() => {
            this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'block');
          }, 2004);
        }else if(this.actualStateChangeVisibility == 'invisible'){
          this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'block');
        }
        break;
      case 'itemProjects':
        if(this.actualStateChangeVisibility == 'visible'){
          this.actualStateChangeVisibility = 'invisible';
          setTimeout(() => {
            this.actualStateChangeSize = 'minimized'
          }, 1000);
          setTimeout(() => {
            this.renderer.setStyle(this.containerHeader.nativeElement, 'minWidth', '300px');
            this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '300px');
            this.renderer.setStyle(this.informationHeader.nativeElement, 'display', 'none');
          }, 2000);
          setTimeout(() => {
            this.renderer.setStyle(this.containerRight.nativeElement, 'paddingTop', '10px');
            this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
          }, 2002);
          setTimeout(() => {
            this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'block');
          }, 2004);
        }else if(this.actualStateChangeVisibility == 'invisible'){
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'block');
        }
        break;
      default:
        alert('Ocurrio un error inesperado intente de nuevo mas tarde. Si el error persiste comuníquese con servicio al cliente');
        break;
    }
  }

  constructor(
    private renderer: Renderer2,
    private shareEventService: ShareEventService,
  ) { }
}