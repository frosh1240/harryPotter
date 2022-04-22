import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseGet } from 'src/app/interfaces/house.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addStudent: FormGroup;
  add: HouseGet = new HouseGet();
  getID: any;
  addStudentsNew: any;
  dataLocal: any = localStorage.getItem('data');
  displayedColumns: string[] = ['name', 'patronus', 'age', 'house'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private fb: FormBuilder,
    private __route: ActivatedRoute,
    private router: Router
  ) {
    this.addStudent = this.fb.group({
      name: ['', Validators.required],
      patronus: ['', Validators.required],
      age: ['', Validators.required],
      house: ['', Validators.required],
    });

    var parsed = JSON.parse(this.dataLocal);
    this.dataSource = new MatTableDataSource(parsed);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    const data = localStorage.getItem('data');
    if (data !== null) {
      const studentsGet = JSON.parse(data);
      console.log(studentsGet);
    }
  }

  agregar(): void {
    const data = localStorage.getItem('data');

    const studentsNew: HouseGet = {
      name: this.addStudent.get('name')?.value,
      patronus: this.addStudent.get('patronus')?.value,
      age: this.addStudent.get('age')?.value,
      house: this.addStudent.get('house')?.value,
    };
    if (data !== null) {
      const idInventory = JSON.parse(data);
      idInventory.push(studentsNew);
      localStorage.setItem('data', JSON.stringify(idInventory));
      console.log(studentsNew);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'It saves correctly',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/tabs/students/add']);
    } else {
      const addInvArr = [];
      addInvArr.push(studentsNew);
      localStorage.setItem('data', JSON.stringify(addInvArr));
      console.log(studentsNew);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error saving data',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/tabs/students/add']);
    }
  }

  getStaff(): void {}

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
