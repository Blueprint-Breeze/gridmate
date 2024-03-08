import Rectangle, { type RectangleShapeOption } from '@/shapes/Rectangle'
import type GridMate from '../GridMate'
import type GridMateGroup from '../GridGroup'

export interface SerializedGridMateNode<C = any> extends GridMateNodePosition {
  content: C
}

export type GridMateNodePosition = RectangleShapeOption

export default class GridMateNode extends Rectangle {
  isSpace: boolean = false
  isNode: boolean = false

  /** relationship */
  grid: GridMate
  group?: GridMateGroup

  constructor (grid: GridMate, position: GridMateNodePosition) {
    super(position)
    this.grid = grid
  }

  beAddedGroup (group: GridMateGroup): GridMateNode {
    this.group = group
    return this
  }
}
