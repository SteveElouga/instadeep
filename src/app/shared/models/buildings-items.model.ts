export interface BuildingsItemsModel{
  id: number
  image: string,
  title: string,
  more: string,
  size: {
    width: string | null,
    height: string | null
  }
}
