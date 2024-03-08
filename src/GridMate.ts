import type GridMateNode from './GridMateNode'
import type GridMateGroup from './GridGroup'
import { type SerializedGridMateNode } from './GridMateNode'

export interface NewGirdMateOptions {
  minRows?: number
  maxRows?: number
  minCols?: number
  maxCols?: number
}

export type GridMateScale = Pick<
GridMate,
'minRows' | 'maxRows' | 'minCols' | 'maxCols'
>

export default class GridMate {
  /** config */
  public readonly minRows: number
  public readonly maxRows?: number
  public readonly minCols: number
  public readonly maxCols?: number

  /** state */
  __nodes: GridMateNode[] = []
  __groups: GridMateGroup[] = []
  __layout: GridMateNode[][] = []

  constructor (options: NewGirdMateOptions) {
    this.minRows = options.minRows ?? 0
    this.maxRows = options.maxRows
    this.minCols = options.minCols ?? 0
    this.maxCols = options.maxCols
  }

  load (nodes: SerializedGridMateNode[]): GridMate {
    return this
  }

  verify (): GridMate {
    return this
  }

  __loadNoVerify (nodes: SerializedGridMateNode[]): GridMate {
    return this
  }

  updateScale (updater: (scale: GridMateScale) => GridMateScale): GridMate {
    updater({
      minRows: this.minRows,
      maxRows: this.maxRows,
      minCols: this.minCols,
      maxCols: this.maxCols
    })
    return this
  }
}
