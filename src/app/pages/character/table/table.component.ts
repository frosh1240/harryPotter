import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/interfaces/character.interface';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['titlePost', 'tagPost'];
  dataSource = new MatTableDataSource();
  dataImport: any = [];
  id: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @Input() HousesGet!: string;
  @Output() send = new EventEmitter<string>();

  constructor(private characterSv: CharacterService) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    let time = setInterval(() => {
      this.getHouse(this.HousesGet);
    }, 500);
  }

  getHouse(getH: any): void {
    console.log(getH);
    this.characterSv.getCharacter(getH).subscribe((data: object) => {
      this.dataImport = data;

      console.log(this.dataImport);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
