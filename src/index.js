const grid = new gridjs.Grid({
  columns: ['Name', 'URL', 'Version', 'Min Program Space', 'Min Dynamic Space', 'Test-Platform' ],
  server: {
    url: 'https://raw.githubusercontent.com/schnoog/ArduinoLibraryFootprintAnalyzer/main/php/dump.json?' + Date.now(),
    then: data => data.data.map(lib => [lib.lib_name, lib.lib_url, lib.lib_version, lib.lib_minprogspace, lib.lib_mindynspace, lib.lib_platform])
  },
sort: true,
search: true

}).render(document.getElementById("wrapper"));
