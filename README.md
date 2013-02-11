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
	}
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


test.js를 수행했을 때의 결과
-----------------------
* 정적인 1000개의 HTML 코드 생성 시간: 254ms
* JAML를 이용한 1000개의 HTML 코드 생성 시간: 1142ms, 코드 생성을 제외한 실제 수행 시간: 888ms
* $HTML을 이용한 1000개의 HTML 코드 생성 시간: 864ms, 코드 생성을 제외한 실제 수행 시간: 610ms
* JAML에 비해 $HTML로 HTML코드를 생성하는 시간이 278ms만큼 더 빨라졌습니다. 

JAML에서는 불가능한 중간 코드 가져오기
--------------------------------------
CANNOT USE THIS CODE USING JAML!!!
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