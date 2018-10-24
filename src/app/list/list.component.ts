import { Component, OnInit } from '@angular/core';
import {item} from '../../_modelo/item';
import {Observable} from 'rxjs';
import {AbstractItemsService} from 'src/app/_services/abstract-items.service';
import {MockItemsService} from 'src/app/_services/mock-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ngOnInit() {
  }
  
  items: item[];


  constructor(private service: MockItemsService) {
    this.updateLocalItems();
    }
    updateLocalItems(){
      this.service.getItems().subscribe(items => this.items = items);
    }
    onRemove (item: item){
      this.service.remove(item).subscribe(items => this.items = items);
    }
  }
  
