function getLocalStorage(key){
    if(localStorage.getItem(key)){
     var str= localStorage.getItem(key);
     var ob=JSON.parse(str);
     return ob;
    }
    return undefined;
 }

  var idLocalS = getLocalStorage('IDproduct')
 function renderDetail(){
    var html =``
    for(var item of products){
        if(item.id==idLocalS){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="" class="produuct-thumb">
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now " onclick="saveIdProducts(${item.id})">Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
            `
            document.querySelector('.product-item').innerHTML=html


        }
    }

 }
 renderDetail()
 function renderDetailOutstanding(){
    var html =``
    for(var item of productsbrand){
        if(item.id==idLocalS){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="" class="produuct-thumb">
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now " onclick="saveIdProducts(${item.id})">Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
            `
            document.querySelector('.product-item').innerHTML=html


        }
    }

 }
 renderDetailOutstanding()
 