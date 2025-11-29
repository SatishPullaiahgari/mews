import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

export interface ApprovalElement {
  id: string;
  name: string;
  submittedBy: string;
  dateTime: string;
  documents: string;
  familyCount: number;
}

const ELEMENT_DATA: ApprovalElement[] = [
  {id: 'REF-2025001', name: 'Rama Krishna Reddy', submittedBy: 'Kukatpally Village', dateTime: 'Jan 13, 2025', documents: '5/5', familyCount: 4},
  {id: 'REF-2025002', name: 'Lakshmi Devi Patel', submittedBy: 'Secunderabad', dateTime: 'Jan 13, 2025', documents: '4/5', familyCount: 2},
  {id: 'REF-2025003', name: 'Venkatesh Naidu', submittedBy: 'Begumpet', dateTime: 'Jan 14, 2025', documents: '5/5', familyCount: 3},
  {id: 'REF-2025004', name: 'Saritha Kumari', submittedBy: 'Madhapur', dateTime: 'Jan 15, 2025', documents: '5/5', familyCount: 5},
  {id: 'REF-2025005', name: 'Gopal Rao Yadav', submittedBy: 'Gachibowli', dateTime: 'Jan 16, 2025', documents: '5/5', familyCount: 1},
];

@Component({
  selector: 'app-pending-approvals',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './pending-approvals.component.html',
  styleUrls: ['./pending-approvals.component.scss']
})
export class PendingApprovalsComponent {
  displayedColumns: string[] = ['id', 'name', 'submittedBy', 'dateTime', 'documents', 'familyCount', 'actions'];
  dataSource = ELEMENT_DATA;
}
