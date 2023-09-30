console.log("Hello, world!");
<p>rrrrrrrrrrr</p>;
/////////////
let http = new XMLHttpRequest();
http.open("get", "team.json", true);
http.send();
http.onload = function () {
  <p>rrrrrrrrrrr</p>;

  if (this.readyState == 4 && this.status == 200) {
    let team = JSON.parse(this.responseText);
    let output = "";
    for (let item of team) {
      output += `
	            <div class="product">
                <p >rrrrrrrrrrr</p>
            
	               <img src="${item.image}" alt="${item.description}">
	               <p class="title">${item.title}</p>
	               <p class="description">${item.description}</p>
	               <p class="price">
	                  <span>${item.price}</span>
	                  <span>€</span>
	               </p>
	               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
	            </div>
	         `;
    }
    document.querySelector(".team").innerHTML = output;
  }
};
