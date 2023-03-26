import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private host = 'https://wework.com/es-LA'

  public footerList = [
    {
      title: 'EMPRESA',
      navOptions: [
        {
          hrf: `${this.host}/locations`,
          text: 'Ubicaciones alrededor del mundo'
        },
        {
          hrf: `${this.host}/mission`,
          text: 'Misión'
        },
        {
          hrf: `${this.host}/info/inclusion`,
          text: 'Inclusión y diversidad'
        },
        {
          hrf: `https://careers.wework.com/`,
          text: 'Oportunidades de empleo'
        },
        {
          hrf: `https://investors.wework.com/`,
          text: 'Inversores'
        },
        {
          hrf: `https://wework.com/es-LA/newsroom`,
          text: 'Sala de redacción'
        },
        {
          hrf: `${this.host}/ideas`,
          text: 'Blog'
        }
      ]
    },
    {
      title: 'Colaboraciones',
      navOptions: [
        {
          hrf: `${this.host}/brokers`,
          text: 'Brokers'
        },
        {
          hrf: `${this.host}/landlords`,
          text: 'Propietarios'
        },
        {
          hrf: `${this.host}/refer`,
          text: 'Recomiéndanos a alguien'
        },
        {
          hrf: `${this.host}/host-event`,
          text: 'Planificadores de eventos'
        },
      ]
    },
    {
      title: 'Soporte',
      navOptions: [
        {
          hrf: `https://www.wework.com/es-LA/contact-us`,
          text: 'Contacto  '
        },
        {
          hrf: `${this.host}/login"`,
          text: 'Member Login'
        },
        {
          hrf: `https://help.wework.com/s/?language=en_US`,
          text: 'Preguntas frecuentes'
        },
        {
          hrf: `${this.host}/info/wework-response-to-coronavirus-covid-19`,
          text: 'Respuesta ante la COVID-19'
        },
      ]
    }
  ]
}
