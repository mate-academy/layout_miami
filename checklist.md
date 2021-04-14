- make sure all links work
- comments are usually applicable to the whole project, not only the place where it was left (think about similar issues in your code)
- did you fully followed the design?
- make sure there is an empty line at the end of the file ([find out why](https://evanhahn.com/newline-necessary-at-the-end-of-javascript-files/))
- follow DRY principle
- write semantic markup
- elements of type block (e.g. `div`) are already 100% wide, there is no need to write this in styles
- after you open the tag, you have to add at least one more level of indentation before you close this tag 

 GOOD example:
```
<div>
  <div>
    some text
  </div
</div>
```

 BAD example:
```
<div>
<div>
some text
</div
</div>
```
- do not add extra files to the PR, use `git add <file_name>` instead of `git add.` or use `.gitignore` file ([gitignore](https://git-scm.com/docs/gitignore))
- check the [style guide](https://mate-academy.github.io/style-guides/htmlcss.html)
- `*` selector is used to add styles to EACH element of the file, you don't usually need this and this is too heavy for the big page, 
that's why this is better to add this style to those elements you really need (the major case when it is used is for `box-sizing` property)
- we preferably use classes for styling, not tags, ids, attributes or something else
- do not reset paddings for `body`, it doesn't have them by default
- check your class names again and make sure they are meaningful and describe the element behavior or its appearance
- styles for `body` is usually written at the beginning of the file
- don't increase specificity of selectors ([about selectors specificity](https://www.w3schools.com/css/css_specificity.asp))
- don't use word `image` in alt ([check here why](https://moz.com/learn/seo/alt-text))
- hover with transition should work perfectly
- all interactive elements should have cursor pointer
- inputs must have `name` attribute
- check the page on different screen sizes, it should be responsive (including sizes over 1700px)
- remove commented code and unnecessary comments
- use either `kebab-case` or `snake_case` for class names
- if you pushed some new changes, deploy them as well
- check up this [link](https://docs.google.com/document/d/1iglPsTDmcbDEwCEga20cUFO0eu8IIgXeqy06PLb46jY/edit) to prepare your project for HR review
- phones should be links like this: `<a href="tel:123-456-7890">123-456-7890</a>`
- emails should be links like this: `<a href="mailto:someone@yoursite.com">Email Us</a>`
- use ids for anchoring from your `nav` through site
- forms should have attributes `method` and `action`
- phone inputs in forms should have `type="tel"` so the HTML validation works
- email inputs in forms should have `type="email"` so the HTML validation works
- form have button with `type="submit"` ([check here why button](https://html.com/attributes/button-type/#Difference_between_ltbutton_typesubmitgt_and_ltinput_typesubmitgt))
- logos in the footer and header should be clickable
- you can implement smooth scroll by using 'scroll-behavior' css property
- blue text indicates links, they should be clickable
- you can add light hover effect to the pictures (for example you can use border/transform(scale)/box-shadow css properties)
- contact info also should be clickable
