import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})

export class ExpertiseComponent implements AfterViewInit{
  //Incializar los slider
  sliderProgrammingLanguaje: any;
  sliderWebTechnology: any;
  sliderDataBase: any;
  sliderOther: any;

  //Incializar las secciones de cada slider
  sliderSectionProgrammingLanguaje: any;
  sliderSectionWebTechnology: any;
  sliderSectionDataBase: any;
  sliderSectionOther: any;

  //Inicializar la ultima sección de cada slider
  sliderProgrammingLanguajeSectionLast: any;
  sliderWebTechnologySectionLast: any;
  sliderDataBaseSectionLast: any;
  sliderOtherSectionLast: any;

  //Inicializar el boton izquierdo de los slider
  sliderButtonLeftProgrammingLanguaje:any
  sliderButtonLeftWebTechnology:any
  sliderButtonLeftDataBase:any
  sliderButtonLeftOther:any

  //Inicializar el boton derecho de los slider
  sliderButtonRightProgrammingLanguaje:any
  sliderButtonRightWebTechnology:any
  sliderButtonRightDataBase:any
  sliderButtonRightOther:any

  moveSliderToLeft(e: Event){
    if(e != null){
      let target = e.target as HTMLInputElement
      let idElement = target.id

      if(idElement == 'sliderButtonLeftProgrammingLanguaje'){
        this.moveSliderToLeftProgrammingLanguaje();
      }else if(idElement == 'sliderButtonLeftWebTechnology'){
        this.moveSliderToLeftWebTechnology();
      }else if(idElement == 'sliderButtonLeftDataBase'){
        this.moveSliderToLeftDataBase();
      }else if(idElement == 'sliderButtonLeftOther'){
        this.moveSliderToLeftOther();
      }
    }
  }
  moveSliderToLeftProgrammingLanguaje(){
    //Obtener las secciones del slider que esta dentro de los lenguajes de programación
    this.sliderSectionProgrammingLanguaje = this.el.nativeElement.querySelectorAll('.sliderSectionProgrammingLanguaje');

    //Obtener la ultima sección del slider de leguanjes de programación
    this.sliderProgrammingLanguajeSectionLast = this.sliderSectionProgrammingLanguaje[this.sliderSectionProgrammingLanguaje.length - 1];
  
    //Mover hacia la izquierda ('recuerde que esta en 100%') el slider de lenguajes de programación y dar una animación
    this.sliderProgrammingLanguaje.style.marginLeft = '0%';
    this.sliderProgrammingLanguaje.style.transition = 'all 0.5s';

    //Esperar a que termine la animación
    setTimeout(() => {
      this.sliderProgrammingLanguaje.style.transition = 'none';
      this.sliderProgrammingLanguaje.insertAdjacentElement('afterbegin', this.sliderProgrammingLanguajeSectionLast)
      this.sliderProgrammingLanguaje.style.marginLeft = '-100%';
    }, 500)
  }
  moveSliderToLeftWebTechnology(){
    //Obtener las secciones del slider que esta dentro de tecnologias web
    this.sliderSectionWebTechnology = this.el.nativeElement.querySelectorAll('.sliderSectionWebTechnology');

    //Obtener la ultima sección del slider de tecnologias web
    this.sliderWebTechnologySectionLast = this.sliderSectionWebTechnology[this.sliderSectionWebTechnology.length - 1];
  
    //Mover hacia la izquierda ('recuerde que esta en 100%') el slider de tecnologias web y dar una animación
    this.sliderWebTechnology.style.marginLeft = '0%';
    this.sliderWebTechnology.style.transition = 'all 0.5s';

    //Esperar a que termine la animación
    setTimeout(() => {
      this.sliderWebTechnology.style.transition = 'none';
      this.sliderWebTechnology.insertAdjacentElement('afterbegin', this.sliderWebTechnologySectionLast)
      this.sliderWebTechnology.style.marginLeft = '-100%';
    }, 500)
  }
  moveSliderToLeftDataBase(){
    //Obtener las secciones del slider que esta dentro de base de datos
    this.sliderSectionDataBase = this.el.nativeElement.querySelectorAll('.sliderSectionDataBase');

    //Obtener la ultima sección del slider de base de datos
    this.sliderDataBaseSectionLast = this.sliderSectionDataBase[this.sliderSectionDataBase.length - 1];
  
    //Mover hacia la izquierda ('recuerde que esta en 100%') el slider de base de datos y dar una animación
    this.sliderDataBase.style.marginLeft = '0%';
    this.sliderDataBase.style.transition = 'all 0.5s';

    //Esperar a que termine la animación
    setTimeout(() => {
      this.sliderDataBase.style.transition = 'none';
      this.sliderDataBase.insertAdjacentElement('afterbegin', this.sliderDataBaseSectionLast)
      this.sliderDataBase.style.marginLeft = '-100%';
    }, 500)
  }
  moveSliderToLeftOther(){
    //Obtener las secciones del slider que esta dentro de otros
    this.sliderSectionOther = this.el.nativeElement.querySelectorAll('.sliderSectionOther');

    //Obtener la ultima sección del slider de otros
    this.sliderOtherSectionLast = this.sliderSectionOther[this.sliderSectionOther.length - 1];
  
    //Mover hacia la izquierda ('recuerde que esta en 100%') el slider de otros y dar una animación
    this.sliderOther.style.marginLeft = '0%';
    this.sliderOther.style.transition = 'all 0.5s';

    //Esperar a que termine la animación
    setTimeout(() => {
      this.sliderOther.style.transition = 'none';
      this.sliderOther.insertAdjacentElement('afterbegin', this.sliderOtherSectionLast)
      this.sliderOther.style.marginLeft = '-100%';
    }, 500)
  }

