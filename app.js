$(document).ready(function(){
    $('.img-cont').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
   autoplay: Infinity,
    arrows: false,
    
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         infinite: true,
      }
    }
  
  ],

});


$('#icon').click(function(){
    $('#sideNav').toggle(500)
    console.log($('#sideNav'));
  
})

})


// const addToCartBtn = document.querySelectorAll('#Addtocart')
// let inputEl = document.querySelectorAll('#quantity')
// let priceEl = document.querySelectorAll('#price')
// let titleEl = document.querySelectorAll('.card-title')
// let imgEl = document.querySelectorAll('.card-img-top')
// let total
// let numericParts = [];
// let Cart = []
// let cartConts = document.getElementById('cart-cont')
 
  



// addToCartBtn.forEach((btn) => btn.addEventListener('click', () =>{
// for (let i = 0; i < priceEl.length; i++) {
//     let priceText = priceEl[i].textContent; // Example: "$700"  
//     let numericPart = parseFloat(priceText.replace('$', ''));
//       numericParts.push(numericPart);

//    for (let j = 0; j < inputEl.length; j++){
    
//    }
//    for (let k = 0; k < imgEl.length; k++){
  
//    }

// }
//    priceEl[0].textContent = "$"+ numericParts[0] * inputEl[0].value
//   priceEl[1].textContent = "$"+ numericParts[1] * inputEl[1].value
//   priceEl[2].textContent = "$"+ numericParts[2] * inputEl[2].value
//   priceEl[3].textContent = "$"+ numericParts[3] * inputEl[3].value
//   priceEl[4].textContent = "$"+ numericParts[4] * inputEl[4].value
//   priceEl[5].textContent = "$"+ numericParts[5] * inputEl[5].value
//   priceEl[6].textContent = "$"+ numericParts[6] * inputEl[6].value
//   priceEl[7].textContent = "$"+ numericParts[7] * inputEl[7].value
//   alert("Item Added to cart")

//   btn.textContent = "Added"

//   setTimeout(()=>{
//      btn.textContent = "Add to cart"
//   },5000)


//     let cardId = this.id // Extract cardId from button id
//         let cardTitle = document.querySelector('.card-title' + cardId).textContent;
//         let cardPrice = parseFloat(document.querySelector('#price' + cardId).value);
//         let quantity = parseInt(document.querySelector('#quantity' + cardId).value);

//         console.log(cardPrice, cardTitle, quantity);

//         // Create a new card element for the cart
//         var cartItem = document.createElement('div');
//         cartItem.classList.add('wrap');
//         cartItem.innerHTML = '<p>' + cardTitle + ' - $' + (cardPrice * quantity).toFixed(2) + '</p>';

//         // Append the new card element to the card container
//         document.getElementById('cart-cont').appendChild(cartItem);


