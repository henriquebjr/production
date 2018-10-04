import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Product from '../view/product-view';
import { ProductEdit } from '../edit/product-edit';

@Component({
    templateUrl: 'product-list.html'
})
export class ProductList {
    products = [];

    constructor(public nav: NavController) {
        this.products = [
            {
                'id': 1,
                'name': 'Chapa 3mm',
                'description': 'Chapa padrão de aço inoxidável.'
            },
            {
                'id': 2,
                'name': 'Chapa 9mm',
                'description': 'Chapa de espessura média.'
            }
        ];
    }

    openNavDetailsPage(product) {
        this.nav.push(Product, { product: product });
    }

    openProductCreationPage() {
        this.nav.push(ProductEdit, { product: {} });
    }
}