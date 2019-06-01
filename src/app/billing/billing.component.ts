import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/api';
import { BillingService } from '../services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billings: any = []
  expenses: any = []
  expensesType: any;
  amountByCash = 0;
  amountByCard = 0;
  amountByBank = 0;
  totalAmount = 0;
  expense: any = {};
  expensesamountByCash = 0;
  expensesamountByCard = 0;
  expensestotalAmount = 0;
  colsBilling: any;
  colsExpenses: any;
  newExpenses: boolean;
  displayDialog: boolean;

  constructor(private billingService: BillingService, public dialogService: DialogService) { }
  ngOnInit() {
    this.expensesType = [
      { icon: "far fa-money-bill-alt", type: "cash" },
      { icon: "far fa-credit-card", type: "card" },
      { icon: "fas fa-university", type: "net banking" }
    ]
    this.colsBilling = [
      { field: 'invoice_date', header: 'Invoice Date' },
      { field: 'patientname', header: 'Patient' },
      { field: 'payment_method', header: 'Type' },
      { field: 'amount', header: 'Amount' }
    ];

    this.colsExpenses = [
      { field: 'invoice_date', header: 'Invoice Date' },
      { field: 'vendor', header: 'vendor' },
      { field: 'payment_method', header: 'Type' },
      { field: 'amount', header: 'Amount' }
    ];

    this.billingService.getAllBillings().subscribe(
      suc => {
        this.billings = suc;
        for (var i in this.billings) {
          if (this.billings[i].payment_method === "cash") {
            this.amountByCash += this.billings[i].amount
          }
          if (this.billings[i].payment_method === "card") {
            this.amountByCard += this.billings[i].amount
          }
          if (this.billings.length != 0) {
            this.totalAmount += this.billings[i].amount
          }

        }
      },
      err => {
        console.log(err);
      }
    );

    this.billingService.getAllExpenses().subscribe(
      suc => {
    
          this.expenses = suc;
      
        for (var i in this.expenses) {
          if (this.expenses.length !== 0) {
             this.expensestotalAmount += this.expenses[i].amount
          }
          if (this.expenses[i].payment_method === "cash") {
            this.expensesamountByCash += this.expenses[i].amount
          }
          if (this.expenses[i].payment_method === "card") {
            console.log('carddd')
            this.expensesamountByCard += this.expenses[i].amount
          }

        }
      },
      err => {
        console.log(err);
      }
    );
  }
  showDialog() {
    this.displayDialog = true;
    this.expense = {};
    this.newExpenses = true;

  }
  save(expense) {
expense.payment_method = expense.payment_method.type;

     this.billingService.addExpenses(expense).subscribe(
       suc => {
         this.expenses.push(expense);
 
       },
       err => {
         console.log(err);
       }
     );
 
     this.displayDialog = false;
  }

}
