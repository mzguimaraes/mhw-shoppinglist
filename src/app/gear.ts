export module GearFields {

    export class Defense {
        base: number;
        max: number;
        augmented: number;
    }

    export class Resistances {
        fire: number;
        water: number;
        ice: number;
        thunder: number;
        dragon: number;
    }

    export class Attributes {
    }

    export class Modifiers {
        affinity: number;
    }

    export class Skill {
        id: number;
        level: number;
        description: string;
        modifiers: Modifiers;
        skill: number;
        skillName: string;
    }

    export class ArmorSet {
        id: number;
        name: string;
        rank: string;
        pieces: number[];
        bonus: number;
    }

    export class Assets {
        imageMale: string;
        imageFemale: string;
    }

    export class Item {
        id: number;
        name: string;
        description: string;
        rarity: number;
        carryLimit: number;
        value: number;
    }

    export class Material {
        quantity: number;
        item: Item;
    }

    export class Crafting {
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
