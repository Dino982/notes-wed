function testListHasArray(){
  var notelist = new Notelist;
  assert.isEq(notelist.array.length, 0);
}

testListHasArray();


function testPutsNoteInArray(){
  // console.log(notelist);
  var notelist = new Notelist;
  notelist.addNote("new note");
  assert.isEq(notelist.array[0].text, "new note");
}

testPutsNoteInArray();
