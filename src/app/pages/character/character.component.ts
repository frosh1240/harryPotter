import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HouseGet } from '../../interfaces/house.interface';

interface House {
  house: string;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  housesGet: House[] = [
    { house: 'slytherin' },
    { house: 'gryffindor' },
    { house: 'ravenclaw' },
    { house: 'hufflepuff' },
  ];

  public houseData: HouseGet = new HouseGet();
  public houseInventory!: FormGroup;
  public houseGetInput: any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.houseInventory = this.fb.group({
      houseData: ['', Validators.required],
    });
  }

  changeHouses($event: any): void {
    this.houseGetInput = $event;
  }
}
