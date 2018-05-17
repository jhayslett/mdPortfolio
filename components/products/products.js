document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".top-header__menu-button").addEventListener("click",function(){
		document.querySelector(".top-header__mobile-menu").classList.toggle("is-hidden");
	})

	// document.querySelector(".top-header__close").addEventListener("click",function(){
	// 	document.querySelector(".top-header__mobile-menu").classList.toggle("is-hidden");
	// 	document.querySelector(".top-header__menu").classList.toggle("is-hidden");
	// })

	document.querySelector(".top-header__mobile-menu-close").addEventListener("click",function(){
		document.querySelector(".top-header__mobile-menu").classList.toggle("is-hidden");
	})

	document.querySelector(".top-header__cart-button").addEventListener("click",function(){
		document.querySelector(".shopping-cart").classList.toggle("is-hidden");
		addSpace();
	})

	document.querySelector(".js-cart-close").addEventListener("click",function(){
		document.querySelector(".shopping-cart").classList.toggle("is-hidden");
		addSpace();
	})

	document.querySelector(".js-cart").addEventListener("click",function(){
		document.querySelector(".shopping-cart").classList.toggle("is-hidden");
		addSpace();
	})
	
	// document.querySelector(".js-checkout").addEventListener("click",function(){
	// 	document.querySelector(".shopping-cart").classList.toggle("is-hidden");
	// 	document.querySelector(".checkout").classList.toggle("is-hidden");
	// })

	// document.querySelector("#test").innerHTML = "<p>" + window.innerHeight + " - - " + window.innerWidth +"</p>"
	

	// ADD COUPON SUBMIT BUTTON
	document.querySelector(".js-coupon-submit").addEventListener("click",function(){
		var coupon = document.querySelector(".js-coupon-input").value;
		// check the discounts for which it matches
		var newDiscount = findObjectByKey(discountCodes,"code",coupon);
		if(coupon.length === 0) {
			console.log("nothing in the input field dummy")
		} else if(!newDiscount) {
			console.log("Coupon does not exist");
		} else {
			newDiscount.run();
		}
	})

})

// ADD SPACE AT THE BOTTOM OF THE PAGE WHEN MORE SHOPPING CART ITEMS ARE ADDED
function addSpace() {
	if(document.querySelector(".shopping-cart").classList.contains("is-hidden")){
		document.body.style.cssText = "margin-bottom: 0;";
	} else {
		document.querySelector("body").style.cssText = "margin-bottom: " + document.querySelector(".shopping-cart").offsetHeight + "px;";
	}
}



///////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////GLOBALS//////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// FORMAT NUMBER TO HAVE .00 AT THE END
money = function(num) {
	return num.toFixed(2);
}

// SHOPPING CART ACTIVE OBJECT
shoppingCart = {
	products: [],
	discount: {
		currentCouponActive: false,
		currentCouponAffects: [],
		currentCouponType: "",
		currentCouponAmount: "",
		currentTotalDiscount: ""
	},
	totalItems: function(){
		var amount = 0;
		this.products.forEach(function(product){
			amount += product.quantity;
		})
		return amount;
	},
	subtotal: function(){
		var subtotal = 0;
		this.products.forEach(function(product){
			var quantity = product.quantity;
			var price = product.price;
			// this is where we need to run the calculations for if there is a discount applied
			console.log(shoppingCart.discount.currentCouponAffects.indexOf(product.id));
			subtotal += quantity * price;
		})		
		// money is a function that formats
		return money(subtotal);
	},
	total: function() {
		var subtotal = this.subtotal();
		var shipping = 20;
		var taxRate = 0.0675;
		var tax = subtotal * taxRate;
		var total = subtotal + tax + shipping;
		return Number(total);
	}
};

