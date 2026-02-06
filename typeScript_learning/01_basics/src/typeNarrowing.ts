// Narrowing: is when the compiler or developer refines the type of a variable to be more specific, often based on checks

function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
} 

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving Masala chai`
}

function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return `small cutting chai...`
    }
    if(size === 'medium' || size === 'large'){
        return `make extra chai...`
    }
    return `chai order ${size}`
}


class KulhadChai{
    serve(){
        return `Serving Kulhad Chai.`
    }
}
class Cutting{
    serve(){
        return `Serving Cutting Chai.`
    }
}

function serve(chai: KulhadChai | Cutting){
    if (chai instanceof KulhadChai){
        return chai.serve()
    }
}


type ChaiOrder = {
    type: string
    suger: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === 'object' && 
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.suger === 'number'
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.suger} sugar`
    }
    return `Serving custom chai: ${item}`
}


type MasalaChai = {type: 'masala'; spicelevel: number}
type GingerChai = {type: 'ginger'; amount: number}
type ElaichiChai = {type: 'elaichi'; aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch (order.type){
        case 'masala':
            return 'Masala Chai'
            break;
        case 'ginger':
            return 'Ginger Chai'
            break;
        case 'elaichi':
            return 'Elaichi Chai'
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if('spicelevel' in order){
        return `it is Masala chai`
    }
}