import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { MainComponent } from './components/main/main.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'app-main',
    component: MainComponent,
  },
  {
    path: 'chat/:id',
    component: ChatComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
