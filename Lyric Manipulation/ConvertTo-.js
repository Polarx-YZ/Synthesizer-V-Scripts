/*
  Description: 
  Converts ? to -
  Very specific use case
*/

function getClientInfo() {
    return {
      "name" : "? to -",
      "category" : "Edit Lyrics",
      "author" : "Polar from Cosmoto",
      "versionNumber" : 1,
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

        const newLyrics = currLyrics.replace(/\?|!|\//g, '-')
        note.setLyrics(newLyrics)

    }

    SV.showMessageBox('Done!', 'The lyrics have been converted');
    SV.finish();
  }