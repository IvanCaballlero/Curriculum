import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ShareEventService } from '../core/services/share-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @ViewChild('containerModuleProfessionalProfile') containerModuleProfessionalProfile!: ElementRef;
  @ViewChild('containerModuleEducation') containerModuleEducation!: ElementRef;
  @ViewChild('containerModuleExpertise') containerModuleExpertise!: ElementRef;
  @ViewChild('containerModuleLanguaje') containerModuleLanguaje!: ElementRef;
  @ViewChild('containerModuleProjects') containerModuleProjects!: ElementRef;
  @ViewChild('containerHeaderRigth') containerHeaderRigth!: ElementRef;

  changeVisibility(item: any) {
    switch (item) {
      case 'itemEducation':
        //Desaparecer los demas modulos
        this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleLanguaje.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');

        //Aparecer el modulo en el que se dio click
        this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'block');

        //Avisar al componente de educación que se hizo click
        this.shareEventService.emitEvent(true);
        break;
      case 'itemExpertise':
        //Desaparecer los demas modulos
        this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleLanguaje.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');

        //Aparecer el modulo en el que se dio click
        this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'block');
        break;
      case 'itemLanguaje':
        //Desaparecer los demas modulos
        this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');

        //Aparecer el modulo en el que se dio click
        this.renderer.setStyle(this.containerModuleLanguaje.nativeElement, 'display', 'block');
        break;
      case 'itemProjects':
        //Desaparecer los demas modulos
        this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.containerModuleLanguaje.nativeElement, 'display', 'none');

        //Aparecer el modulo en el que se dio click
        this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'block');
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
