import ItemType from "src/enums/ItemType.enum";
import Game from "./game.model";
import Store from "./store.model";
import User from "./user.model";

export default class Item {
    constructor(
        public id: number,
        public price: number,
        public description: string, 
        public type: ItemType,
        public store: Store, 
        public user: User,
        public games: Game[] 
    ) {}
}