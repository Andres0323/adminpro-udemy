
import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebardComponent } from './sidebard/sidebard.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebardComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebardComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})

export class SharedModule {}