// }))


 function loadContentBasedOnId() {
    let urlParams = new URLSearchParams(window.location.search);
    let currentCardId = urlParams.get('cardId');
    console.log(currentCardId);

    // Fetch content based on currentCardId and load it into the content-container
    let contentEl = document.getElementById('content');
    let ImageEl = document.getElementById('image');

       

    console.log(contentEl);
    console.log(ImageEl);
 

    let cardContent;
    let imageCont;
    let priceCont;
  
    switch (currentCardId) {
      case 'card1':
      cardContent = "<h1 class='mb-5'>Green Letuce<div class='w3-right'><span>$</span><span  id='pricing'>1500</span></div></h1><p>Buy Cabbage - White, If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy. Imagine an Egusi cabbage soup, or a crunchy mix of white cabbages with periwinkles in a tomato sauce, yummy.</p>";
      imageCont = "<img src='./image/green-lettuce-white-surface.jpg' class='w3-image' alt='pics'>"
        break;

      case 'card2':
        cardContent = "<h1 class='mb-5'>Green Pepper<div class='w3-right'><span>$</span><span  id='pricing'>700</span></div></h1><p>Buy Pepper - Green x1 on Supermart.ng. If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base.</p>";
         imageCont = "<img src='./image/pile-fresh-green-peppers-isolated.jpg' class='w3-image' alt>"
        break;

      case 'card3':
        cardContent = "<h1 class='mb-5'>Red Pepper<div class='w3-right'><span>$</span><span  id='pricing'>700</span></div></h1><p>Buy Pepper. If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy. Pepper is often described as the 'king of spices,' and it shares a place on most dinner tables with salt. The word pepper originates from the Sanskrit word pippali meaning and has been used for thousands of years in different innovative recipes. From salads to jollof rice to soups and sauces, peppers are always used to give the final touch to a memorable meal.</p>";
         imageCont = "<img src='https://www.supermart.ng/cdn/shop/files/oyingbo020_720x.jpg?v=1689904280' class='w3-image' alt>"
        break;

      case 'card4':
        cardContent = "<h1 class='mb-5'>Bulb Onions<div class='w3-right'><span>$</span><span  id='pricing'>200</span></div></h1><p>Buy Spring Onions - If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy. Spring onions also known as scallions or green onions, are very young onions, harvested before the bulb has had a chance to swellOnions are cultivated and used around the world. As a food item, they are usually served cooked, as a vegetable or part of a prepared savoury dish, but can also be eaten raw or used to make pickles. They are pungent when chopped and contain certain chemical substances which irritate the eyes.Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.Onions contain quercetin which is particularly powerful in its antibacterial effectiveness. Onions also have sulfur-containing amino acids, which aid in detoxing your liver. So add spice to your life and food by ordering onions today.</p>";
         imageCont = "<img src='./image/image-of-green-onions-mexican-ve.png' class='w3-image' alt>"
        break;

      case 'card5':
        cardContent = "<h1 class='mb-5'>Brocolli<div class='w3-right'><span>$</span><span  id='pricing'>600</span></div></h1><p>Buy Broccoli  If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy.</p>";
         imageCont = "<img src='https://www.supermart.ng/cdn/shop/files/aspar9011_460x.jpg?v=1689134324' class='w3-image' alt>"
        break;

      case 'card6':
        cardContent = "<h1 class='mb-5'>Carrots <div class='w3-right'><span>$</span><span  id='pricing'>200</span></div></h1><p>Buy Carrot 1kg  Carrot 1 kg is a root vegetable that is orange in colour. It is a plant based food that is rich in vitamins, minerals, and fiber. It is also a good source of antioxidants which help the body remove free radicals and unstable molecules that can cause cell damage if too many accumulate in the body. Free radicals result from natural processes and environmental pressures. The body can eliminate many free radicals naturally, but dietary antioxidants can help, especially when the oxidant load is high. Carrots have a sweet flavor and contain natural sugars so its suitable for people trying to avoid sugary snacks. It contains Vitamin C which contributes to collagen production. Collagen is a key component of connective tissue and essential for wound healing and keeping the body healthy. Adding carrots to your diet may help to reduce the risk of developing age-related macular degeneration. Carrots are available online for sale in Nigeria at supermart.ng. Buy this on Supermart.ng. If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy.</p>";
         imageCont = "<img src='https://www.supermart.ng/cdn/shop/files/spmt1066_460x.jpg?v=1689133914' class='w3-image' alt>"
        break;

      case 'card7':
        cardContent = "<h1 class='mb-5'>Spring Onions <div class='w3-right'><span>$</span><span  id='pricing'>750</span></div></h1><p>Buy Spring Onions - If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy. Spring onions also known as scallions or green onions, are very young onions, harvested before the bulb has had a chance to swellOnions are cultivated and used around the world. As a food item, they are usually served cooked, as a vegetable or part of a prepared savoury dish, but can also be eaten raw or used to make pickles. They are pungent when chopped and contain certain chemical substances which irritate the eyes.Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides and reduce cholesterol levels all of which may lower heart disease risk. Their potent anti-inflammatory properties may also help reduce high blood pressure and protect against blood clots.Onions contain quercetin which is particularly powerful in its antibacterial effectiveness. Onions also have sulfur-containing amino acids, which aid in detoxing your liver. So add spice to your life and food by ordering onions today.</p>";
         imageCont = "<img src='https://www.supermart.ng/cdn/shop/files/spwxyz254_460x.jpg?v=1689133944' class='w3-image' alt>"
        break;

      default:
        cardContent = "<h1 class='mb-5'>Cucumber<div class='w3-right'><span>$</span><span  id='pricing'>200</span></div></h1><p>Buy Cucumber x12 (Next Saturday Delivery)  If you want to stay healthy, eat your vegetables. They are an essential part of a balanced diet. Vegetables contain various nutrients and vitamins. They are also rich in fibre which aid digestion as well as other body functions. Vegetables are low in calories and fat. If you are cooking a Nigerian dish, you will struggle to do without a number of key vegetables. Many of the soups we love also have local vegetables as their base. Mama was right when she said you should eat your greens - they certainly help keep you healthy.</p>";
       imageCont = "<img src='./image/cum.png' class='w3-image' alt>"
    
    }

    // Set the innerHTML of the content container with the loaded content
    if (contentEl && ImageEl) {
      contentEl.innerHTML = cardContent;
      ImageEl.innerHTML = imageCont;
  
    }
  }

  function loadContent(cardId) {
    // Use location.assign to navigate without refreshing the page
    window.location.href = './details.html?cardId=' + cardId;
  }

 document.addEventListener('DOMContentLoaded', function () {
    // List of card elements
    let cardElements = document.querySelectorAll('.Addtocart');
    console.log(cardElements.length);
    

    // Set up click event listeners for each card
    cardElements.forEach(function (cardElement) {
      cardElement.addEventListener('click', function () {
        let cardId = cardElement.getAttribute('data-card-id');
       
        loadContent(cardId);
      console.log(loadContent(cardId));
      });
    });

    // Load content based on the initial cardId in the URL
    loadContentBasedOnId();
  });


  const btnEl = document.getElementById('btn')
  const countEl = document.getElementById('count')
  const increaseEl = document.getElementById('increase')
  const decreaseEl = document.getElementById('decrease')
 let contentEl = document.getElementById('content');
 let pricingElement = contentEl.querySelector('#pricing');
 let TextElement = contentEl.querySelector('.mb-5');
 let total;

  increaseEl.addEventListener('click', () => {
       let contentEl = document.getElementById('content');
     let pricingElement = contentEl.querySelector('#pricing');
     let urlParams = new URLSearchParams(window.location.search);
    let currentCardId = urlParams.get('cardId');
    console.log(currentCardId);

    if (currentCardId === 'card1') {
      countEl.innerHTML++;
        total = 1500;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }else if(currentCardId === 'card2'){
          countEl.innerHTML++;
        total = 700;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card3'){
          countEl.innerHTML++;
        total = 700;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card4'){
          countEl.innerHTML++;
        total = 200;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card5'){
          countEl.innerHTML++;
        total = 600;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card6'){
          countEl.innerHTML++;
        total = 200;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card7'){
          countEl.innerHTML++;
        total = 750;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card8'){
          countEl.innerHTML++;
        total = 200;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }else{
        total = 0
    }



        console.log(parseInt(countEl.textContent));

      
    console.log(pricingElement);

    
   
  })
  decreaseEl.addEventListener('click', () => {
         let contentEl = document.getElementById('content');
     let pricingElement = contentEl.querySelector('#pricing');
     let urlParams = new URLSearchParams(window.location.search);
    let currentCardId = urlParams.get('cardId');
    console.log(currentCardId);

    if (currentCardId === 'card1') {
      countEl.innerHTML--;
        total = 1500;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }else if(currentCardId === 'card2'){
          countEl.innerHTML--;
        total = 700;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card3'){
          countEl.innerHTML--;
        total = 700;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card4'){
          countEl.innerHTML--;
        total = 200;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card5'){
          countEl.innerHTML--;
        total = 600;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card6'){
          countEl.innerHTML--;
        total = 200;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card7'){
          countEl.innerHTML--;
        total = 750;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }
    else if(currentCardId === 'card8'){
          countEl.innerHTML--;
        total = 200;
       let final =  total * countEl.textContent
        pricingElement.textContent = final
    }else{
        total = 0
    }



        console.log(parseInt(countEl.textContent));

      
    console.log(pricingElement);
  })

  btnEl.addEventListener('click', () => {
    if(countEl.textContent <= 0){
     alert('Invalid Value')
     saveData()
    }else{
        alert('Item added succesfully')
         let cartConts = document.getElementById('cart-cont')
         let cartCont = document.getElementById('cartCount')
     let contentEl = document.getElementById('content');
         let ImageEl = document.getElementById('image');
     let pricingElement = contentEl.querySelector('#pricing');
      let TextElement = contentEl.querySelector('.mb-5');
      let imgElement = ImageEl.querySelector('.w3-image');
          let imgSrc = imgElement.getAttribute('src');
      let extractedText = Array.from(TextElement.childNodes).filter(node => node.nodeType === Node.TEXT_NODE) .map(node => node.textContent.trim()).join(' ');
    
        let wrapDiv = document.createElement('div')
        let imgC = document.createElement('img')
        let textC = document.createElement('p')
        wrapDiv.classList.add('wrap')

        imgC.src = imgSrc
      console.log(imgSrc);
        
        textC.textContent = countEl.textContent + " "  + extractedText + " = " + pricingElement.textContent
        wrapDiv.appendChild(imgC)
      wrapDiv.appendChild(textC)
      
     cartConts.appendChild(wrapDiv)

     let cartItems = document.querySelectorAll('.wrap');
     cartCont.textContent = cartItems.length
     saveData()

    }
   
          saveData()
  })

function saveData(){
    
  let cartConts = document.getElementById('cart-cont')
   let cartCont = document.getElementById('cartCount')
    localStorage.setItem('item', cartConts.innerHTML);
    localStorage.setItem('cart', cartCont.innerHTML);
}

function showList(){
 let cartCont = document.getElementById('cartCount')
  let cartConts = document.getElementById('cart-cont')



    cartConts.innerHTML = localStorage.getItem('item')
    cartCont.innerHTML = localStorage.getItem('cart')
   
}
// loadDarkModePreference();

showList();
