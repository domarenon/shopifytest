let addToCart = document.querySelectorAll("gradi-add-to-cart")
let formData = {
    'items': [{
     'id': null,
     'quantity': 1
     }]
   };
addToCart.forEach(function (item, index) {
    item.addEventListener('click', function(){  
        formData.items.id = this.data-product-id;
        if (this.quantity){
            formData.items.quantity = this.quantity;
        }

        console.log(JSON.stringify(formData))

        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => {
            return response.json();
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    });
});