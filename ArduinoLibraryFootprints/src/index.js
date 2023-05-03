function compareNumbers(a, b) {
    return a - b;
}



const grid = new gridjs.Grid({
  columns: [
	{
    	name: "Name",
    	sort: true,
	width: '17%'
  	},
	{
    	name: "URL",
    	sort: true,
	width: '22%',
  	},
	{
    	name: "Version",
    	sort: false,
	width: '7%'
  	},
	{
    	name: "Compiled PS",
    	sort: true, 
	compareFunction: compareNumbers,
	width: '12%'
  	},
	{
    	name: "Added PS",
    	sort: true,
	compareFunction: compareNumbers,
	width: '10%'
  	},

	{
    	name: "Compiled DS",
    	sort: true,
	compareFunction: compareNumbers,
	width: '12%'
  	},
	{
    	name: "Added DS",
    	sort: true,
	compareFunction: compareNumbers,
	width: '10%'
  	},
	{
    	name: "Test-platform",
    	sort: true,
	width: '10%'
  	}





 ],
  server: {
    url: 'https://raw.githubusercontent.com/schnoog/ArduinoLibraryFootprintAnalyzer/main/php/dump.json?' + Date.now(),
    then: data => data.data.map(lib => [lib.lib_name, gridjs.html("<a href='" + lib.lib_url + "' target='_blank' title='" + lib.lib_url + "'>" +  lib.repolabel + "          </a>"), lib.lib_version, 
		lib.lib_minprogspace, lib.loadProg, lib.lib_mindynspace,  lib.loadDyn,
		lib.lib_platform])
  },
sort: true,
search: true

}).render(document.getElementById("wrapper"));



