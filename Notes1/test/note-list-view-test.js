function testListReturnsHTML(){
  var notelist = new Notelist();
  notelist.addNote("I hate bowling");
  var noteListView = new Notelistview(notelist)
  assert.isEq(noteListView.doHTML(), "<ul><li><div>I hate bowling</div></li></ul>");
}

testListReturnsHTML();

function testListReturnsEmptyHTML(){
  var notelist = new Notelist();
  notelist.addNote("A");
  var noteListView1 = new Notelistview(notelist)
  assert.isEq(noteListView1.doHTML(), "<ul><li><div>A</div></li></ul>");
}

testListReturnsEmptyHTML();

function testListReturnsMultipleHTMP(){
  // note3 = new Note();
  var notelist = new Notelist
  var noteListView = new Notelistview(notelist)
  notelist.addNote("hello");
  assert.isEq(noteListView.doHTML(), "<ul><li><div>hello</div></li></ul>");
  notelist.addNote("goodbye");
  assert.isEq(noteListView.doHTML(), "<ul><li><div>goodbye</div></li></ul>");
}

testListReturnsMultipleHTMP();
