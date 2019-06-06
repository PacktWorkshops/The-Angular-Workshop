import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
   MatAutocompleteModule, MatInputModule,MatFormFieldModule,MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule, 
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule {}
