import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Swiper,
  SwiperOptions,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public mySwiper: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 8,
    centeredSlidesBounds: true,
    grabCursor: true,
    centeredSlides: true,
    direction: 'horizontal'
  };

  public bannerList = [
    "./assets/img/web5.jpg",
    "./assets/img/web1.jpg",
    "./assets/img/web2.jpg",
    "./assets/img/web3.jpg",
    "./assets/img/web4.jpg",
  ]

  public lookingData = [
    {
      title: 'Membresía de coworking',
      description: 'Hot desks, salas, cabinas telefónicas y más',
      img: './assets/img/Hot_Desks_274x274.png',
      manyPeople: 'Más de 1'
    },
    {
      title: 'Oficina Privada',
      description: 'Oficinas listas con amenidades compartidas',
      img: './assets/img/Private_Office_274x274.png',
      manyPeople: '1-20+'
    },
    {
      title: 'Executive Office',
      description: 'Oficinas de primer nivel con amenidades privadas',
      img: './assets/img/Office_Suite_1440x1440.png',
      manyPeople: '1-100+'
    },
    {
      title: 'Sala de reuniones',
      description: 'Salas privadas que se pueden reservar por hora',
      img: './assets/img/Meeting_Small_274x274.png',
      manyPeople: '1-20'
    }
  ]

  public newsOneInformation = [
    {
      initialPrice: true,
      additionalLink: '',
      information: {
        img: './assets/img/news2.jpg',
        title: 'Obtén un 25 % de descuento en el plan WeWork All Access Plus con esta oferta especial',
        description: 'Accede a espacios de trabajo cerca de ti con un descuento del 25 % en la cuota del plan de membresía mensual Plus de WeWork All Access durante 5 meses. Se aplican términos y condiciones.'
      }
    },
    {
      initialPrice: false,
      additionalLink: 'Para particulares/equipos pequeños',
      information: {
        img: './assets/img/news1.jpg',
        title: 'Soluciones para empresas de todos los tamaños',
        description: 'Membresías flexibles y oficinas llave en mano que se adaptan a todos los presupuestos y estrategias híbridas. Encuentra espacio para concentrarte y colaborar en cientos de ubicaciones cerca de tu casa o en diferentes partes del mundo.'
      }
    }
  ]

  onFindSpaces(event: NgForm) {

  }
}
