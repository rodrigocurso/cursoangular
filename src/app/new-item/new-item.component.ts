import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { item } from 'src/_modelo/item';
import {MockItemsService} from "../_services/mock-items.service";
import {Router} from  "@angular/router";
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm: FormGroup;

  constructor(private builder: FormBuilder,
              private service: MockItemsService,
              private router: Router) { 
      this.newItemForm = this.builder.group(new item(""))
  };

  ngOnInit() {
  }
  onSubmit(){
    this.service.addItem(this.newItemForm.value).subscribe(items=> {
      this.router.navigateByUrl("/items");});
    //console.log(this.newItemForm.value);
    
  }
}
