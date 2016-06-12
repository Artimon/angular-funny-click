# Angular Funny Click
Creates *click!* images around the cursor when clicking, because.. it looks funny.

![alt tag](https://github.com/Artimon/angular-funny-click/blob/master/preview.png?raw=true)

### 3 Steps Setup

**1. Include Funny Click Module**

Include funny-click.js after angular.js and before your app code as this example shows.

You also need to add **Angular Event Bubbling** ( https://github.com/Artimon/angular-event-bubbling ) and include it before the funny click module.

```html
<script type='text/javascript' src="vendor/angular.min.js"></script>
<script type='text/javascript' src="vendor/event-bubbling.js"></script>
<script type='text/javascript' src="vendor/funny-click.js"></script>
<script type='text/javascript' src="app/app.js"></script>
```

**2. Add Funny Click To Your App**

Simply add **pads.funnyClick** to your app depenencies.

```js
var myApp = angular.module('myApp', ['pads.eventBubbling', 'pads.funnyClick']);
```

**3. Setup Funny Click**

Include the funny click directive into your website body.

- Move the funny-click.png into your img/ folder.
- Add the funny-click.css to your page.
- When using a different image or image location change the css image path.
- You can configure the image size, distance and duration by changing the directive parameters.

```html
<body pads-event-bubbling>
    <pads-funny-click
                     image-width="65"
                     image-height="17"
                     dist-min="40"
                     dist-max="50"
                     duration="550">
    </pads-funny-click>
</body>
```

License
----

MIT


**Free Software for your enjoyment!**