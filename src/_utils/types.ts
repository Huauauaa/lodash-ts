export interface SortItem {
  val: number
  index: number
}

export type GetNumber<T> = (obj: T) => number
