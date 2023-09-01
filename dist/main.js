(() => {
	var e = {
			994: e => {
				e.exports = {
					FOO: "'hello world' from tools.wxs",
					bar: function(e) {
						return e
					}
				}, e.exports.msg = "some msg"
			}
		},
		t = {};

	function o(r) {
		var n = t[r];
		if (void 0 !== n) return n.exports;
		var s = t[r] = {
			exports: {}
		};
		return e[r](s, s.exports, o), s.exports
	}(() => {
		const e = document.getElementsByTagName("body")[0],
			t = t => {
				const o = document.createElement("div");
				o.textContent = t, e.append(o)
			},
			r = o(994);
		t(r.msg), t(r.bar(r.FOO))
	})()
})();