class Amar{
id=300;
name="Amarjeet";
mobile=4954434340;
address="Ghaziabad";
}
let ops=new Amar;

function card(){
    document.write(`<div class="card">
    <div class="details">
    <h2 class="name">${ops.name}</h2>
    <p class="id">${ops.id}</p>
    <p class="mobile">${ops.mobile}</p>
    <p class="address">${ops.address}</p>
    </div>
    <img src="humancircle.jpg">
    </div>
    `);
}
