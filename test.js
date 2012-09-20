function $JAML(template) {
	var render = function(template, thisObj, data) {
		var renderer = new Jaml.Template(template);
		return renderer.render.apply(renderer, Array.prototype.slice.call(arguments, 1));
	}
	var html = render(template);
	return $(html);		
}

$(function() {
	var count = 1000;
	
	$('body').empty();
	
	var t;
	
	var html = '<div><h1>Some title</h1><p>Some exciting paragraph text</p><br/><ul><li>First item</li><li>Second item</li><li>Third item</li></ul></div>';

	
	// $JAML
	
	t = new Date().getTime();
	
	for (var i = 0 ; i < count ; i++) {
		$(html).appendTo('body');
	}
	
	console.log(new Date().getTime() - t);
	
	$('body').empty();
	
	
	// $JAML
	
	t = new Date().getTime();
	
	for (var i = 0 ; i < count ; i++) {
		$JAML(function() {
			div(
			  h1("Some title"),
			  p("Some exciting paragraph text"),
			  br(),
			  ul(
			    li("First item"),
			    li("Second item"),
			    li("Third item")
			  )
			);
		}).appendTo('body');
	}
	
	console.log(new Date().getTime() - t);
	
	$('body').empty();
	
	
	// $HTML
	
	t = new Date().getTime();
	
	for (var i = 0 ; i < count ; i++) {
		$DIV(
			$H1('Some title'),
			$P('Some exciting paragraph text'),
			$BR(),
			$UL(
				$LI('First item'),
				$LI('Second item'),
				$LI('Third item')
	  		)
		).appendTo('body');
	}
	
	console.log(new Date().getTime() - t);
	
	$('body').empty();
	
	$DIV({
		cls: 'ttt'
		, style: 'color: red'
	},
		$H1('Some title'),
		$P('Some exciting paragraph text'),
		$BR(),
		$UL(
			$LI('First item'),
			$LI('Second item'),
			$LI(2)
  		)
	).appendTo('body');
	
});
