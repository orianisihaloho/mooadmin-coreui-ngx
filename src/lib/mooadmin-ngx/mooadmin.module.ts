import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MooVformComponent } from './moo-vform/moo-vform.component';
import { MooFieldComponent } from './moo-field/moo-field.component';
import { MooVlistComponent } from './moo-vlist/moo-vlist.component';
import { MooVtableComponent } from './moo-vtable/moo-vtable.component';
import { MooVchartComponent } from './moo-vchart/moo-vchart.component';
import { MooFieldStringComponent } from './moo-field/moo-field-string.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        MooVformComponent,
        MooFieldComponent,
        MooVlistComponent,
        MooVtableComponent,
        MooVchartComponent,
        MooFieldStringComponent
    ],
    exports: [
        HttpClientModule,
        HttpModule,
        MooVformComponent,
        MooFieldComponent,
        MooVlistComponent,
        MooVtableComponent,
        MooVchartComponent
    ]
})
export class MooadminModule {}
