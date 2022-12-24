export default class User{
    constructor(
        public id: number,
        public email:string, 
        public confirmed: boolean,
        public image: string | null = null
    ) {}
}