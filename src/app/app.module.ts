import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderTablePipe } from './order-table.pipe';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detalle/:alumno', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderTablePipe,
    DetalleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
