import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

interface ContinentsNestedNode {
  name: string;
  children?: ContinentsNestedNode[];
}


const TREE_DATA: ContinentsNestedNode[] = [
  {
    name: 'Africa',
    children: [
      {
        name: 'Nigeria',
        children: [
          { name: 'Lagos' },
        ]
      }
    ]
  },
  {
    name: 'Asia',
    children: [
      {
        name: 'Japan',
        children: [
          { name: 'Tokyo' },
        ]
      }
    ]
  },

  {
    name: 'Europe',
    children: [
      {
        name: 'France',
        children: [
          { name: 'Paris' },
        ]
      }
    ]
  },

  {
    name: 'North America',
    children: [
      {
        name: 'USA',
        children: [
          { name: 'Washington DC' },
        ]
      }
    ]
  },

  {
    name: 'Oceania'
  },
  {
    name: 'South America'
  },

];

@Component({
  selector: 'app-nested-tree',
  templateUrl: './nested-tree.component.html',
  styleUrls: ['./nested-tree.component.css']
})
export class NestedTreeComponent {
  treeControl = new NestedTreeControl<ContinentsNestedNode> (node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ContinentsNestedNode) => !!node.children && node.children.length > 0;
  constructor() { }


}
