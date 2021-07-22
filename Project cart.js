//console.log("running");
var products = {
	offShoulderCropTop: {
		name: 'Off-shoulder crop top',
		image:
			'https://img.shopstyle-cdn.com/sim/c4/db/c4db11d0623a710c724b8192fb13e4db_xlarge/h-m-ribbed-top-black.jpg',
		price: '799',
		inCart: 0,
		key: 'offShoulderCropTop'
	},
	satinTuckinBlouse: {
		name: 'Satin Tuck-in Blouse',
		image:
			'https://ae01.alicdn.com/kf/Hf07ffb97ff3e475eb503dfe333ffeb4aH/Women-s-Blouse-Elegant-Wine-Satin-Shirt-for-Women-Turn-Down-Collar-Long-Sleeve-Female-Formal.jpg',
		price: '1299',
		inCart: 0,
		key: 'satinTuckinBlouse'
	},
	turtleNeckRibknittedSweater: {
		name: 'Turtle-Neck Rib-knitted Sweater',
		image:
			'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/imitt/imitt3003812d01/imitt3003812d01_q1_2-0._SX664_QL90_.jpg',
		price: '1999',
		inCart: 0,
		key: 'turtleNeckRibknittedSweater'
	},
	puffSleevedCropTop: {
		name: 'Puff Sleeved Crop Top',
		image:
			'https://n.nordstrommedia.com/id/sr3/1ee2addb-ab36-43fe-8f35-7e3f5d775cf0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
		price: '799',
		inCart: 0,
		key: 'puffSleevedCropTop'
	},
	knittedTankTop: {
		name: 'Knitted Tank Top',
		image:
			'https://img.shein.com/images/shein.com/201704/f1/14922205152036806286_thumbnail_600x799.webp',
		price: '999',
		inCart: 0,
		key: 'knittedTankTop'
	},
	gothicSloganTee: {
		name: 'Gothic Slogan Tee',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIXW7DOMHhXleA_u2e1RpcejDPo5cRfLKsIQ&usqp=CAU',
		price: '699',
		inCart: 0,
		key: 'gothicSloganTee'
	},
	blackHighRiseSkinnyFit: {
		name: 'Black High-Rise Skinny Fit',
		image:
			'https://i.s-madewell.com/is/image/madewell/AA590_DM1895_m?wid=500&hei=635&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0',
		price: '1799',
		inCart: 0,
		key: 'blackHighRiseSkinnyFit'
	},
	kneelengthformalskirt: {
		name: 'Knee-Length Formal Skirt',
		image:
			'https://assets.abfrlcdn.com/img/app/product/2/259801-1003825-large.jpg',
		price: '1399',
		inCart: 0,
		key: 'kneelengthformalskirt'
	},
	rustSenoritaCurduroyBellBottoms: {
		name: 'Rust Senorita Curduroy Bell-Bottoms',
		image:
			'https://cdn.tobi.com/product_images/lg/1/rust-senorita-corduroy-bell-bottom-pants.jpg',
		price: '2299',
		inCart: 0,
		key: 'rustSenoritaCurduroyBellBottoms'
	},
	blackBeltedFlaredPants: {
		name: 'Black Belted Flared Pants',
		image:
			'https://img.faballey.com/Images/Product/BOT00363Z/3.jpg',
		price: '1799',
		inCart: 0,
		key: 'blackBeltedFlaredPants'
	},
	summerFloralShorts: {
		name: 'Summer Floral Shorts',
		image:
			'https://s3.us-east-2.amazonaws.com/travelfashiongirlpostphotos/2018/Stylish+Summer+Shorts+for+Women/summer-shorts-for-women-007.jpg',
		price: '799',
		inCart: 0,
		key: 'summerFloralShorts'
	},
	rancherCanvasOliveOveralls: {
		name: 'Rancher Canvas Olive Overalls',
		image:
			'https://cdn.shopify.com/s/files/1/1222/2794/products/156085_DOV-1_2400x.jpg?v=1595540525',
		price: '2999',
		inCart: 0,
		key: 'rancherCanvasOliveOveralls'
	},
	floralPrintJumpsuit: {
		name: 'Floral Print Jumpsuit',
		image:
			'https://assets.ajio.com/medias/sys_master/root/h5e/hb9/14368779927582/-473Wx593H-440984152-pink-MODEL.jpg',
		price: '2799',
		inCart: 0,
		key: 'floralPrintJumpsuit'
	},
	bohemianMustardSummerDress: {
		name: 'Bohemian Mustard Summer Dress',
		image:
			'https://paulamarket.com/wp-content/uploads/2019/07/BEFORW-Women-Summer-Dress-2019-Sexy-Straps-Bohemian-Floral-Tunic-Beach-Dress-Sundress-Pocket-Red-Dresses-9.jpg',
		price: '1699',
		inCart: 0,
		key: 'bohemianMustardSummerDress'
	},
	ruffledRomper: {
		name: 'Ruffled Romper',
		image:
			'https://images-na.ssl-images-amazon.com/images/I/51mGVCcP1gL._AC_UY445_.jpg',
		price: '999',
		inCart: 0,
		key: 'ruffledRomper'
	},
	blackEsteeLongSleevedMesh: {
		name: 'Black Estee Long-Sleeved Mesh',
		image:
			'https://cdn.shopify.com/s/files/1/0077/9327/9033/products/Estee_Long_Sleeve_Mesh_Party_Dress_Black-214_1024x1024.jpg?v=1564121099',
		price: '3599',
		inCart: 0,
		key: 'blackEsteeLongSleevedMesh'
	},
	ravenclawTunicDress: {
		name: 'Ravenclaw Tunic Dress',
		image:
			'https://hottopic.scene7.com/is/image/HotTopic/11932042_hi?$pdp_hero_standard$',
		price: '2799',
		inCart: 0,
		key: 'ravenclawTunicDress'
	},
	slytherinSweaterDress: {
		name: 'Slytherin Sweater Dress',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBQvFs_GF4UVPgekdxbao0Fawwoki3ZYz3CA&usqp=CAU',
		price: '2799',
		inCart: 0,
		key: 'slytherinSweaterDress'
	},
	dinosuarTailPrint: {
		name: 'Dinosuar Tail Print',
		image:
			'https://www.dhresource.com/0x0/f2/albu/g10/M01/19/AD/rBVaVly9qh-AVXLUAAGILeEtW1M559.jpg',
		price: '799',
		inCart: 0,
		key: 'dinosuarTailPrint'
	},
	superKindBaby: {
		name: 'Super Kind Baby',
		image:
			'https://cdn.shopify.com/s/files/1/1109/6386/products/superkind-ss-pink_2048x.jpg?v=1571439687',
		price: '999',
		inCart: 0,
		key: 'superKindBaby'
	},
	boysShirt: {
		name: 'Boys Shirt',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBQvFs_GF4UVPgekdxbao0Fawwoki3ZYz3CA&usqp=CAU',
		price: '1299',
		inCart: 0,
		key: 'boysShirt'
	},
	spongeBobSquarePantsTee: {
		name: 'SpongeBob SquarePants Tee',
		image:
			'https://breakshirt.net/wp-content/uploads/2019/08/redirect-2705.jpg',
		price: '899',
		inCart: 0,
		key: 'spongeBobSquarePantsTee'
	},
	bookworminTraining: {
		name: 'Bookworm in Training',
		image:
			'https://dg6xfr3y1xvv2.cloudfront.net/susie-ghahremani-bookworm-in-training-kids-shirt-MAIN-59837fcc64b85-1500.jpg',
		price: '799',
		inCart: 0,
		key: 'bookworminTraining'
	},
	xXXTENTACIONHoodie: {
		name: 'XXXTENTACION Hoodie',
		image:
			'https://media.customon.com/unsafe/600x600/img.customon.com/img/5296667/16868,35,2,0,12,136,136,17,22,d6b74296b15f52e1c55f53019c7c73bf/merchantimagenew/xxxtentacion-kids-hoodie-black.jpg',
		price: '1799',
		inCart: 0,
		key: 'xXXTENTACIONHoodie'
	},
	boysTrackpants: {
		name: 'Boys Trackpants',
		image:
			'https://ae01.alicdn.com/kf/HTB1z_kNLXXXXXa8XFXXq6xXFXXXd/boys-trackpants-kids-clothes-boys-pants-kids-sports-pants-boy-trousers-fall-2016-new-children-clothing.jpg',
		price: '999',
		inCart: 0,
		key: 'boysTrackpants'
	},
	skinnyJoggers: {
		name: 'Skinny Joggers',
		image:
			'https://www.oneills.com/media/catalog/category/kids-skinny-march.jpg',
		price: '999',
		inCart: 0,
		key: 'skinnyJoggers'
	},
	denimPants: {
		name: 'Denim Pants',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPX17EXJcy96bqRwIIvGlRtY4A-D1nNjgctA&usqp=CAU',
		price: '1299',
		inCart: 0,
		key: 'denimPants'
	},
	rippedDenims: {
		name: 'Ripped Denims',
		image:
			'https://my-test-11.slatic.net/p/32e6a3b4fd79804c652b9e630db0ca09.jpg',
		price: '1399',
		inCart: 0,
		key: 'rippedDenims'
	},
	superDenimShorts: {
		name: 'Super Denim Shorts',
		image:
			'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/4/4/44192338200_1.jpg?rnd=20200526195200',
		price: '899',
		inCart: 0,
		key: 'superDenimShorts'
	},
	blockCheckOveralls: {
		name: 'Block-Check Overalls',
		image:
			'https://i.etsystatic.com/8383955/d/il/fc999f/2167162846/il_340x270.2167162846_2n7g.jpg?version=0',
		price: '1799',
		inCart: 0,
		key: 'block-CheckOveralls'
	},
	bluecottonchinesecollarshirt: {
		name: 'Blue cotton chinese collar shirt',
		image:
			'https://www.fabindia.com/ccstore/v1/images/?source=/file/v2518271970151407738/products/10515994BU.10515995.f.221217.jpg',
		price: '1,099',
		inCart: 0,
		key: 'bluecottonchinesecollarshirt'
	},
blueshirt: {
		name: 'Blue shirt',
		image:
			'https://img3.exportersindia.com/product_images/bc-full/2019/7/6447138/mens-shirts-1563255452-4999364.jpeg',
		price: '599',
		inCart: 0,
		key: 'blueshirt'
	},
brownblackcasualshirt: {
		name: 'Brown black casual shirt',
		image:
			'https://d1gc60rs3h7wtu.cloudfront.net/catalog/product/cache/0a2bc38b67edd8e5c70546a21088f7a5/s/s/ss19shrt_hhchk1_m_pln_brbl_s.jpg',
		price: '500',
		inCart: 0,
		key: 'brownblackcasualshirt'
	},
koreanstylecolorblockshirt:{
name: 'korean style color block shirt',
		image:
			'https://i.pinimg.com/originals/10/be/6c/10be6c76119fc5eab93cccf0311a390a.jpg',
		price: '1,099',
		inCart: 0,
		key: 'koreanstylecolorblockshirt'
	},
camisaloosemaleshirt:{
name: 'Camisaloosemaleshirt',
		image:
			'https://ae01.alicdn.com/kf/H264e914241a742c69ca3ec1fc562b905m.jpg_q50.jpg',
		price: '999',
		inCart: 0,
		key: 'camisaloosemaleshirt'
	},
whitefloralshirt:{
name: 'Whitefloralshirt',
		image:
			'https://5.imimg.com/data5/CW/MC/MY-43691381/white-floral-shirt-mens-shirts-for-men-with-price-supplier-500x500.jpg',
		price: '2,099',
		inCart: 0,
		key: 'whitefloralshirt'
	},
elasticmenstrousers:{
name: 'Elastic mens trousers',
		image:
			'https://ae01.alicdn.com/kf/HTB1f7i.SkvoK1RjSZFwq6AiCFXax/2019-Man-Straight-Pants-Men-Trouser-Elastic-Male-Waistline-74-94cm-Trousers-Mens-Plaid-Pants-Black.jpg',
		price: '899',
		inCart: 0,
		key: 'elasticmenstrousers'
	},
stylishmensjeans:{
name: 'Stylish mens jeans',
		image:
			'https://rukminim1.flixcart.com/image/332/398/k0zlsi80/jean/5/r/y/32-maw19jn140-metronaut-original-imafkmgsnzbhrqpw.jpeg?q=50',
		price: '999',
		inCart: 0,
		key: 'stylishmensjeans'
	},
mensanklelengthjeans:{
name: 'Mens anklelength jeans',
		image:
			'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/21401/189519/New-Men-s-Ankle-Length-Slim-Jeans-Streetwear-Holes-Summer-Ripped-Pencil-Pants-Trousers-Casual-Denim__89118.1546345530.jpg?c=2&imbypass=on',
		price: '1,200',
		inCart: 0,
		key: 'mensanklelengthjeans'
	},
greywovenpant:{
name: 'Greywovenpant',
		image:
			'https://cdn.shopify.com/s/files/1/1231/6442/products/cottonworld-men-s-pants-men-s-100-cotton-grey-slim-fit-pants-4151189962805_394x.jpg?v=1571438960',
		price: '2,071',
		inCart: 0,
		key: 'greywovenpant'
	},
denimjean:{
name: 'Denimjean',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqeWPuzM5OLu3GB8t8yS8cB8G3o1txvZldVw&usqp=CAU',
		price: '899',
		inCart: 0,
		key: 'denimjean'
	},
bluedenimjeans:{
name: 'Blue denim jeans',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQno_-xy29phkOKcK6AMoUdHI5Z8UNn-rYuqw&usqp=CAU',
		price: '2,099',
		inCart: 0,
		key: 'bluedenimjeans'
	},
menmilitaryjacket:{
name: 'Menmilitaryjacket',
		image:
			'https://ae01.alicdn.com/kf/HTB1ATV5LpXXXXcJXFXXq6xXFXXXi/Men-jacket-Casual-cotton-washed-coats-Army-Military-Outdoors-Stand-collar-Outerwear-jaqueta-masculina-Coat-parka.jpg',
		price: '1,099',
		inCart: 0,
		key: 'menmilitaryjacket'
	},
bomberjacket:{
name: 'Bomberjacket',
		image:
			'https://ae01.alicdn.com/kf/HTB1ATV5LpXXXXcJXFXXq6xXFXXXi/Men-jacket-Casual-cotton-washed-coats-Army-Military-Outdoors-Stand-collar-Outerwear-jaqueta-masculina-Coat-parka.jpg',
		price: '990',
		inCart: 0,
		key: 'bomberjacket'
	},
mensrippedhoodeddenimjacket:{
name: 'Mensrippedhoodeddenimjacket',
		image:
			'https://images-na.ssl-images-amazon.com/images/I/71PCE22SLoL._AC_UX385_.jpg',
		price: '1,999',
		inCart: 0,
		key: 'mensrippedhoodeddenimjacket'
	},
greenblackbluestreetwear:{
name: 'Greenblackbluestreetwear',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeaeM3r8brV7fR2fVFndtm9yk7MmS_r6cyfQ&usqp=CAU',
		price: '1,001',
		inCart: 0,
		key: 'greenblackbluestreetwear'
	},
corduroyjacket:{
name: 'Corduroy jacket',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSy7wrCXLsxXbr6ayU0fURGFhQEMoOKBH4Bg&usqp=CAU',
		price: '2,001',
		inCart: 0,
		key: 'corduroyjacket'
	},
loosemenssportswearjacket:{
name: 'loose mens sportswear jacket',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE7sMjyDfV0kxBbdBOIIO1RcrAbFP6pnED4w&usqp=CAU',
		price: '2,099',
		inCart: 0,
		key: 'loosemenssportswearjacket'
	},
};


