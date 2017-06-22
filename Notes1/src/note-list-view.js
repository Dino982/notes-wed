(function(exports) {

  function Notelistview() {
  }


  Notelist.prototype.doHTML = function () {
    var result;
    this.array.forEach(function(note) {
      result = "<ul><li><div>" + note.text + "</div></li></ul>";
    })
    return result;
  };

exports.Notelistview = Notelistview;

})(this);
