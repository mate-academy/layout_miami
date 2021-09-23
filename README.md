# Miami landing page
Implement [the Miami landing page](https://www.figma.com/file/nHz8bflIwJaWP3P99vKTH5/miami_home_new?node-id=16033%3A3)
following the lesson videos.

Additionally:
1. Add a favicon
2. Logos in header and footer should be links to home page 
3. Change text color on hover for phone, email and address
4. When you click on ‘CALL TO ORDER’, make sure that there is no 404 error, make it a real link to activate your phone on your laptop/phone
5. In the “Miami best” block, make sure that the “Real estate here” link does not lead to a 404 error, but to a location in Google Maps
6. Pictures in Gallery should increase on hover 
7. In Gallery, when you click on any link to the city, there is no 404 error, and the link leads to a location in Google Maps
8. Gallery links should open google maps in a new tab `target="_blank"`
9. Photos in the Testimonials section should also increase on hover
10. Fix menu for small screens (if there is not enough space for all the menu items)
    ```css
    .menu {
      /* Move these rules from .menu__content */
      box-sizing: border-box;
      height: 100vh;
      padding: 24px 0;
      
      background-color: #0075ff;
      
      /* Add this rule to add scroll when there is not enough space */
      overflow-y: auto;
      
      ...
    ```
11. To disable page scrolling under the menu add the next code
    ```css
    .page__body--with-menu {
      overflow: hidden;
    }
    ```
    ```js
    window.addEventListener('hashchange', () => {
      if (location.hash === '#menu') {
        document.body.classList.add('page__body--with-menu');
      } else {
        document.body.classList.remove('page__body--with-menu');
      }
    });
    ```
