const open = document.querySelector('.buy-now')
const close = document.getElementById('btn-close');
const modal_container = document.getElementById('modal-container');
open.addEventListener('click',()=>{
    modal_container.classList.add('.show');
});
close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
});
// function getLocalStorage(key){
//     if(localStorage.getItem(key)){
//      var str= localStorage.getItem(key);
//      var ob=JSON.parse(str);
//      return ob;
//     }
//     return undefined;
//  }

//   var idLocalS = getLocalStorage('IDproduct')
//  function renderModal(){
//     var html =``
//     for(var item of products){
//         if(item.id==idLocalS){
//             html+=`
//             <tr>
//                                         <td style="display: flex; align-items: center;"><img style="width: 70px;" src="${item.img}" alt="">Blue Denim Jacket </td>
//                                         <td> <p><span>${item.price}</span></p></td>
//                                         <td> <input style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
//                                         <td style="cursor: pointer;"> Remove</td>
//                                     </tr>
//             `
//             document.querySelector('.product-item').innerHTML=html


//         }
//     }

//  }
//  renderModal()
//  function renderModalOutstanding(){
//     var html =``
//     for(var item of productsbrand){
//         if(item.id==idLocalS){
//             html+=`
//             <tr>
//                                         <td style="display: flex; align-items: center;"><img style="width: 70px;" src="${item.img}" alt="">Blue Denim Jacket </td>
//                                         <td> <p><span>${item.price}</span></p></td>
//                                         <td> <input style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
//                                         <td style="cursor: pointer;"> Remove</td>
//                                     </tr>
//             `
//             document.querySelector('.product-item').innerHTML=html


//         }
//     }

//  }
//  renderModalOutstanding()
 
    

