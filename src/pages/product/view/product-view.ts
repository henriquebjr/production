import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'product-view.html'
})
export default class ProductView {
    product;

    constructor(params: NavParams) {
        this.product = params.data.product;
    }
}