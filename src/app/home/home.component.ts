import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
      transition(('visible <=> invisible'), [
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
      transition(('maximized <=> minimized'), [
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
  @ViewChild('containerHeaderRigth') containerHeaderRigth!: ElementRef;

  actualStateChangeVisibility = 'visible';
  actualStateChangeSize = 'maximized';

  changeVisibility(item: any) {
    switch (item) {
      case 'containerHeaderRigth':
        if(this.actualStateChangeVisibility == 'invisible'){
          //Esconder la cabecera de la seccion derecha de la pagina
          this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'display', 'none');
          //Esconder las secciones de información especifica
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');
          //Reajustar el padding de la sección derecha de la pagina
          this.renderer.setStyle(this.containerRight.nativeElement, 'padding', '260px 10px 0px 10px');
          //Redimencionar el contenedor de la cabecera general
          //this.renderer.setStyle(this.containerHeader.nativeElement, 'minWidth', '500px');
          this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '100%');

          //Activar el trigger para cambiar el tamaño
          this.actualStateChangeSize = 'maximized'

          setTimeout(() => {
            //Reajustar el display de la cabecera general
            this.renderer.setStyle(this.informationHeader.nativeElement, 'display', 'flex');

            //Activar el trigger para cambiar la visualización
            this.actualStateChangeVisibility = 'visible';
          }, 1000);

          setTimeout(() => {
            //Mostrar la sección del perfil profesional
            this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'block');
          }, 2000);
        }
        break;
      case 'itemEducation':
        if(this.actualStateChangeVisibility == 'visible'){
          //Ocultar la sección del perfil profesional
          this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');

          //Activar el trigger para cambiar la visualización
          this.actualStateChangeVisibility = 'invisible';

          setTimeout(() => {
            //Activar el trigger para cambiar el tamaño
            this.actualStateChangeSize = 'minimized';
          }, 1000);

          setTimeout(() => {
            //Eliminar el padding en exeso que eiste en la sección derecha de la pagina
            this.renderer.setStyle(this.containerRight.nativeElement, 'padding', '0px');
            //Redimencionar el ancho de la cabecera general
            this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '300px');
            //Mostrar la cabecera de la sección derecha de la pagina
            this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'display', 'flex');
            //Redimencionar el alto de la cabecera de la sección derecha de la pagina
            this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'height', '50px');
            //Mostrar la sección en la que se dio click
            this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'block');
          }, 2000);
        }else if(this.actualStateChangeVisibility == 'invisible'){
          //Esconder las secciones de información especifica
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');
          //Mostar la sección en la que se dio click
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'block');
        }
        break;
      case 'itemExpertise':
        if(this.actualStateChangeVisibility == 'visible'){
          //Ocultar la sección del perfil profesional
          this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');

          //Activar el trigger para cambiar la visualización
          this.actualStateChangeVisibility = 'invisible';

          setTimeout(() => {
            //Activar el trigger para cambiar el tamaño
            this.actualStateChangeSize = 'minimized';
          }, 1000);

          setTimeout(() => {
            //Eliminar el padding en exeso que eiste en la sección derecha de la pagina
            this.renderer.setStyle(this.containerRight.nativeElement, 'padding', '0px');
            //Redimencionar el ancho de la cabecera general
            this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '300px');
            //Mostrar la cabecera de la sección derecha de la pagina
            this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'display', 'flex');
            //Redimencionar el alto de la cabecera de la sección derecha de la pagina
            this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'height', '50px');
            //Mostrar la sección en la que se dio click
            this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'block');
          }, 2000);
        }else if(this.actualStateChangeVisibility == 'invisible'){
          //Esconder las secciones de información especifica
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'none');
          //Mostar la sección en la que se dio click
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'block');
        }
        break;
      case 'itemProjects':
        if(this.actualStateChangeVisibility == 'visible'){
          //Ocultar la sección del perfil profesional
          this.renderer.setStyle(this.containerModuleProfessionalProfile.nativeElement, 'display', 'none');

          //Activar el trigger para cambiar la visualización
          this.actualStateChangeVisibility = 'invisible';

          setTimeout(() => {
            //Activar el trigger para cambiar el tamaño
            this.actualStateChangeSize = 'minimized';
          }, 1000);

          setTimeout(() => {
            //Eliminar el padding en exeso que eiste en la sección derecha de la pagina
            this.renderer.setStyle(this.containerRight.nativeElement, 'padding', '0px');
            //Redimencionar el ancho de la cabecera general
            this.renderer.setStyle(this.containerHeader.nativeElement, 'width', '300px');
            //Mostrar la cabecera de la sección derecha de la pagina
            this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'display', 'flex');
            //Redimencionar el alto de la cabecera de la sección derecha de la pagina
            this.renderer.setStyle(this.containerHeaderRigth.nativeElement, 'height', '50px');
            //Mostrar la sección en la que se dio click
            this.renderer.setStyle(this.containerModuleProjects.nativeElement, 'display', 'block');
          }, 2000);
        }else if(this.actualStateChangeVisibility == 'invisible'){
          //Esconder las secciones de información especifica
          this.renderer.setStyle(this.containerModuleEducation.nativeElement, 'display', 'none');
          this.renderer.setStyle(this.containerModuleExpertise.nativeElement, 'display', 'none');
          //Mostar la sección en la que se dio click
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
  ) { }
}