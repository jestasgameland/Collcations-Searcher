
function search() {

	var query = $("#searchbox").val();

	// Search for collcates BEFORE the word:

	$.get("dict_collocations1.json",
		function(response) {

			var html = '<h3>Collates BEFORE the word:</h3>';
			
			try {

				for(j=0; j<response[query].length; j++) {
				
					html += "<p>" + response[query][j] + " " + query + "</p>";

				};				
			}
			catch {html += "No collcates found BEFORE the word."}

			html += "\n\n\n\n";

			$("#results-container-before").html(html);

		})


	// Search for collcates AFTER the word:

	$.get("dict_collocations2.json",
		function(response) {

			var html = '<h3>Collates AFTER the word:</h3>';

			try {

				for(j=0; j<response[query].length; j++) {
				
					html += "<p>" + query + " " + response[query][j] + "</p>";

				};				
			}
			catch {html += "No collcates found AFTER the word."}

			$("#results-container-after").html(html);

		})

	


}




addEventListener('keydown', function(event) {   //Press Enter to start
	if (event.keyCode == 13) {
		search();
	};
});