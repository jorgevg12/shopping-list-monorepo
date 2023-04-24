import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, ListComponent],
  declarations: [],
  exports: [ListComponent],
})
export class CommonUiModule {}
