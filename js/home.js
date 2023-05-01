
// console.log(products)
function readerProductbestseller(){
    var html = ``
    for(var item of products){
        html+=`
        <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="./detail.html" class="produuct-thumb" onclick="saveIdProducts(${item.id})">
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now " >Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
        `
        document.querySelector('.products').innerHTML=html

    }


}
readerProductbestseller()



document.getElementById('Balenciaga').onclick = function renderBalenciaga(){
    var html=``
    for (var item of productsOutStanding) {
        if(item.brand=='Balenciaga'){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="./detail.html" class="produuct-thumb" onclick='saveIdProducts(${item.id})'>
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now" >Buy Now</a>

                            </div>
                            <div class="product-info">
                            <a href="" class="product-cat">${item.cat}</a>
                            <a href="" class="product-name">${item.name}</a>
                            <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
            `
            document.querySelector('.productsbrand').innerHTML=html
        }
        
        
    }



}
document.getElementById('Gucci').onclick = function renderGucci(){
    var html=``
    for (var item of productsOutStanding) {
        if(item.brand=='Gucci'){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="./detail.html" class="produuct-thumb" onclick='saveIdProducts(${item.id})'>
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now" >Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    
                    </li>
            `
            document.querySelector('.productsbrand').innerHTML=html
        }
        
        
    }



}
document.getElementById('Versace').onclick = function renderVersace(){
    var html=``
    for (var item of productsOutStanding) {
        if(item.brand=='Versace'){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="./detail.html" class="produuct-thumb" onclick='saveIdProducts(${item.id})'>
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now" >Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
            `
            document.querySelector('.productsbrand').innerHTML=html
        }
        
        
    }



}
document.getElementById('FearofGod').onclick = function renderFearofGod(){
    var html=``
    for (var item of productsOutStanding) {
        if(item.brand=='FearofGod'){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="./detail.html" class="produuct-thumb onclick='saveIdProducts(${item.id})'">
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now" >Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
            `
            document.querySelector('.productsbrand').innerHTML=html
        }
        
        
    }



}
document.getElementById('Sadboiz').onclick = function renderSadBoiz(){
    var html=``
    for (var item of productsOutStanding) {
        if(item.brand=='SadBoiz'){
            html+=`
            <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="./detail.html" class="produuct-thumb" onclick='saveIdProducts(${item.id})'>
                                    <img src="${item.img}" alt="">
                                </a>
                                <a href="" class="buy-now" >Buy Now</a>

                            </div>
                            <div class="product-info">
                                <a href="" class="product-cat">${item.cat}</a>
                                <a href="" class="product-name">${item.name}</a>
                                <div class="product-price">${item.price}</div>
                            </div>
                        </div>
                    </li>
            `
            document.querySelector('.productsbrand').innerHTML=html
        }
        
        
    }



}
function saveIdProducts( id){
    saveLocalStorage(id,'IDproduct')
}
function saveLocalStorage(ob,key){
    var str=JSON.stringify(ob);
    localStorage.setItem(key,str);
}

 function getLocalStorage(key){
   if(localStorage.getItem(key)){
    var str= localStorage.getItem(key);
    var ob=JSON.parse(str);
    return ob;
   }
   return undefined;
}

