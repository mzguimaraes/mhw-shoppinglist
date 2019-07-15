declare module GearFields {

    export interface Defense {
        base: number;
        max: number;
        augmented: number;
    }

    export interface Resistances {
        fire: number;
        water: number;
        ice: number;
        thunder: number;
        dragon: number;
    }

    export interface Attributes {
    }

    export interface Modifiers {
        affinity: number;
    }

    export interface Skill {
        id: number;
        level: number;
        description: string;
        modifiers: Modifiers;
        skill: number;
        skillName: string;
    }

    export interface ArmorSet {
        id: number;
        name: string;
        rank: string;
        pieces: number[];
        bonus: number;
    }

    export interface Assets {
        imageMale: string;
        imageFemale: string;
    }

    export interface Item {
        id: number;
        name: string;
        description: string;
        rarity: number;
        carryLimit: number;
        value: number;
    }

    export interface Material {
        quantity: number;
        item: Item;
    }

    export interface Crafting {
        materials: Material[];
    }

}

export class Gear {
    id: number;
    name: string;
    type: string;
    rank: string;
    rarity: number;
    defense: GearFields.Defense;
    resistances: GearFields.Resistances;
    attributes: GearFields.Attributes;
    slots: any[];
    skills: GearFields.Skill[];
    armorSet: GearFields.ArmorSet;
    assets: GearFields.Assets;
    crafting: GearFields.Crafting;
}
