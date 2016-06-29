var that = this;
var el = $element;
if (typeof jQuery !== 'undefined' && ($element instanceof jQuery)) {
	el = el[0];
}
function sortNumber(a,b) {
	return b - a;
}

g.options = data;

g.draw = SVG(el).size('100%', '100%').spof();

g.clear = function(){
	g.draw.clear();
}

if (g.options.debug === true){
	console.info('chartress debug enabled for ');
	console.info(el);
	console.info('Passed Data: ');
	console.info(g.options);
	console.log('------');
}

if (typeof g.options.graph === 'undefined')
	g.options.graph = {};
if (typeof g.options.xAxis === 'undefined')
	g.options.xAxis = {};
if (typeof g.options.xAxis.range === 'undefined')
	g.options.xAxis.range = {};
if (typeof g.options.xAxis.legend === 'undefined')
	g.options.xAxis.legend = {};
if (typeof g.options.yAxis === 'undefined')
	g.options.yAxis = {};
if (typeof g.options.yAxis.label === 'undefined')
	g.options.yAxis.label = {};
if (typeof g.options.legend === 'undefined')
	g.options.legend = {};
if (typeof g.options.xAxis.label === 'undefined')
	g.options.xAxis.label = {};
if (typeof g.options.xAxis.label.format === 'undefined')
	g.options.xAxis.label.format = function(string){return string};
if (typeof g.options.legend.padding === 'undefined')
	g.options.legend.padding = {};
if (typeof g.options.graph.padding === 'undefined')
	g.options.graph.padding = {};
if (typeof g.options.columns === 'undefined')
	g.options.columns = {};
if (typeof g.options.columns.labels === 'undefined')
	g.options.columns.labels = {};
if (typeof g.options.pie === 'undefined')
	g.options.pie = {};
if (typeof g.options.pie.title === 'undefined')
	g.options.pie.title = {};

g.log = function(e){
	if (g.options.debug === true) {
		console.log(e);
	}
}

var g_st = function(el){
	return getComputedStyle(el);
}
var maxLength = g.options.xAxis.maxRangeLength || Infinity;

g.settings = {
	yMax: 0,
	fontSize: g.options.graph.fontFamily || 'Helvetica',
	class: g.options.graph.class_prefix || 'chartress',
	padding: {
		top: g.options.graph.padding.top || 0,
		right: g.options.graph.padding.right || 0,
		bottom: g.options.graph.padding.bottom || 0,
		left: g.options.graph.padding.left || 0
	},
	type: g.options.type || 'line',
	yAxis: {
		markEvery: g.options.yAxis.markEvery || 1,
		label: {
			color: g.options.yAxis.label.color || 'gray',
			x: g.options.yAxis.label.x || 0
		},
		markEvery: g.options.yAxis.markEvery || 20,
	},
	xAxis: {
		range: {
			from: g.options.xAxis.range.from || 0,
			to: g.options.xAxis.range.to || null,
		},
		markEvery: g.options.xAxis.markEvery || 1,
		label: {
			color: g.options.xAxis.label.color || 'gray',
			y: g.options.xAxis.label.y || 0
		},
	},
	legend: {
		x: g.options.legend.x || 100,
		y: g.options.legend.x || 0,
		padding: {
			top: g.options.legend.padding.top || 0,
			right: g.options.legend.padding.right || 0,
			bottom: g.options.legend.padding.bottom || 0,
			left: g.options.legend.padding.left || 0,
		}
	},
	columns: {
		width: g.options.columns.width || 15,
		labels: {
			fontSize: g.options.columns.labels.fontSize || 16,
			y: g.options.columns.labels.y || 1
		}
	},
	pie: {
		total: g.options.pie.total || 100,
		red: 'blue',
		title: {
			size: g.options.pie.title.size || 50,
			bold: g.options.pie.title.bold || true,
			text: g.options.pie.title.text || false,
			pre: g.options.pie.title.pre || false,
			sub: g.options.pie.title.sub || false
		}
	}
};
// if (true) {}
if(g.settings.type === 'line') {
	g.settings.padding = {
		top: g.options.graph.padding.top || 10,
		right: g.options.graph.padding.right || 8,
		bottom: g.options.graph.padding.bottom || 25,
		left: g.options.graph.padding.left || 35
	}
}
if(g.settings.type === 'column') {
	g.settings.padding = {
		top: g.options.graph.padding.top || 0,
		right: g.options.graph.padding.right || 0,
		bottom: g.options.graph.padding.bottom || 25,
		left: g.options.graph.padding.left || 0
	}
}