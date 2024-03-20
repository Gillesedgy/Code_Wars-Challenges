//! Solution(s)
function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;
      // Get the current user's shopping cart
    Promise.all([OrderAPI.getShoppingCartAsync(user).then(function(cart) {
      shoppingCart = cart;
    }),
    
    // Also look up the ZIP code from their profile
    CustomerAPI.getProfileAsync(user).then(function(profile) {
      zipCode = profile.zipCode;
    })]).then( function(){
        // Calculate the shipping fees
    shippingRate = calculateShipping(shoppingCart, zipCode);
      OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
      orderSuccessful = success;
      // Submit the order
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`)
      })
    })
    }

    /*
    he issue with this code is that the console.log statement at the end of the function will always log "Your order was NOT placed successfully" to the console. This is because the function is using promises to retrieve the shopping cart, ZIP code, and order success status asynchronously, and the console.log statement is executed before these promises have resolved.

To fix the issue, you can use Promise.all() to wait for all the promises to resolve before submitting the order and logging the success status. Here's an updated version of the code:
     */