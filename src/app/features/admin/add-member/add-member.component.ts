import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Step1PersonalDetailsComponent } from './step-1-personal-details/step-1-personal-details.component';
import { Step2DocumentsComponent } from './step-2-documents/step-2-documents.component';
import { Step3FamilyMembersComponent } from './step-3-family-members/step-3-family-members.component';
import { Step4ReviewAndSubmitComponent } from './step-4-review-and-submit/step-4-review-and-submit.component';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    Step1PersonalDetailsComponent,
    Step2DocumentsComponent,
    Step3FamilyMembersComponent,
    Step4ReviewAndSubmitComponent
  ],
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent {
  personalDetailsForm: FormGroup;
  documentsForm: FormGroup;
  familyMembersForm: FormGroup;
  reviewAndSubmitForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({});
    this.documentsForm = this.fb.group({});
    this.familyMembersForm = this.fb.group({});
    this.reviewAndSubmitForm = this.fb.group({});
  }
}
