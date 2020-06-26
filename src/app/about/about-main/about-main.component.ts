import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/models/vehicle.model';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css', '../../../styles/main-style.css']
})

export class AboutMainComponent implements OnInit {

  public vehicles: Vehicle[] = [];

  constructor() {
    this.vehicles.push(new Vehicle('A', 'assets/vehicles/motorcycle.png'));
    this.vehicles.push(new Vehicle('B', 'assets/vehicles/car.png'));
    this.vehicles.push(new Vehicle('C', 'assets/vehicles/truck.png'));
    this.vehicles.push(new Vehicle('F', 'assets/vehicles/tractor.png'));
  }

  ngOnInit(): void {}

  onEnter(index: number): void {
    const image = this.vehicles[index].image;
    const dotIndex = image.lastIndexOf('.');

    this.vehicles[index].image = image[dotIndex - 1] === 'R' ?
                                 image :
                                 image.substring(0, dotIndex) + 'R' + '.png';
  }

  onLeave(index: number): void {
    const image = this.vehicles[index].image;
    const dotIndex = image.lastIndexOf('.');

    this.vehicles[index].image = image[dotIndex - 1] === 'R' ?
                                 image.substring(0, dotIndex - 1) + '.png' :
                                 image;
  }
}