let cartButtons = document.querySelectorAll('.add-cart');
cartButtons.forEach(function(cartButton) {
	cartButton.addEventListener('click', function() {
		cartNumbers();
		setItems(this.id);
		totalCost(this.id);
	});
});

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.querySelector('.spanclass').textContent = productNumbers;
	}
}
function cartNumbers(product) {
	//console.log(product);
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);
	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.spanclass').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.spanclass').textContent = 1;
	}
}
function setItems(product) {
	//console.log('hii');
	var cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[product] == undefined) {
			cartItems = {
				...cartItems,
				[product]: products[product]
			};
		}
		cartItems[product].inCart += 1;
	} else {
		products[product].inCart = 1;
		cartItems = {
			[product]: products[product]
		};
	}

	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}
function totalCost(product) {
	//console.log("price",product.price);

	let cartCost = localStorage.getItem('totalCost');

	console.log(cartCost);
	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + product.price);
	} else {
		localStorage.setItem('totalCost', product.price);
	}
}


function displayCart() {
	var cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	var productContainer = document.querySelector('.products');
	if (cartItems) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map((item) => {
			var itemTotal = parseInt(item.inCart) * parseInt(item.price);
			productContainer.innerHTML += `
       <div class="product ${item.key}">
          <div class="product-title">
             <img src="${item.image}" alt="">
             <span>${item.name}</span>
          </div>
          <div class="product-price">
              ${item.price}
          </div>
          <div class="product-count">
           <span>${item.inCart}</span>
          </div>
          <div class="product-total">
              <span >${itemTotal}</span>
          </div>
      </div>

       
    `;
		});
	}

	console.log(cartItems);
}
onLoadCartNumbers();
displayCart();