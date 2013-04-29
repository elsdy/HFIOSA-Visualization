function OpenFile(event, list_name, process_label) 
{
    var files = event.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById(list_name).innerHTML = '<ul>' + output.join('') + '</ul>';
    
    if(files && files[0]){
		var reader = new FileReader();
		reader.readAsText(files[0]);

		reader.onload = function (e) {  
			var output=e.target.result;
		
			//process text to show only lines with "@":				
/* 			output=output.split("\n").filter(/./.test, /\@/).join("\n"); */

			document.getElementById(process_label).innerText = output;			
		};
	}
}