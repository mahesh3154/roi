import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/api';

@Component({
    templateUrl: './addPos.html',
    styleUrls: ['./settings.component.css']

})
export class AddPos {
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
    ngOnInit() {
    }
}