# Gianni Accordion JS
A tiny module to manage height transition in multiple (or even just one) elements without pain.
It uses CSS transition in order to have a fluid and smooth movement

### DEMO
https://codepen.io/cant89/full/RLEoyV/

### USAGE

1. Add to your project

Add <code>gianniAccordion.min.js</code> to your project including it before your closing <code>body</code> tag:
```
<script type="text/javascript" src="/path/to/your/repository/gianniAccordion.min.js"></script>
```

2. Prepare your HTML:
```html
<article class="expandableItem">
  <div data-accordion-element-trigger>This is a title</div>
  <div data-accordion-element-content>This is a looong content</p>
</article>

<article class="expandableItem">
  <div data-accordion-element-trigger>This is a title</div>
  <div data-accordion-element-content>This is a looong content</p>
</article>

...
```

3. Initialize it in your script:
```javascript
var myAccordion = new gianniAccordion({
  elements: '.your-accordion-element-class'
});
```

4. Add a little bit, but necessary, style:
```css
[data-accordion-element-content] {
  height: auto;
  overflow: hidden;
  transition: height .5s;
}
```

5. Enjoy with Gianni! :)

### OPTIONS

* __elements__ *(this is the only one mandatory option)*

  Css selector of the elements for which you want to enable accordion.

  *It is expected to have two childrens: an expandable one called "content", and the "trigger" one that manage the visibility of the "content"*

* __trigger__

  Css selector for the Trigger inside the element (it will be searched inside the <code>elements</code> selector)

  default is <code>[data-accordion-element-trigger]</code>

* __content__

  Css selector for the Content inside the element (it will be searched inside the <code>elements</code> selector)
  
  default is <code>[data-accordion-element-content]</code>

* __oneAtATime__

  If true, when an element is clicked the others elements will be closed.

  default is <code>true</code>

* __selectedClass__

  Css Class added to the element when it is selected
  
  default is <code>selected</code>
    
 
### EVENTS

You can listen for events using the .on() method.

It accepts two arguments:
  * The name of the event (string)
  * A function to execute, which will retreive an argument with some useful data (fn)
  
Eg:
```javascript
myAccordion.on( "elementSelected", function elementIsSelected(data){ 
  // Do something 
})
```
Here all the available events:

* __elementSelected__
  triggered when an element is clicked

* __elementOpened__
  triggered when an element is opened and the transition is ended

* __elementUnselected__
  triggered when an element is unselected

* __elementClosed__
  triggered when an element is closed and the transition is ended


> NOTE: this library use style.scrollHeight property to determine the height of the scrollable content of the element you pass in, so every css rule (like translateY), applied on childrens of that element, that affect the scrollable area, could be result in a wrong calculation of the height. Applied that to the element instead.
