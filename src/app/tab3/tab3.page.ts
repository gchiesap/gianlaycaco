import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRegaloPage } from '../modal-regalo/modal-regalo.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( private modalCtrl: ModalController) {}

  async modalRegalo( regalo: any) {

    console.log(regalo);

    const modal = await this.modalCtrl.create({
      component: ModalRegaloPage,
      componentProps: {
        regaloData: regalo
      }
    });

    await modal.present();
  }


  regalos = [
    {
      'id': 'disney',
      'nombre': 'Entradas Disney',
      'fotos': ["/assets/regalos/parques.png",
                "/assets/regalos/parques_2.png",
                "/assets/regalos/parque_3.png",
                "/assets/regalos/parque_4.png"],
      'links_mp': [{'id':'1 entrada - $5000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-66123664-1a85-47d2-a8c7-d97e5041200c"},
                  {'id':'2 entradas - $10000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-51ce0ceb-cde2-42e7-b88a-762c02539bd2"}]
    },
    {
      'id': 'universal',
      'nombre': 'Entradas Universal',
      'fotos': ["/assets/regalos/universal_1.png",
                "/assets/regalos/universal_2.png"],
      'links_mp': [{'id':'1 Entrada Universal - $9000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-96fa083d-ccda-4671-8548-6654039f5d08"},
                  {'id':'2 Entradas Universal - $18000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-82af4353-923c-4c89-8cf1-d387c987deb5"},
                    {'id':'3 Entradas Universal - $27000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-3152ac32-9f35-4cb5-a06f-b1394f2a80bb"},
                    {'id':'4 Entradas Universal - $36000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-a27ca833-b8b7-4e8b-8ccb-26631feeef2c"}
           
                  ]
    },
    {
      'id': 'comidas',
      'nombre': 'Comidas del Viaje',
      'fotos': ["/assets/regalos/comidas_1.jpg",
                "/assets/regalos/comidas_2.jpg",
                "/assets/regalos/comidas_3.jpeg",
                "/assets/regalos/comidas_4.jpg"],
      'links_mp': [{'id':'Almuerzo - $1500',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-c11ef2bc-e97a-455d-a180-7a6a775679cf"},
                  {'id':'Cena - $2500',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-0d4e34a7-e621-4fcb-b164-857a66c9f396"}]
    },
    {
      'id': 'alquiler_auto',
      'nombre': 'Alquiler de Auto',
      'fotos': ["/assets/regalos/auto.jpg"],
      'links_mp': [{'id':'1 día - $3000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-72eba14a-c4a5-4302-b5b4-f5f724ea6135"},
                  {'id':'2 días - $6000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-f46262da-8373-41ca-a47f-a0a2ef844b9e"},
                  {'id':'3 días - $9000',
                  'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-c91b6a07-36af-494e-aa8b-380c4682b0b0"}]
    },
    
    {
      'id': 'electrodomesticos',
      'nombre': 'Electrodomésticos',
      'fotos': ["/assets/regalos/microondas.png",
                "/assets/regalos/aire.png",
                "/assets/regalos/batidora_kitchenaid.jpg"],
      'links_mp': [{'id':'Microondas - $10000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-ca610dc9-34a9-4f83-afc3-650691e5b982"},
                  {'id':'Aire Acondicionado - $25000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-6e0a35b5-215c-410f-83b3-0abd13d42428"},
                    {'id':'Batidora Eléctrica - $5000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-a6eb133b-38e5-4f47-903c-d0708822de81"}
                  ]
    },
    {
      'id': 'cocina',
      'nombre': 'Cocina',
      'fotos': ["/assets/regalos/Essen_amarilla.jpg",
                "/assets/regalos/tuppers_pyrex.jpg"],
      'links_mp': [{'id':'Olla Essen - $10000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-047534de-fe97-4822-a383-b5804e2a42df"},
                  {'id':'Fuentes Pyrex - $2000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-dee7e688-c282-4f8f-a925-1d98040f8f70"}
                  ]
    },
    {
      'id': 'hogar',
      'nombre': 'Hogar',
      'fotos': ["/assets/regalos/lampara.jpg",
                "/assets/regalos/Manta.jpg",
                "/assets/regalos/sabanas.jpg",
                "/assets/regalos/Alfombra.jpg",
                "/assets/regalos/almohadones.jpg"],
      'links_mp': [{'id':'Lámpara de pie - $8000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-3729e4cd-3c11-4787-9c83-da9e3a589c2b"},
                  {'id':'Sábanas - $4000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-91e607c7-d886-43a8-88b7-da61bde31ed0"},
                    {'id':'Manta - $3000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-d798bf64-ee6f-4a0b-9f9a-5a8d44ae70cd"},
                    {'id':'Almohadones - $2000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-f6ddd4d2-8ec0-4b6f-a3bc-6b93afd864ea"},
                    {'id':'Alfombra - $3000',
                    'url':"https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=162477031-0677ddd0-3fdd-4397-94a8-f200ff5b7f70"}
                  ]
    }

  ];


}
