import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [SharedModule, MatButtonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

}
