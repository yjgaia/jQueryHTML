var $HTML = {
	tags : [
		'div', 'p', 'span', 'a', 'img', 'br', 'hr', 'em', 'strong'
	    , 'table', 'tr', 'th', 'td', 'thead', 'tbody', 'tfoot'
	    , 'ul', 'ol', 'li'
	    , 'dl', 'dt', 'dd'
	    , 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'
	    , 'form', 'fieldset', 'input', 'textarea', 'label', 'select', 'option'
	    , 'iframe'
    ]
};

for (var i in $HTML.tags) {
	var tag = $HTML.tags[i];
	var f = window['$' + tag.toUpperCase()] = (function() {
		var t = tag;
		return function() {
			
			var html = '<' + t;
			var content = '';
			var a = [];
			for (var i in arguments) {
				var o = arguments[i];
				if (o instanceof $) {
					a.push(o);
				} else if (i == 0 && typeof o === 'object') {
					for (var attr in o) {
						var name = attr === 'cls' ? 'class' : attr;
						html += ' ' + name + '="' + o[attr] + '"';
					}
				} else {
					content += o;
				}
			}
			html += '>';
			html += content;
			html += '</' + t + '>';
			
			var $o = $(html);
			for (var i in a) {
				var o = a[i];
				$o.append(o);
			}
			return $o;
		};
	})();
}
