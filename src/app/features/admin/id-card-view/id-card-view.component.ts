import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-id-card-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './id-card-view.component.html',
  styleUrls: ['./id-card-view.component.scss']
})
export class IdCardViewComponent implements OnInit {

  memberId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.memberId = this.route.snapshot.paramMap.get('id');
  }
}
