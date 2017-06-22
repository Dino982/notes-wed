function testListReturnsHTML(){
  notelist.addNote("I hate bowling");
  assert.isEq(notelist.doHTML(), "<ul><li><div>I hate bowling</div></li></ul>");
}

testListReturnsHTML();

function testListReturnsEmptyHTML(){
  notelist2 = new Notelist();
  notelist2.addNote("");
  assert.isEq(notelist2.doHTML(), "<ul><li><div></div></li></ul>");
}

testListReturnsEmptyHTML();

function testListReturnsMultipleHTMP(){
  note3 = new Note();
  notelist3 = new Notelist();
  notelist3.addNote("hello");
  assert.isEq(notelist3.doHTML(), "<ul><li><div>hello</div></li></ul>");
  notelist3.addNote("goodbye");
  assert.isEq(notelist3.doHTML(), "<ul><li><div>goodbye</div></li></ul>");
}

testListReturnsMultipleHTMP();
