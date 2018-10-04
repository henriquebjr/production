import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'product-edit.html'
})
export class ProductEdit {
    product = {};

    constructor(params: NavParams) {
        this.product = params.data.product;
    }

    save() {
        console.log(this.product);
    }
}