import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  routeId:any
  customerDetails:any;
  detailsList=[
    {
    Id: '1',
    Name: 'Pratibha',
    Type:'Current Account',
    AccountNumber:'31245124411',
    Branch:'Gurgaon,Haryana',
    IFSCCode:'UTIB0001146',
},
{
  Id: '2',
  Name: 'Prabha',
  Type:'Capital Account',
  AccountNumber:'31245124422',
  Branch:'Shahdara,Delhi',
  IFSCCode:'UTIB0001146',
},
{
  Id: '3',
  Name: 'Pooja',
  Type:'Saving Account',
  AccountNumber:'31245124433',
  Branch:'Laxmi Nagar, Delhi',
  IFSCCode:'UTIB0001146',
},
{
  Id: '4',
  Name: 'Nitin',
  Type:'Salary Account',
  AccountNumber:'31245124444',
  Branch:'Gandhi Nagar, Assam',
  IFSCCode:'UTIB0001146',
},
{
  Id: '5',
  Name: 'Mudit',
  Type:'Current Account',
  AccountNumber:'31245124455',
  Branch:'Guwhati,Assam',
  IFSCCode:'UTIB0001146',
},
{
  Id: '6',
  Name: 'Naveen',
  Type:'Capital Account',
  AccountNumber:'31245124466',
  Branch:'Purnea,Bihar',
  IFSCCode:'UTIB0001146',
},
{
  Id: '7',
  Name: 'Vikram',
  Type:'Saving Account',
  AccountNumber:'31245124477',
  Branch:'Patna,Bihar',
  IFSCCode:'UTIB0001146',
},
{
  Id: '8',
  Name: 'Roshan',
  Type:'Salary Account',
  AccountNumber:'31245124488',
  Branch:'Dilshad Colony',
  IFSCCode:'UTIB0001146',
},
{
  Id: '9',
  Name: 'Rounak',
  Type:'Current Account',
  AccountNumber:'31245124499',
  Branch:'Bikaner,Rajasthan',
  IFSCCode:'UTIB0001146',
},
{
  Id: '10',
  Name: 'Mohit',
  Type:'Capital Account',
  AccountNumber:'31245124400',
  Branch:'Ahemdabad,Gujrat',
  IFSCCode:'UTIB0001146',
},
]

  constructor( private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.routeId=this.route.snapshot.params['id'] ;
    this.customerDetails=this.detailsList.filter(x => x.Id == this.routeId);
   }
   backToPage(){
    this.router.navigate(['']);
   }

}
