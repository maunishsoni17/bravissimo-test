/*const listProductsURL = "http://localhost:8080/listProducts";
//const listBagItemsURL = "http://localhost:8080/listBagItems";
//const addItemURL = "http://localhost:8080/addItem";
//const deleteItemURL = "http://localhost:8080/deleteItem";

export default function listProducts() {
  fetch(listProductsURL)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        //registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}*/
