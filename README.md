# Miami landing page

You have several designs that are very similar to Miami. Choose the most interesting for you. Don't be afraid of another markup. We developed landing pages that in coding will be almost the same as Miami. You still able to chose Miami. 

- [the BOSE landing page](https://www.figma.com/file/OMjQNb3hg1LKMV4OwyQ3Ao/BOSE?node-id=0%3A1)
- [the MYBIKE landing page](https://www.figma.com/file/Ic3SlZjkATYaS7uTifZAIk/BIKE?node-id=0%3A1)
- [the MET landing page](https://www.figma.com/file/lSR1m42L9YwzQwzzxKwHpw/THE-MET?node-id=0%3A1)  
- [the Miami landing page](https://www.figma.com/file/nHz8bflIwJaWP3P99vKTH5/miami_home_new?node-id=16033%3A3)

Implement selected landing page following the lesson videos.

--> [CHECKLIST](https://github.com/mate-academy/layout_miami/blob/master/checklist.md)

1. [x] Add a favicon
2. [x] Don’t forget to add a title for the whole web page (it could be the name of your landing)
3. [x] Logos in header and footer should be links to home page
4. [x] Change text color on hover for phone, email and address
5. [x] When you click on ‘CALL TO ORDER’, make sure that there is no 404 error, make it a real link to activate your phone on your laptop/phone
6. [x] Same when you click on logo. There shouldn't be any error. 
7. [ ] In the “Miami best” block, make sure that the “Real estate here” link does not lead to a 404 error, but to a location in Google Maps
8. [x] Pictures in Gallery should increase on hover
9. [ ] Gallery links should open google maps in a new tab `target="_blank"`
10. [x] Photos in the Testimonials section should also increase on hover
11. [x] Make sure everything looks neat on mobile and without horizontal scrolling
12. [x] The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
13. [ ] Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the data
14. [ ] Form shouldn't be submitted if some of the fields are not filled
15. [ ] Page shouldn't be reloaded on form submit (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
16. [x] Add a smooth scroll for the whole page
17. [x] Fix menu for small screens (if there is not enough space for all the menu items)
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
15. [x] To disable page scrolling under the menu add the next code
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
16. [ ] Remember to reset default margins for headings (h1, h2, h3, etc.). Make sure that ```<h1>``` is positioned exactly 80px from the bottom of the header.
