import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-2-documents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './step-2-documents.component.html',
  styleUrls: ['./step-2-documents.component.scss']
})
export class Step2DocumentsComponent {

  constructor(private router: Router) {}

  previousStep() {
    this.router.navigate(['/admin/dashboard/add-member/personal-details']);
  }

  nextStep() {
    this.router.navigate(['/admin/dashboard/add-member/family-members']);
  }

  saveAsDraft() {
    // Implement save as draft logic here
    console.log('Save as draft clicked');
  }
}
