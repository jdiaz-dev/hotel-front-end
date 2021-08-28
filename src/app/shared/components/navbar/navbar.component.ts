import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Menu } from './menu.interface';
import { MENU } from './menu';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  treeControl = new NestedTreeControl<Menu>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Menu>();
  menu!: Menu[]

  constructor() { }

  ngOnInit(): void {
    this.menu = MENU
    this.dataSource.data = this.menu
  }
  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;

}
