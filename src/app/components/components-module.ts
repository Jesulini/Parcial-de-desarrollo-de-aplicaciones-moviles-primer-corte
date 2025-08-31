// src/app/components/components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Componentes
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { CardComponent } from './card/card.component';
import { PrincipalNewsComponent } from './principal-news/principal-news.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ModalComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ModalComponent,
    UserFormComponent
  ]
})
export class ComponentsModule {}
