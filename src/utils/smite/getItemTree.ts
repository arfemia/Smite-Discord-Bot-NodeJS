import ALL_ITEMS from "../../config/smite/items";
import SmiteItem from "../../models/SmiteItem";

export default function getItemTree(item: SmiteItem) {
  const { RootItemId, ItemId, ItemTier } = item
  const items = []

  //items.push(item);
  items.push(...ALL_ITEMS.filter(i => i.RootItemId === RootItemId));
  return items.filter(i => !i.DeviceName.includes('(old)'))

  

}