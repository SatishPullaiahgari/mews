import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-3-family-members',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './step-3-family-members.component.html',
  styleUrls: ['./step-3-family-members.component.scss']
})
export class Step3FamilyMembersComponent {
  familyMembers: any[] = [];

  constructor(private router: Router) {}

  addFamilyMember() {
    if (this.familyMembers.length < 7) {
      this.familyMembers.push({});
    }
  }

  removeFamilyMember(index: number) {
    this.familyMembers.splice(index, 1);
  }

  previousStep() {
    this.router.navigate(['/admin/dashboard/add-member/documents']);
  }

  nextStep() {
    this.router.navigate(['/admin/dashboard/add-member/review-and-submit']);
  }

  saveAsDraft() {
    // Implement save as draft logic here
    console.log('Save as draft clicked');
  }
}
