function getLocalStorage(key){
    if(localStorage.getItem(key)){
     var str= localStorage.getItem(key);
     var ob=JSON.parse(str);
     return ob;
    }
    return undefined;
 }


  var idLocal = getLocalStorage('IDproduct')
      function renderCart(){
  
    var html =``
    for(var item of products){
        if(item.id==idLocal){
            console.log(item)
            html+=`
            <tr>
                                        <td style="display: flex; align-items: center;"><img style="width: 70px;" src="${item.img}" alt="">${item.name} </td>
                                        <td> <span>${item.price}</span></td>
                                        <td> <input style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
                                        <td style="cursor: pointer;"> Remove</td>
            </tr>
            `
            document.querySelector('tbody').innerHTML=html


        }
    }
  }
  renderCart()
  function renderCartOutStanding(){
  
    var html =``
    for(var item of productsbrand){
        if(item.id==idLocal){
            console.log(item)
            html+=`
            <tr>
                                        <td style="display: flex; align-items: center;"><img style="width: 70px;" src="${item.img}" alt="">${item.name} </td>
                                        <td> <span>${item.price}</span></td>
                                        <td> <input style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
                                        <td style="cursor: pointer;"> Remove</td>
            </tr>
            `
            document.querySelector('tbody').innerHTML=html


        }
    }
  }
  renderCartOutStanding()