// RUN A FUNCTION FOR THE 
processDiscount = {
	perItem: function(item, amount) {
		console.log(item + " - product numerbs to be discounted");
		console.log(amount + " - discount to be discounted");
		if(!shoppingCart.discount.currentCouponActive) {
			shoppingCart.discount.currentCouponType = "perItem";
			shoppingCart.discount.currentCouponAffects = [item];
			shoppingCart.discount.currentCouponAmount = amount;
			updateCartAmount();
			loadCart();
			updateTotal();
		} else {
			console.log("UPDATED!");
		}
	},
	perType: function(categories, amount) {
		console.log(categories + " - categories to be discounted");
		console.log(amount + " - amount to be discount");
	},
	total: function(amount) {
		console.log(amount + " - amount to be discounted");
	},
	freeShip: function() {
		console.log("the shipping will be marked off");
	}
}

discountCodes = [
	{
		code: "20offlawnmower",
		run: function(){
			processDiscount.perItem(7,20);
		}
	},{
		code: "15offcateg1",
		run: function(){
			processDiscount.perType(["categ1"],15);	
		}
	},{
		code: "10offtotal",
		run: function(){
			processDiscount.total(10);
		}
	},{
		code: "freeShip",
		run: function(){
			processDiscount.freeShip();
		}
	}
];

function loadCart() {
	html = "";
	shoppingCart.products.forEach(function(item){
		html += '<tr class="shopping-cart__item" data-item-id=' + item.id + ' >';
		html += '<td class="shopping-cart__item-title">' + item.name + '</td>';
		// html += '<td class="shopping-cart__item-discount-price">' + item.price + '</td>';
		html += '<td class="shopping-cart__item-price">' + item.price + '</td>';
		html += '<td class="shopping-cart__item-quantity"><span class="js-quantity">' + item.quantity + '</span><input type="text" name="" class="shopping-cart__item-quantity-edit js-quantityInput is-hidden" value="' + item.quantity + '"><i class="material-icons js-confirmChange is-hidden">check_circle</i><i class="material-icons js-edit-quantity shopping-cart__edit-button" data-item-id=' + item.id + ' >mode_edit</i></td>';
		// html += '<td class="shopping-cart__item-discount-total">' + money(item.price * item.quantity) + '</td>';
		html += '<td class="shopping-cart__item-total">' + money(item.price * item.quantity) + '</td>';
		html += '<td data-item-id=' + item.id + ' class="shopping-cart__delete-button js-delete-cart-item"><i class="material-icons">close</i></td>';
		html += '</tr>';
	})
	document.querySelector(".shopping-cart__body").innerHTML = html;

	// delete buttons inside shopping cart
	document.querySelectorAll(".js-delete-cart-item").forEach(function(deleteButton){
		deleteButton.addEventListener("click",function(){
			deleteItemFromCart(this);
		})
	});
	// buttons to edit shopping cart
	document.querySelectorAll(".js-edit-quantity").forEach(function(editButton){
		editButton.addEventListener("click",function(){
			var parent = this.parentElement;
			parent.querySelector(".shopping-cart__item-quantity-edit").classList.toggle("is-hidden");
			parent.querySelector(".js-confirmChange").classList.toggle("is-hidden");
			parent.querySelector(".js-edit-quantity").classList.toggle("is-hidden");
			parent.querySelector(".js-quantity").classList.toggle("is-hidden");
		})
	})
	// buttons to confirm shopping cart update
	document.querySelectorAll(".js-confirmChange").forEach(function(confirmButton){
			confirmButton.addEventListener("click",function(){
			var parent = closest(this, "shopping-cart__item");
			if(parent.querySelector(".js-quantityInput").value != parent.querySelector(".js-quantity").innerHTML) {
				var newQuantity = parent.querySelector(".js-quantityInput").value;
				if(newQuantity == 0) {
					// console.log(this);
					deleteItemFromCart(closest(this, "shopping-cart__item"));
				} else {
					if(newQuantity > 999) {newQuantity = 999;};
					var itemId = parent.dataset.itemId;
					updateQuantity(parseInt(itemId), parseInt(newQuantity));
					updateCartAmount();
					loadCart();
					updateTotal();
					addSpace();
				}
			}
			parent.querySelector(".js-quantityInput").classList.toggle("is-hidden");
			parent.querySelector(".js-confirmChange").classList.toggle("is-hidden");
			parent.querySelector(".js-edit-quantity").classList.toggle("is-hidden");
			parent.querySelector(".js-quantity").classList.toggle("is-hidden");
		})
	})
}

