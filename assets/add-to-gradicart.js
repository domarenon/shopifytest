let addToCart = document.querySelectorAll(".gradi-add-to-cart")

addToCart.forEach(function (item, index) {
    item.addEventListener('click', function(){

        let variantId = this.getAttribute('data-product-id');
        let quantity = 1;
        if (this.hasAttribute('quantity')){
             quantity= this.getAttribute('quantity');
        }

        let formData = {
            'items': [{
            'id': variantId,
            'quantity': quantity
            }]
        };

        if(variantId !== ""){
            fetch(window.Shopify.routes.root + 'cart/add.js', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Requested-With':'xmlhttprequest'
                },
                body: JSON.stringify(formData)
              })
              .then(response => {
                if(response.ok){
                    window.location.href = window.location.origin+"/cart"
                }
                return response.json();
              })
              .then(result =>{
                if(result.description){
                    alert(result.description)
                }
              })
              .catch((error) => {
                console.log('Error:', error);
              });
        }
        
    });
});