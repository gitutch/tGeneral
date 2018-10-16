import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RUTAS
import { APP_ROUTES } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';
// TEMPORAL
import { FormsModule } from '@angular/forms';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
