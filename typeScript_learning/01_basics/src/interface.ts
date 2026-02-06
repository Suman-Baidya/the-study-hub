//signature
type ChaiOrder = {
    type: string;
    suger: number;
    strong: boolean;
}
function makeChai(order: ChaiOrder){
    console.log(order)
}
function serveChai(order: ChaiOrder){
    console.log(order)
}


// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

//or
interface TeaRecipe {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface CupSize { size: "small" | "large" }

class Chai implements CupSize{
    size: "small" | "large" = 'large'
}


//unioun - options
type TeaType = 'masala' | 'ginger' | 'lemon'

function orderChai(t: TeaType):string{
    console.log(t)
    return t
}


type BaseChai = {teaLevel: number};
type Extra = {masala: number}

type MasalaTea = BaseChai & Extra

const cup: MasalaTea = {
    teaLevel: 2,
    masala: 1
}


type User = {
    username: string;
    bio?: string;
}

const u1: User = {username: 'Suman'}
const u2: User = {username: 'Suman', bio: 'hello...'}


type Config = {
    readonly appName: string;
    version: number;
}

const cfg:Config = {
    appName: 'MasterJi',
    version: 1
}

// cfg.appName = 'Chaicode' // Note allow because this property set as readonly