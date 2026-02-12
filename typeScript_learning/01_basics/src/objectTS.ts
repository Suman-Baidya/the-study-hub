const chai = {
    name: 'masala chai',
    price: 25,
    isHot: true
}

// or


let tea:{                    // type define
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger tea",
    price: 25,
    isHot: false
}


type Tea = {                    // type define
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: 'Adrak chai',
    price: 34,
    ingredients: ['ginger', 'suger']
}


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabics"}
const chaiBrew:Brew = coffee




type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[],
    address: Address
}

const mobieOrder: Order = {
    id: '1234',
    items: [{name: 'moto', quantity: 10}],
    address: {street: 'sehana', pin: 743234}
}



type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

// Partial use. not needed all property value.
const updateChai = (updates: Partial<Chai>) => {
    console.log('updating chai with ', updates)
}
updateChai({price: 20, isHot: false})  // not all value needed
updateChai({})  // empty object can pass in this Partial value.



// Optional value
type ChaiOrder = {
    name?: string;
    quantity?: number;
}
const placeOrder = (order: Required<ChaiOrder>) =>{
    console.log(order)
}
placeOrder({name: 'Masala Chai', quantity: 50})