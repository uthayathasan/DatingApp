import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

import { MemberListComponent } from './member-list/member-list.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { appRoutes } from '../routes';
import { MemberDetailResolver } from '../_resolvers/member-detail.resolver';
import { MemberListResolver } from '../_resolvers/member-list.resolver';


@NgModule({
    declarations: [
        MemberListComponent,
        MemberCardComponent,
        MemberDetailComponent
     ],
     imports: [
        BrowserModule,
        TabsModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        NgxGalleryModule
     ],
     providers: [
         MemberDetailResolver,
         MemberListResolver
     ]
})
export class MembersModule { }
