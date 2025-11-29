import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { IdCardViewComponent } from './id-card-view/id-card-view.component';
import { PendingApprovalsComponent } from './pending-approvals/pending-approvals.component';
import { DonationReportsComponent } from './donation-reports/donation-reports.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

export const ADMIN_ROUTES: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    data: { renderMode: 'server' }
  },

  {
    path: '',
    component: DashboardComponent,
    data: { renderMode: 'server' },   // ⬅️ disable prerender for entire admin
    children: [
      { path: 'dashboard', component: DashboardHomeComponent },
      { path: 'add-member', component: AddMemberComponent },
      { path: 'all-members', component: AllMembersComponent },
      { path: 'pending-approvals', component: PendingApprovalsComponent },

      {
        path: 'id-card-view/:id',
        component: IdCardViewComponent,
        data: { renderMode: 'server' }   // ⬅️ critical fix
      },

      { path: 'donation-reports', component: DonationReportsComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full',
    data: { renderMode: 'server' }
  }
];
