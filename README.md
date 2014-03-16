Bits
====
### A simple SASS-based grid.

Bits is a SASS-based grid aimed to be as lightweight and simple as possible. The idea behind Bits was my own solution for smaller projects (I prefer SASS as my preprocesser) that don't require a full-fledged framework such as Foundation or Bootstrap.

Bits is fully responsive and collapses into a mobile full-width column layout at 768px. Feel free to modify the source to adjust to your own needs.

Bits is very much a work in progress, and is still in the process of being fine-tuned!

### Usage

Simply import bits.scss into your project to get started.

Structuring Bits is as simple as defining your HTML as such:

```
<div class="container">
    <div class="grid">
        <div class="bits whole"></div>
    </div>
</div>
```

Bits is built around SASS includes for better semantics. Rather than using predefined classes to build the grid, you would use `@include container(60em);` to define the actual container.

###### Bits has 3 specific includes:

`@include container($max-width);` - This is your wrapping div and defines the width of your content via the $max-width variable. The default width for the container is 960px;

`@include grid($nest);` - This wraps your "column" elements specified below, and the only option is whether or not the grid element is nested or not and accepts either a `true` or `false`. 

`@include bit($size);` - This specifies the width of your bits; size variable can be: whole, half, one-third, two-thirds, one-quarter, three-quarters, one-fifth, two-fifths, three-fifths, or four-fifths.

Simple enough?

### Notes 

Bits isn't meant to be a single go-to answer for all projects but rather a starting point to get you going in development.