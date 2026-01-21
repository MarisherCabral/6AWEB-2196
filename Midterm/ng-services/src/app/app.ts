import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from './services/employee';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  employees: any[] = [];
  products: any[] = [];

  constructor(
    private employeeService: Employee,
    private productService: Product
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productService.getProducts();
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
