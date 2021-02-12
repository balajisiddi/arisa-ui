import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: any;
  public prodLength: any=0;
	constructor(private apiService: ApiService) { }
	ngOnInit() {
    this.apiService.get().subscribe((data: any)=>{
      console.log(data.length);
      this.prodLength=data.length;
      this.products= data;
    });
  }
}
