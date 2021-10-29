# Miami landing page
Implement [the Miami landing page](https://www.figma.com/file/nHz8bflIwJaWP3P99vKTH5/miami_home_new?node-id=16033%3A3)
following the lesson videos.

Additionally:
1. Add a favicon
2. Don’t forget to add a title for the whole web page (it could be the name of your landing)
3. Logos in header and footer should be links to home page
4. Change text color on hover for phone, email and address
5. When you click on ‘CALL TO ORDER’, make sure that there is no 404 error, make it a real link to activate your phone on your laptop/phone
6. In the “Miami best” block, make sure that the “Real estate here” link does not lead to a 404 error, but to a location in Google Maps
7. Pictures in Gallery should increase on hover
8. Gallery links should open google maps in a new tab `target="_blank"`
9. Photos in the Testimonials section should also increase on hover
10. Make sure everything looks neat on mobile and without horizontal scrolling
11. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
12. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the data
13. Add a smooth scroll for the whole page
14. Fix menu for small screens (if there is not enough space for all the menu items)
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
15. To disable page scrolling under the menu add the next code
    ```css
    .page__body--with-menu {
      overflow: hidden;
    }
    ```
    ```js
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#menu') {
        document.body.classList.add('page__body--with-menu');
      } else {
        document.body.classList.remove('page__body--with-menu');
      }
    });
    ```
16. Remember to reset default margins for headings (h1, h2, h3, etc.). Make sure that ```<h1>``` is positioned exactly 80px from the bottom of the header.

17. [DEMO LINK](https://pavlokhanas.github.io/layout_miami/).