// TEST IF A CLASS NAME EXIST
function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return(str.indexOf(testCls) != -1) ;
}

// CLOSEST PARENT ELEMENT
function closest(el, cls) {
    while (el  && el !== document) {
        if (hasClass(el, cls)) return el;
        el = el.parentNode;
    }
    return null;
}

// UPDATE QUANTITY IN SHOPPING CART
function updateQuantity(id,newQuantity) {
	// FIND THE PRODUCT IN THE SHOPPING CART AND UPDATE QUANTITY
	var checkCart = findObjectByKey(shoppingCart.products, "id", id);
	checkCart.quantity = newQuantity;
}

// LOAD THE PRODUCTS ON THE MAIN PAGE
function loadProducts() {
	var html = "";
	products.forEach(function(product){
		html += "";
		html += '<section class="product">';
		html += '<img class="product__image" src="http://placehold.it/200x200">';
		html += '<p class="product__rating">';
		html += '<i class="product__rating-star material-icons">star_border</i>';
		html += '<i class="product__rating-star material-icons">star_border</i>';
		html += '<i class="product__rating-star material-icons">star_border</i>';
		html += '<i class="product__rating-star material-icons">star_border</i>';
		html += '<i class="product__rating-star material-icons">star_border</i>';
		html += '</p>';
		html += '<p class="product__name">' + product.name + '</p>';
		html += '<p class="product__price">' + product.price + '</p>';
		html += '<button data-pid="' + product.id + '" class="product__add-to-cart"><i class="product__cart-icon material-icons">shopping_basket</i>ADD TO CART</button>';
		html += '</section>';
	})
	document.querySelector(".products").innerHTML = html;
	// Add add to cart functionality to buttons directly after loading them
	addToCartFunction();
}

// ADD TO CART BUTTON FUNCTIONALITY
function addToCartFunction() {
	document.querySelectorAll(".product__add-to-cart").forEach(function(cartButton){
		cartButton.addEventListener("click",function(){
			addProduct(this);
			updateCartAmount();
			loadCart();
			updateTotal();
			addSpace();
		})
	})
}

// DELETE CART BUTTON FUNCTIONALITY
function deleteItemFromCart(item) {
	var id = parseInt(item.dataset.itemId);
	// check if the current shopping cart has the product id in it already, if so add to the current quantity and reupdate cart
	var checkCart = findObjectByKey(shoppingCart.products, "id", id);
	delete shoppingCart.products[shoppingCart.products.indexOf(checkCart)];
	shoppingCart.products = shoppingCart.products.filter(function(n){ return n != undefined }); 
	updateCartAmount();
	loadCart();
	updateTotal();
	addSpace();
}


// ADD PRODUCTS FROM PAGE
function addProduct(item) {
	var id = parseInt(item.dataset.pid);
	var product = findObjectByKey(products,"id",id);
	// check if the current shopping cart has the product id in it already, if so add to the current quantity and reupdate cart
	var checkCart = findObjectByKey(shoppingCart.products, "id", id)
	if(checkCart) {
		// add one to quantity
		checkCart.quantity += 1;
	} else {
		product.quantity = 1;
		shoppingCart.products.push(product);
	}	
}

// UPDATE TOTAL FIELDS
function updateTotal() {
	document.querySelector(".js-total").innerHTML = shoppingCart.subtotal();
}

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

// UPCATE CART AMOUNT FIELDS
function updateCartAmount() {
	var amountFields = document.querySelectorAll(".js-cart-amount");
	amountFields.forEach(function(field){
		field.innerHTML = shoppingCart.totalItems();
	})
}

loadProducts();

///////////////////////////////////////////////
///////////////////////////////////////////////
//////////////////GLOBALS//////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////