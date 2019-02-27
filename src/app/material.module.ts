import { NgModule } from '@angular/core';
import {MatButtonModule,  MatSidenavModule, MatSelectModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatFormFieldModule,MatInputModule} from '@angular/material'
import {MatDatepickerModule,
    MatNativeDateModule
    ,MatCheckboxModule
    ,MatToolbarModule
    ,MatListModule
    ,MatTabsModule
    ,MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

}  from '@angular/material'
@NgModule({

    imports:[MatButtonModule,
        MatIconModule
        ,MatFormFieldModule
        ,MatInputModule
        ,MatDatepickerModule
        ,MatNativeDateModule
        ,MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
],

    exports:[MatButtonModule
        ,MatIconModule
        ,MatFormFieldModule
        ,MatInputModule
        ,MatDatepickerModule
        ,MatNativeDateModule
        ,MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
    ]

})
export class MaterialModule {}