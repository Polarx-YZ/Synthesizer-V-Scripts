function getClientInfo() {
    return {
      "name" : "VCV to CV",
      "category" : "Edit Lyrics",
      "author" : "Polar from Cosmoto",
      "versionNumber" : 2,
      "minEditorVersion" : 65540
    };
  }
  
  function main(){
    var selection = SV.getMainEditor().getSelection();
    var selectedNotes = selection.getSelectedNotes();
    if (selectedNotes.length == 0) {
        return SV.showMessageBox('Oops!','You need to select some notes first!');
    } 

    for(var i = 0; i < selectedNotes.length; i ++) {
        var note = selectedNotes[i]
        const currLyrics = note.getLyrics();

        const newLyrics = currLyrics.replace(/a|e|i|o|u|n/g, '').replace('R', 'xx').replace(/-|\s/g, '').replace('息', 'br')
        note.setLyrics(newLyrics)

    }

    SV.showMessageBox('Done!', 'The lyrics have been converted');
    SV.finish();
  }