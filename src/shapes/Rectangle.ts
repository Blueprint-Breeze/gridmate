import { EventEmitter } from 'eventemitter3'

export interface RectangleShapeOption {
  x: number
  y: number
  w: number
  h: number
}

export default class Rectangle {
  /** base */
  x: number
  y: number
  w: number
  h: number

  /** position */
  get lt (): [number, number] {
    return [this.x, this.y]
  }

  get rt (): [number, number] {
    return [this.x + this.w, this.y]
  }

  get lb (): [number, number] {
    return [this.x, this.y + this.h]
  }

  get rb (): [number, number] {
    return [this.x + this.w, this.y + this.h]
  }

  /** event emitter */
  eventEmitter: EventEmitter = new EventEmitter()

  /** constructor */
  constructor (position: RectangleShapeOption) {
    this.x = position.x
    this.y = position.y
    this.w = position.w
    this.h = position.h
  }

  /** move */
  move (x: number, y: number): Rectangle {
    this.x += x
    this.y += y

    this.__change()
    this.__positionChange()

    return this
  }

  moveTo (x: number, y: number): Rectangle {
    this.x = x
    this.y = y

    this.__change()
    this.__positionChange()

    return this
  }

  /** resize */
  resize (w: number, h: number): Rectangle {
    this.w += w
    this.h += h

    this.__change()
    this.__sizeChange()

    return this
  }

  resizeTo (w: number, h: number): Rectangle {
    this.w = w
    this.h = h

    this.__change()
    this.__sizeChange()

    return this
  }

  /** collision detection */
  static collision (
    rectangle1: RectangleShapeOption,
    rectangle2: RectangleShapeOption
  ): boolean {

  }

  /** subscribe */
  private __change (): void {
    this.eventEmitter.emit(this.onChange.name, this)
  }

  onChange (subscribe: (rectangle: Rectangle) => void): () => void {
    const eventName = this.onChange.name
    this.eventEmitter.on(eventName, subscribe)
    return () => {
      this.eventEmitter.removeListener(eventName, subscribe)
    }
  }

  private __sizeChange (): void {
    this.eventEmitter.emit(this.onSizeChange.name, this)
  }

  onSizeChange (subscribe: (rectangle: Rectangle) => void): () => void {
    const eventName = this.onSizeChange.name
    this.eventEmitter.on(eventName, subscribe)
    return () => {
      this.eventEmitter.removeListener(eventName, subscribe)
    }
  }

  private __positionChange (): void {
    this.eventEmitter.emit(this.onPositionChange.name, this)
  }

  onPositionChange (subscribe: (rectangle: Rectangle) => void): () => void {
    const eventName = this.onPositionChange.name
    this.eventEmitter.on(eventName, subscribe)
    return () => {
      this.eventEmitter.removeListener(eventName, subscribe)
    }
  }

  /** other */
  clone (): Rectangle {
    return new Rectangle(this)
  }

  serialize (): RectangleShapeOption {
    return {
      x: this.x,
      y: this.y,
      w: this.w,
      h: this.h
    }
  }

  toString (): string {
    return `Rectangle: {x: ${this.x}, y: ${this.y}, w: ${this.w}, h: ${this.h}}`
  }
}
