import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
// import { IndexComponent } from 'src/app/components/index/index.component';
import { CardModule } from 'primeng/card';
// import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';




@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    InputTextModule,
    CardModule,
    TableModule,
    MultiSelectModule
  ]
})
export class SharedModuleModule { }
