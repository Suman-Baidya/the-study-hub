// const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];

// const values = coding.forEach(item=> console.log(item))
// console.log(values) // undefined, because forEach does not return anything


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter(num=>num > 4)

const newNums = [];

myNums.forEach((num)=>{
  if(num > 4) {
    newNums.push(num);
  }
})

// console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', author: 'Author One', rating: 4.5, published: 2010, edition: 2024 },
    { title: 'Book Two', author: 'Author Two', rating: 3.8, published: 2015, edition: 2023 },
    { title: 'Book Three', author: 'Author Three', rating: 4.2, published: 2005, edition: 2022 },
    { title: 'Book Four', author: 'Author Four', rating: 4.9, published: 2020, edition: 2024 },
    { title: 'Book Five', author: 'Author Five', rating: 2.9, published: 2000, edition: 2021 },
    { title: 'Book Six', author: 'Author Six', rating: 4.0, published: 2018, edition: 2023 },
    { title: 'Book Seven', author: 'Author Seven', rating: 3.5, published: 2012, edition: 2022 },
    { title: 'Book Eight', author: 'Author Eight', rating: 4.7, published: 2019, edition: 2024 },
];

let userBooks = books.filter( bk => bk.edition === 2024 );

userBooks = books.filter(bk => bk.rating > 4 && bk.published >= 2020)

// console.log(userBooks);


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums2 = myNumers.map(num => num + 10)
const newNums2 = myNumers
                    .map(num => num * 10)
                    .map(num => num + 1)
                    .filter(num => num > 50)

// console.log(newNums2)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                          reduce
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const mynumss = [1,2,3]

const totalNum = mynumss.reduce((acc, cur)=>{
    // console.log(acc, cur)
    
    return acc + cur
}, 4) 

// console.log(totalNum)


const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile course',
        price: 29999
    },
    {
        itemName: 'react course',
        price: 4999
    }
]

const totalPrice = shoppingCart.reduce((ace, item)=> ace + item.price, 0);

console.log(totalPrice)

