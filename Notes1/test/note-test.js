function testNoteHasText(){
  var note = new Note("I hate bowling");
  assert.isEq(note.text, "I hate bowling")
}

testNoteHasText();
