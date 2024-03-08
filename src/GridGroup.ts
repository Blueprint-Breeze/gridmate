import type GridMate from './GridMate'
import type GridMateNode from './GridMateNode'

export default class GridMateGroup {
  /** relationship */
  parent: GridMate
  nodes: GridMateNode[] = []

  constructor (parent: GridMate, nodes: GridMateNode[]) {
    this.parent = parent
    this.nodes = nodes
  }
}