  moveSliderToRight(e: Event){
    if(e != null){
      let target = e.target as HTMLInputElement
      let idElement = target.id

      if(idElement == 'sliderButtonRightProgrammingLanguaje'){
        this.moveSliderToRightProgrammingLanguaje();
      } else if(idElement == 'sliderButtonRightWebTechnology'){
        this.moveSliderToRightWebTechnology();
      }else if(idElement == 'sliderButtonRightDataBase'){
        this.moveSliderToRightDataBase();
      }else if(idElement == 'sliderButtonRightOther'){
        this.moveSliderToRightOther();
      }
    }
    
  }
  moveSliderToRightProgrammingLanguaje(){
    //Declarar la primera seccion del slider
    let sliderSectionProgrammingLanguajeFirst = this.el.nativeElement.querySelectorAll('.sliderSectionProgrammingLanguaje')[0];

    //Mover hacia la derecha ('recuerde que esta en 100%') el slider de otros y dar una animación
    this.sliderProgrammingLanguaje.style.marginLeft = '-200%';
    this.sliderProgrammingLanguaje.style.transition = 'all 0.5s';

    setTimeout(() => {
      //Eliminar la animación, ubicar la primera seccion del slider antes de terminar y volver a la posición original
      this.sliderProgrammingLanguaje.style.transition = 'none';
      this.sliderProgrammingLanguaje.insertAdjacentElement('beforeend', sliderSectionProgrammingLanguajeFirst)
      this.sliderProgrammingLanguaje.style.marginLeft = '-100%';
    }, 500)
  }
  moveSliderToRightWebTechnology(){
    //Declarar la primera seccion del slider
    let sliderSectionWebTechnologyFirst = this.el.nativeElement.querySelectorAll('.sliderSectionWebTechnology')[0];

    //Mover hacia la derecha ('recuerde que esta en 100%') el slider de otros y dar una animación
    this.sliderWebTechnology.style.marginLeft = '-200%';
    this.sliderWebTechnology.style.transition = 'all 0.5s';

    setTimeout(() => {
      //Eliminar la animación, ubicar la primera seccion del slider antes de terminar y volver a la posición original
      this.sliderWebTechnology.style.transition = 'none';
      this.sliderWebTechnology.insertAdjacentElement('beforeend', sliderSectionWebTechnologyFirst)
      this.sliderWebTechnology.style.marginLeft = '-100%';
    }, 500)
  }
  moveSliderToRightDataBase(){
    //Declarar la primera seccion del slider
    let sliderSectionDataBaseFirst = this.el.nativeElement.querySelectorAll('.sliderSectionDataBase')[0];

    //Mover hacia la derecha ('recuerde que esta en 100%') el slider de otros y dar una animación
    this.sliderDataBase.style.marginLeft = '-200%';
    this.sliderDataBase.style.transition = 'all 0.5s';

    setTimeout(() => {
      //Eliminar la animación, ubicar la primera seccion del slider antes de terminar y volver a la posición original
      this.sliderDataBase.style.transition = 'none';
      this.sliderDataBase.insertAdjacentElement('beforeend', sliderSectionDataBaseFirst)
      this.sliderDataBase.style.marginLeft = '-100%';
    }, 500)
  }
  moveSliderToRightOther(){
    //Declarar la primera seccion del slider
    let sliderSectionOtherFirst = this.el.nativeElement.querySelectorAll('.sliderSectionOther')[0];

    //Mover hacia la derecha ('recuerde que esta en 100%') el slider de otros y dar una animación
    this.sliderOther.style.marginLeft = '-200%';
    this.sliderOther.style.transition = 'all 0.5s';

    setTimeout(() => {
      //Eliminar la animación, ubicar la primera seccion del slider antes de terminar y volver a la posición original
      this.sliderOther.style.transition = 'none';
      this.sliderOther.insertAdjacentElement('beforeend', sliderSectionOtherFirst)
      this.sliderOther.style.marginLeft = '-100%';
    }, 500)
  }

