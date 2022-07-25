const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-cancel');
const productList= document.querySelector('#lista');
const totalOutput= document.querySelector('#total');
let total=0;
const createNewProducto=(name,price)=>{
  const ionCard=  document.createElement('ion-card');
   const newProductItem=document.createElement('ion-card-content');
   newProductItem.textContent= name +':$'+price;
   ionCard.appendChild(newProductItem); 
   productList.appendChild(ionCard);
}  
const clearInput=()=>{
    productName.value='';
    productPrice.value='';
}
const alertas=()=>{
    const alert= document.createElement('ion-alert')
    alert.header='Datos no validos';
    alert.subHeader='porfavor verifica tus datos :(';
    alert.message ='';
    alert.buttons=['ok']; 
    document.body.appendChild(alert);
    return alert.present();
} 
const isEmpty =str=>!str.trim().length;

buttonSave.addEventListener('click',()=>{ 
    const name = productName.value;
    const price = productPrice.value;
    if(isEmpty(name)||price<=0 || isEmpty(price)){
        alertas();
        return;
    }
    createNewProducto(name,price)
    total+=+price;
    totalOutput.textContent=total;
    clearInput();
})
buttonCancel.addEventListener('click',clearInput)