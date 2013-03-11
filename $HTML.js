var $HTML = {
	tags : ['div', 'p', 'span', 'a', 'img', 'br', 'hr', 'em', 'strong', 'table', 'tr', 'th', 'td', 'thead', 'tbody', 'tfoot', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'form', 'fieldset', 'input', 'textarea', 'label', 'select', 'option', 'iframe', 'button', 'script']
};

for (var i in $HTML.tags) {
	var tag = $HTML.tags[i];
	var f = window['$' + tag.toUpperCase()] = (function() {
		var t = tag;
		return function() {

			var html = '<' + t;
			var content = '';
			var a = [];
			// this is cannot run ie8
			// for (var i in arguments) {
			for (var i = 0; i < arguments.length; i++) {
				var o = arguments[i];
				if ( o instanceof $) {
					a.push(o);
				} else if (i == 0 && typeof o === 'object') {
					for (var attr in o) {
						var name;
						if (attr === 'cls') {
							name = 'class';
						} else if (attr === 'forward') {
							name = 'for';
						} else {
							name = attr;
						}
						var cont;
						if (name === 'style' && typeof o[attr] !== 'string' && typeof o[attr] === 'object') {
							cont = '';
							for (var sn in o[attr]) {
								var st = o[attr][sn];
								if (sn === 'flt') {
									sn = 'float';
								}
								st = typeof st === 'number' && sn !== 'zIndex' ? st + 'px' : st;
								cont += sn.replace(/([A-Z])/g, '-$1').toLowerCase() + ': ' + st + ';';
							}
						} else {
							cont = o[attr];
						}
						html += ' ' + name.replace(/([A-Z])/g, '-$1').toLowerCase() + '="' + cont + '"';
					}
				} else {
					a.push(o);
				}
			}
			html += '></' + t + '>';

			var $o = $(html);
			for (var i in a) {
				var o = a[i];
				$o.append(o);
			}
			return $o;
		};
	})();
}
