#Knockout Tippy Binding

> A simple knockout binding that allows you to add a tool tip to an element.

##Installation

```
npm install knockout.tippy
```

##How to Use

Include in your bundle with a build system such as webpack or browserify.
Use [`less-loader`](https://github.com/webpack/less-loader) and [`css-loader`](https://github.com/webpack/css-loader) to include styles.

Specify a template name to use a specific template for the tooltip text.

###Bind tooltip

```html
<a href="/remove" data-bind="tippy: 'template-name'">Hi!</a>
```

