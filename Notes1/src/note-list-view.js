(function(exports) {

  function Notelistview(notelist) {
    this.notelist = notelist
  };


  Notelistview.prototype.doHTML = function () {
    var result;
    this.notelist.array.forEach(function(note) {
      result = "<ul><li><div>" + note.text + "</div></li></ul>";
    })
    return result;
  };

exports.Notelistview = Notelistview;

})(this);
