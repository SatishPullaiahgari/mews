import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { debounceTime, switchMap } from 'rxjs/operators';

declare var google: any;

@Component({
  selector: 'app-step-1-personal-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  templateUrl: './step-1-personal-details.component.html',
  styleUrls: ['./step-1-personal-details.component.scss']
})
export class Step1PersonalDetailsComponent implements OnInit {
  personalDetailsForm: FormGroup;
  addressSuggestions: any[] = [];
  private autocompleteService: any;
  private placesService: any;

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({
      village: [''],
      mandal: [{ value: '', disabled: true }],
      district: [{ value: 'Hyderabad', disabled: true }],
      pincode: ['']
    });
  }

  ngOnInit(): void {
    this.loadGoogleMapsScript();
    this.personalDetailsForm.get('village')?.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.getPlacePredictions(value))
      )
      .subscribe(predictions => {
        this.addressSuggestions = predictions;
      });
  }

  private loadGoogleMapsScript(): void {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // IMPORTANT: Replace with your actual API key
    if (document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      this.initGoogleMapsServices();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.initGoogleMapsServices();
    };
    document.head.appendChild(script);
  }

  private initGoogleMapsServices(): void {
    if (google && google.maps && google.maps.places) {
      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
    }
  }

  private getPlacePredictions(input: string): Promise<any[]> {
    return new Promise((resolve) => {
      if (!this.autocompleteService || !input) {
        resolve([]);
        return;
      }

      this.autocompleteService.getPlacePredictions({ input, componentRestrictions: { country: 'in' } }, (predictions: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
          resolve(predictions);
        } else {
          resolve([]);
        }
      });
    });
  }

  onAddressSelected(prediction: any): void {
    this.placesService.getDetails({ placeId: prediction.place_id }, (place: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place) {
        const addressComponents = place.address_components;
        const village = addressComponents.find((c: any) => c.types.includes('locality'))?.long_name || '';
        const mandal = addressComponents.find((c: any) => c.types.includes('administrative_area_level_2'))?.long_name || '';
        const district = addressComponents.find((c: any) => c.types.includes('administrative_area_level_1'))?.long_name || '';
        const pincode = addressComponents.find((c: any) => c.types.includes('postal_code'))?.long_name || '';

        this.personalDetailsForm.patchValue({
          village,
          mandal,
          district,
          pincode
        });
      }
    });
  }
}
