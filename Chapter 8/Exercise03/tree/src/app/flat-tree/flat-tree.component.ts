import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';


const TREE_DATA: ContinentsFlatNode[] = [
  { name: "Africa", level: 0, expandable: true },
  { name: "Nigeria", level: 1, expandable: true },
  { name: "Lagos", level: 2,expandable: false },
  { name: "Asia", level: 0,expandable: true },
  { name: "Japan", level: 1,expandable: true },
  { name: "Tokyo", level: 2,expandable: false },
  { name: "Europe", level: 0,expandable: true },
  { name: "France", level: 1,expandable: true },
  { name: "Paris", level: 2,expandable: false },
  { name: "North America", level: 0,expandable: true },
  { name: "USA", level: 1,expandable: true },
  { name: "Washington DC", level: 2,expandable: false },
  { name: "Oceania", level: 0,expandable: false },
  { name: "South America", level: 0,expandable: false }

];

/** Flat node with expandable and level information */
interface ContinentsFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}
@Component({
  selector: 'app-flat-tree',
  templateUrl: './flat-tree.component.html',
  styleUrls: ['./flat-tree.component.css']
})
export class FlatTreeComponent  {

  treeControl = new FlatTreeControl<ContinentsFlatNode>(
    node => node.level, node => node.expandable);

dataSource = new ArrayDataSource(TREE_DATA);

hasChild = (_: number, node: ContinentsFlatNode) => node.expandable;

getParentNode(node: ContinentsFlatNode) {
  const nodeIndex = TREE_DATA.indexOf(node);

  for (let i = nodeIndex - 1; i >= 0; i--) {
    if (TREE_DATA[i].level === node.level - 1) {
      return TREE_DATA[i];
    }
  }

  return null;
}

shouldRender(node: ContinentsFlatNode) {
  const parent = this.getParentNode(node);
  return !parent || parent.isExpanded;
}

}

