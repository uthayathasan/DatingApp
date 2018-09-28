import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import {FormsModule} from '@angular/forms';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { appRoutes } from '../routes';
import { MemberDetailResolver } from '../_resolvers/member-detail.resolver';
import { MemberListResolver } from '../_resolvers/member-list.resolver';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberEditResolver } from '../_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from '../_guards/prevent-unsaved-changes.guard';


@NgModule({
    declarations: [
        MemberListComponent,
        MemberCardComponent,
        MemberDetailComponent,
        MemberEditComponent
     ],
     imports: [
        BrowserModule,
        FormsModule,
        TabsModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        NgxGalleryModule
     ],
     providers: [
         MemberDetailResolver,
         MemberListResolver,
         MemberEditResolver,
         PreventUnsavedChanges
     ]
})
export class MembersModule { }
