import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { AuthEffects } from './effects/auth.effects';
import { FacilityEffects } from './effects/facility.effects';
import { UsersEffects } from './effects/users.effects';
import { InspectionsEffects } from './effects/inspections.effects';
import { UIEffects } from './effects/ui.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InspectionEffects } from './effects/inspection.effects';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, {}), 
        EffectsModule.forRoot([AuthEffects, FacilityEffects, UsersEffects, InspectionsEffects, InspectionEffects, UIEffects]),
        environment.production ? [] : StoreDevtoolsModule.instrument()
    ],
    exports: [
        StoreModule
    ]
})
export class StorageModule {}