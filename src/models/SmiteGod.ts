export default interface SmiteGod {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  AbilityId1: number;
  AbilityId2: number;
  AbilityId3: number;
  AbilityId4: number;
  AbilityId5: number;
  Ability_1: SmiteAbility;
  Ability_2: SmiteAbility;
  Ability_3: SmiteAbility;
  Ability_4: SmiteAbility;
  Ability_5: SmiteAbility;
  AttackSpeed: number;
  AttackSpeedPerLevel: number;
  AutoBanned: string;
  Cons: string;
  HP5PerLevel: number;
  Health: number;
  HealthPerFive: number;
  HealthPerLevel: number;
  Lore: string;
  MP5PerLevel: number;
  MagicProtection: number;
  MagicProtectionPerLevel: number;
  MagicalPower: number;
  MagicalPowerPerLevel: number;
  Mana: number;
  ManaPerFive: number;
  ManaPerLevel: number;
  Name: string;
  OnFreeRotation: string;
  Pantheon: string;
  PhysicalPower: number;
  PhysicalPowerPerLevel: number;
  PhysicalProtection: number;
  PhysicalProtectionPerLevel: number;
  Pros: string;
  Roles: string;
  Speed: number;
  Title: string;
  Type: string;
  abilityDescription1: Description;
  abilityDescription2: Description;
  abilityDescription3: Description;
  abilityDescription4: Description;
  abilityDescription5: Description;
  basicAttack: Description;
  godAbility1_URL: string;
  godAbility2_URL: string;
  godAbility3_URL: string;
  godAbility4_URL: string;
  godAbility5_URL: string;
  godCard_URL: string;
  godIcon_URL: string;
  id: number;
  latestGod: string;
  ret_msg?: null;
}
export interface SmiteAbility {
  Description: Description;
  Id: number;
  Summary: string;
  URL: string;
}
export interface Description {
  itemDescription: ItemDescription;
}
export interface ItemDescription {
  cooldown: string;
  cost: string;
  description: string;
  menuitems?: (MenuOrRankEntity)[] | null;
  rankitems?: (MenuOrRankEntity | null)[] | null;
}
export interface MenuOrRankEntity {
  description: string;
  value: string;
}






