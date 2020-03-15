import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { RouterModule, Routes } from '@angular/router';
import { reducers } from '../../store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from 'src/app/store/effects/users.effects';
import { ApplicationPipesModule } from '../pipes.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers.users ),
    EffectsModule.forFeature([UsersEffects]),
    RouterModule.forChild([
      {path: '', component: UserListComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    ApplicationPipesModule
  ]
})
export class UsersModule { }
