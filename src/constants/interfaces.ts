export interface Todo {
    id: number,
    text: string,
}
export interface Lists {
    id: number,
    Index: number,
    context: string,
}
export type LIstsProp = Lists[][]
export type LIstItemPop = Lists[]