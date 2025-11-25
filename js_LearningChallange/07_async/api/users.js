const body = document.querySelector("body");
body.style.backgroundColor = "#212121";
body.style.color = "#fff";
body.style.fontFamily = "Arial"

const apiUrl = "https://jsonplaceholder.typicode.com/users";

let table = document.createElement("table")

table.innerHTML = `
        <tr>
            <th> Id </th>
            <th> Name </th>
            <th> User Name </th>
            <th> Email </th>
        </tr>
`
body.appendChild(table)

fetch(apiUrl)
.then((res)=>{

    return res.json()

})
.then((data)=>{
    console.log(data)

    

    data.forEach((val)=>{
        let tr = document.createElement('tr')

        tr.style.color = "pink"
        
        tr.innerHTML = `
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.username}</td>
            <td>${val.email}</td>
        `

        table.appendChild(tr)
    })




    


})
.catch((err)=>{
    console.log("Error: ", err)
})

