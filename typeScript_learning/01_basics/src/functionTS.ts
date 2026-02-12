function makeChai(type: string, cups: number){   // Parameter type
    console.log(`Making ${cups} cups of ${makeChai}`)
}
makeChai('Masala', 4)

function getChaiPrice():number{  // return type define
    return 25
}

function makeOrder(order: string){
    if(!order) return null
    return order
}

function logChai():void{  // nothing is return
    console.log('Chai is ready')
}

function orderChai(type?: string){  // not requere this parameter
    console.log('hello')
}


function createChai(order:{
    type: string;
    suger: number;
    size: 'small' | 'large'
}): number{
    return 4
}
