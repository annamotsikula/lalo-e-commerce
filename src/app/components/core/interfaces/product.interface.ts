export interface ICard {
    title: string,
    price? : number | null,
    src?: string
  }
  export interface IFilter {
    title: string,
    items: string[]
  }