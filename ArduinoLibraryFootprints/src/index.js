/*
const grid = new gridjs.Grid({
  columns: ['Name', 'URL', 'Version', 'Min Program Space', 'Min Dynamic Space', 'Test-Platform' ],
  server: {
    url: 'https://raw.githubusercontent.com/schnoog/ArduinoLibraryFootprintAnalyzer/main/php/dump.json?' + Date.now(),
    then: data => data.data.map(lib => [lib.lib_name, lib.lib_url, lib.lib_version, lib.lib_minprogspace, lib.lib_mindynspace, lib.lib_platform])
  },
sort: true,
search: true

}).render(document.getElementById("wrapper"));
*/



const grid = new gridjs.Grid({
  columns: [
	{
    	name: "Name",
    	sort: true,
	width: '25%'
  	},
	{
    	name: "URL",
    	sort: true,
	width: '25%',
//	formatter: (cell) => gridjs.html(`${cell}`)
  	},
	{
    	name: "Version",
    	sort: true,
	width: '10%'
  	},
	{
    	name: "Min.Prog.Space",
    	sort: true,
	width: '15%'
  	},
	{
    	name: "Min.Dyn.Space",
    	sort: true,
	width: '15%'
  	},
	{
    	name: "Test-platform",
    	sort: true,
	width: '10%'
  	}





 ],
  server: {
    url: 'https://raw.githubusercontent.com/schnoog/ArduinoLibraryFootprintAnalyzer/main/php/dump.json?' + Date.now(),
    then: data => data.data.map(lib => [lib.lib_name, gridjs.html("<a href='" + lib.lib_url + "' target='_blank' title='" + lib.lib_url + "'><small>" +  lib.lib_url + "</small></a>"), lib.lib_version, lib.lib_minprogspace, lib.lib_mindynspace, lib.lib_platform])
  },
sort: true,
search: true

}).render(document.getElementById("wrapper"));



