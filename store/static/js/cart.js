let updateBtns = document.getElementsByClassName('update-cart')

for(i = 0; i< updateBtns.length ; i++){
    updateBtns[i].addEventListener('click',function(){
        let productId = this.dataset.product
        let action = this.dataset.action
        console.log('productId:', productId,'Action:',action)
        if(user === 'AnonymousUser'){
            addCookieItem(productId, action)
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function addCookieItem(productId,action){
    console.log('Not logged in')

}
// This below function is written to update cart whenever user clicks the add to cart button from the above function it recieves the productId and action to perform and same is passed as attributes to the below function
function updateUserOrder(productId,action){
    console.log('User logged in,sending data..')
    var url = '/update_item/'   //this url gets triggered when the the above function is invoked
    fetch(url,{                 //fetch is used to write for which url we are sending the data and type of data along with the headers
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken' : csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action})    //body is the data we are sending to the backend server as strings.So we are using JSON.stringify to convert from dictionery to string.
    })

    .then((reponse) =>{
        return reponse.json()
    })

    
    .then((data) =>{
        console.log('data:',data)
        location.reload()
    })
}
