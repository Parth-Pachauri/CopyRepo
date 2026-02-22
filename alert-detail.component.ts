import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertData } from '../../models/alert.model';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './alert-detail.component.html',
  styleUrl: './alert-detail.component.scss'
})
export class AlertDetailComponent implements OnInit {
  
  alertId: string = '';
  alert: AlertData | null = null;
  isLoading = false;
  error: string | null = null;
  
  // Tabs
  activeTab: 'overview' | 'disambiguation' | 'summary' = 'disambiguation';
  
  // Sub-tabs
  activeSubTab: 'main-entity' | 'transaction-parties' = 'main-entity';
  
  // Form data for disambiguation
  mainEntityParent = 'Main  Party - 1';
  selectedEntityId = 'P2E_ID_SELECTEDID';
  flagPartyPairQuality = false;
  
  entities = [
    { name: 'Lorem ipsum', identityType: 'LEI', identity: 'FRAB549300123456790' },
    { name: 'ac volutpat', identityType: 'FENERGO', identity: '' },
    { name: 'tellus arcu', identityType: 'CRDS', identity: '' },
    { name: 'rhoncus tellus', identityType: 'RMPM', identity: '' },
    { name: 'interdum faucibus.', identityType: 'New', identity: '' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // Get alert ID from route parameter
    this.route.params.subscribe(params => {
      this.alertId = params['id'];
      this.loadAlertDetails();
    });
  }

  loadAlertDetails(): void {
    this.isLoading = true;
    this.error = null;

    this.alertService.getAlertById(this.alertId).subscribe({
      next: (alert) => {
        this.alert = alert;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading alert details:', err);
        this.error = 'Failed to load alert details';
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/alert-queue']);
  }

  goToPrevious(): void {
    // Navigate to previous alert
    // You'd implement logic to find previous alert ID
    console.log('Previous alert');
  }

  goToNext(): void {
    // Navigate to next alert
    // You'd implement logic to find next alert ID
    console.log('Next alert');
  }

  setActiveTab(tab: 'overview' | 'disambiguation' | 'summary'): void {
    this.activeTab = tab;
  }

  setActiveSubTab(tab: 'main-entity' | 'transaction-parties'): void {
    this.activeSubTab = tab;
  }
}
