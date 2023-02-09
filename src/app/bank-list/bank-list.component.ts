import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  customerList=[
    {
      Name:'Pratibha',
      id:1
    },
    {
      Name:'Prabha',
      id:2
    },
    {
      Name:'Pooja',
      id:3
    },
    {
      Name:'Nitin',
      id:4
    },
    {
      Name:'Mudit',
      id:5
    },
    {
      Name:'Naveen',
      id:6
    },
    {
      Name:'Vikram',
      id:7
    },
    {
      Name:'Roshan',
      id:8
    },
    {
      Name:'Rounak',
      id:9
    },
    {
      Name:'Mohit',
      id:10
    }
    
  ]

  constructor( private router:Router) { }

  ngOnInit(): void {

  }
  customerLists(id:any){
this.router.navigate(['bank-details/'+ id])
  }
  }


