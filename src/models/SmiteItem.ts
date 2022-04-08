

export default interface SmiteItem {
  ActiveFlag: string
  ChildItemId: number
  DeviceName: string
  Glyph: string
  IconId: number
  ItemDescription: ItemDescription
  ItemId: number
  ItemTier: number
  Price: number
  RestrictedRoles: string
  RootItemId: number
  ShortDesc: string
  StartingItem: boolean
  Type: string
  itemIcon_URL: string
  ret_msg: any
}

export interface ItemDescription {
  Description?: string | null
  Menuitems: Menuitem[]
  SecondaryDescription?: string | null
}

export interface Menuitem {
  Description: string
  Value: string
}