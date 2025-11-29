import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-4-review-and-submit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './step-4-review-and-submit.component.html',
  styleUrls: ['./step-4-review-and-submit.component.scss']
})
export class Step4ReviewAndSubmitComponent {

  constructor(private router: Router) {}

  previousStep() {
    this.router.navigate(['/admin/dashboard/add-member/family-members']);
  }

  submit() {
    // Implement submit logic here
    console.log('Submit clicked');
  }

  saveAsDraft() {
    // Implement save as draft logic here
    console.log('Save as draft clicked');
  }
}