  constructor(private renderer: Renderer2, private el: ElementRef){}

  ngAfterViewInit(){
    //Obtener los elementos del slider de cada sección
    this.sliderProgrammingLanguaje = this.el.nativeElement.querySelector('#sliderProgrammingLanguaje');
    this.sliderWebTechnology = this.el.nativeElement.querySelector('#sliderWebTechnology');
    this.sliderDataBase = this.el.nativeElement.querySelector('#sliderDataBase');
    this.sliderOther = this.el.nativeElement.querySelector('#sliderOther');

    //Obtener las secciones de los slider
    this.sliderSectionProgrammingLanguaje = this.el.nativeElement.querySelectorAll('.sliderSectionProgrammingLanguaje');
    this.sliderSectionWebTechnology = this.el.nativeElement.querySelectorAll('.sliderSectionWebTechnology');
    this.sliderSectionDataBase = this.el.nativeElement.querySelectorAll('.sliderSectionDataBase');
    this.sliderSectionOther = this.el.nativeElement.querySelectorAll('.sliderSectionOther');

    //Obtener la ultima sección de los slider
    this.sliderProgrammingLanguajeSectionLast = this.sliderSectionProgrammingLanguaje[this.sliderSectionProgrammingLanguaje.length - 1];
    this.sliderWebTechnologySectionLast = this.sliderSectionWebTechnology[this.sliderSectionWebTechnology.length - 1];
    this.sliderDataBaseSectionLast = this.sliderSectionDataBase[this.sliderSectionDataBase.length - 1];
    this.sliderOtherSectionLast = this.sliderSectionOther[this.sliderSectionOther.length - 1];

    //Obtener los botones de los slider
    this.sliderButtonLeftProgrammingLanguaje = this.el.nativeElement.querySelector('#sliderButtonLeftProgrammingLanguaje');
    this.sliderButtonRightProgrammingLanguaje = this.el.nativeElement.querySelector('#sliderButtonRightProgrammingLanguaje');
    this.sliderButtonLeftWebTechnology = this.el.nativeElement.querySelector('#sliderButtonLeftWebTechnology');
    this.sliderButtonRightWebTechnology = this.el.nativeElement.querySelector('#sliderButtonRightWebTechnology');
    this.sliderButtonLeftDataBase = this.el.nativeElement.querySelector('#sliderButtonLeftDataBase');
    this.sliderButtonRightDataBase = this.el.nativeElement.querySelector('#sliderButtonRightDataBase');
    this.sliderButtonLeftOther = this.el.nativeElement.querySelector('#sliderButtonLeftOther');
    this.sliderButtonRightOther = this.el.nativeElement.querySelector('#sliderButtonRightOther');

    //Poner la ultima sección de los slider antes del inicio
    this.sliderProgrammingLanguaje.insertAdjacentElement('afterbegin', this.sliderProgrammingLanguajeSectionLast);
    this.sliderWebTechnology.insertAdjacentElement('afterbegin', this.sliderWebTechnologySectionLast);
    this.sliderDataBase.insertAdjacentElement('afterbegin', this.sliderDataBaseSectionLast);
    this.sliderOther.insertAdjacentElement('afterbegin', this.sliderOtherSectionLast);

    //Mover los slider automaticamente cada 3 segundos
    setInterval(() => {
      //NOTA: en caso falso (que halla mas de un icono) cambiar en el css la cantidad de elementos
      if(this.sliderSectionProgrammingLanguaje.length > 1){
        this.moveSliderToLeftProgrammingLanguaje();
      }else{
        this.sliderButtonLeftProgrammingLanguaje.style.display = 'none';
        this.sliderButtonRightProgrammingLanguaje.style.display = 'none';
        this.sliderProgrammingLanguaje.style.marginLeft = '0%';
      }
      if(this.sliderSectionWebTechnology.length > 1){
        this.moveSliderToLeftWebTechnology();
      }else{
        this.sliderButtonLeftWebTechnology.style.display = 'none';
        this.sliderButtonRightWebTechnology.style.display = 'none';
        this.sliderWebTechnology.style.marginLeft = '0%';
      }
      if(this.sliderSectionDataBase.length > 1){
        this.moveSliderToLeftDataBase();
      }else{
        this.sliderButtonLeftDataBase.style.display = 'none';
        this.sliderButtonRightDataBase.style.display = 'none';
        this.sliderDataBase.style.marginLeft = '0%';
      }
      if(this.sliderSectionOther.length > 1){
        this.moveSliderToLeftOther();
      }else{
        this.sliderButtonLeftOther.style.display = 'none';
        this.sliderButtonRightOther.style.display = 'none';
        this.sliderOther.style.marginLeft = '0%';
      }
    }, 3000);
  }
}