$HTML
=====
$HTML is making it easy to generate jQuery object for HTML element in your JavaScript projects.
faster than JAML(https://github.com/edspencer/jaml), and more powerful(for jQuery user).

Simple Example
--------------
This is $HTML code.
``` js
var $div = $DIV(
	$H1('Some title'),
	$P('Some exciting paragraph text'),
	$BR(),
	$UL(
		$LI('First item'),
		$LI('Second item'),
		$LI('Third item')
	)
);
```

And append to body.
``` js
$div.appendTo('body');
```

Here's the output.
``` html
<div>
	<h1>Some title</h1>
	<p>Some exciting paragraph text</p>
	<br />
	<ul>
		<li>First item</li>
		<li>Second item</li>
		<li>Third item</li>
	</ul>
</div>
```

Attributes Example
------------------
``` js
var $div = $DIV({
		id: 'layer-1' // #layer-1, this is id attribute;
		, cls: 'layer-1' // .layer-1, this is class attribute.
		// ... anything else.
	},
	$H1('Some title'),
	$P('Some exciting paragraph text'),
	$BR(),
	$UL(
		$LI('First item'),
		$LI('Second item'),
		$LI('Third item')
	)
);
```

Coding Warning!
---------------
* attribute 'for' -> 'forward'.
* attribute 'class' -> 'cls'.
* style attribute 'float' -> 'flt'. 


Style Example
------------------
``` js
var $div = $DIV({
	style: {
		border: '1px solid black'
		, color: 'red'
		, background: 'green'
		// ... anything else.
	}
});
```

Result from running test.js
-----------------------
* static 1000 HTML codes generation time: 254ms
* 1000 HTML codes generation time using JAML: 1142ms, actual running time except code generation: 888ms
* 1000 HTML codes generation time using $HTML: 864ms, actual running time except code generation: 610ms
* HTML codes generation time using $HTML is 278ms faster than using JAML.

Read an inner element that is not allowed in JAML
--------------------------------------
Cannot use this code using JAML.
```js
var l;
Jaml.register('simple', function() {
	div(
		h1("Some title"),
		p("Some exciting paragraph text"),
		br(),
		ul(
			li("First item"),
			l = li("Second item"), // THIS IS NOT POSSIBLE..
			li("Third item")
		)
	);
});
```

But it is ok using $HTML.
``` js
var $li;
var $div = $DIV(
	$H1('Some title'),
	$P('Some exciting paragraph text'),
	$BR(),
	$UL(
		$LI('First item'),
		$li = $LI('Second item'), // IS THIS POSSIBLE?
		$LI('Third item')
	)
);
$div.appendTo('body');
$li.text('YEAH!!!'); // YEAH!!!
```

## License
[The MIT License](http://opensource.org/licenses/MIT)
