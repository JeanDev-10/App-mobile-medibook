import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {



  searchTerm: string = '';
  specialtyFilter: string = '';


  items: any[] = [
    { name: 'Oliver', specialty: 'Ginecología' },
    { name: 'Jean', specialty: 'Anestesiología' },
    { name: 'Jacob', specialty: 'Cardiología' },
    { name: 'Keyron', specialty: 'Angiología' },
    { name: 'Jahir', specialty: 'Dermatología' },
    { name: 'Chala', specialty: 'Endoscopia' },
    { name: 'Jesus', specialty: 'Hematología' },

    // Agrega más elementos aquí...
  ];

  get filteredItems() {
    return this.items.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      item.specialty.toLowerCase().includes(this.specialtyFilter.toLowerCase())
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
