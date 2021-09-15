# Miami landing page
Implement [the Miami landing page](https://www.figma.com/file/nHz8bflIwJaWP3P99vKTH5/miami_home_new?node-id=16033%3A3)
following the lesson videos.

Additionally:
- Add a favicon
- Increase Gallery an Testimonial photos on :hover
- Change text color on hover for phone, email and address
- Gallery links should open google maps in a new tab
- Fix menu for small screens (if there is not enough space for all the menu items)
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
- To disable page scrolling under the menu add the next code
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
