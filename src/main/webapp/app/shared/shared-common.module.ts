import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    PyrySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        PyrySharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title
    ],
    exports: [
        PyrySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class PyrySharedCommonModule {}
