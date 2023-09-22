import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmacaoDialogComponent } from './components/confirmacao-dialog/confirmacao-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfirmacaoDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmacaoDialogComponent
  ]
})
export class SharedModule { }
