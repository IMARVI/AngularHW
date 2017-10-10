import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderTablePipe } from './order-table.pipe';
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes: Routes = [
  {path: 'detalle', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderTablePipe,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
