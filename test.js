function $JAML(template) {
	var render = function(template, thisObj, data) {
		var renderer = new Jaml.Template(template);
		return renderer.render.apply(renderer, Array.prototype.slice.call(arguments, 1));
	}
	var html = render(template);
	return $(html);		
}

$(function() {
	
	// 천개의 HTML 코드 생성
	var count = 1000;
	
	$('body').empty();
	
	var t, st;
	
	var html = '<div><h1>Some title</h1><p>Some exciting paragraph text</p><br/><ul><li>First item</li><li>Second item</li><li>Third item</li></ul></div>';

	
	// jQuery를 이용한 정적인 HTML코드 생성 테스트
	
	t = new Date().getTime();
	
	for (var i = 0 ; i < count ; i++) {
		$(html).appendTo('body');
	}
	
	st = new Date().getTime() - t;
	
	// 측정된 시간 출력
	console.log('정적인 ' + count + '개의 HTML 코드 생성 시간: ' + st + 'ms');
	
	// 바디 내용 삭제
	$('body').empty();
	
	
	// JAML 테스트
	
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
	
	var jamlt = new Date().getTime() - t;
	var jamltst = jamlt - st;
	
	// 측정된 시간 출력
	console.log('JAML를 이용한 ' + count + '개의 HTML 코드 생성 시간: ' + jamlt + 'ms, 코드 생성을 제외한 실제 수행 시간: ' + jamltst + 'ms');
	
	// 바디 내용 삭제
	$('body').empty();
	
	
	// $HTML 테스트
	
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
	
	var $htmlt = new Date().getTime() - t;
	var $htmltst = $htmlt - st;
	
	// 측정된 시간 출력
	console.log('$HTML을 이용한 ' + count + '개의 HTML 코드 생성 시간: ' + $htmlt + 'ms, 코드 생성을 제외한 실제 수행 시간: ' + $htmltst + 'ms');
	
	// 바디 내용 삭제
	$('body').empty();
	
	
	// 측정된 시간 출력
	console.log('JAML에 비해 $HTML로 HTML코드를 생성하는 시간이 ' + (jamltst - $htmltst) + 'ms만큼 더 빨라졌습니다.');
	
	
	// 다음과 같은 코드를 생성합니다.
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
	
});
