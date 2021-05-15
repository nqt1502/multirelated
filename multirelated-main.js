(function() {

  var jumlah = 2;

let post = document.querySelectorAll(".post-body p"),
  a = jumlah + 1,
  b = post.length / a;
c = Array.from({
  length: jumlah
}, (_0x67aex4, _0x67aex5) => _0x67aex5 + 1);
for (let d = 0; d < c.length; d++) {
  let e = c[d],
      f = parseInt((b * e)),
      g = document.createElement("div");
  g.className = "ignielMultiRelated";
  if (post[f].nodeName == "P") {
      post[f].parentNode.insertBefore(g, post[f])
  } else {
      post[f].parentNode.insertBefore(g, post[f].nextSibling)
  }
}

})();

var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
function related_results_labels(_0x941ax5) {
  for (var _0x941ax6 = 0; _0x941ax6 < _0x941ax5.feed.entry.length; _0x941ax6++) {
      var _0x941ax7 = _0x941ax5.feed.entry[_0x941ax6];
      relatedTitles[relatedTitlesNum] = _0x941ax7.title.$t;
      for (var _0x941ax8 = 0; _0x941ax8 < _0x941ax7.link.length; _0x941ax8++) {
          if (_0x941ax7.link[_0x941ax8].rel == "alternate") {
              relatedUrls[relatedTitlesNum] = _0x941ax7.link[_0x941ax8].href;
              relatedTitlesNum++;
              break
          }
      }
  }
}
function removeRelatedDuplicates() {
  var _0x941axa = new Array(0);
  var _0x941axb = new Array(0);
  for (var _0x941ax6 = 0; _0x941ax6 < relatedUrls.length; _0x941ax6++) {
      if (!contains(_0x941axa, relatedUrls[_0x941ax6])) {
          _0x941axa.length += 1;
          _0x941axa[_0x941axa.length - 1] = relatedUrls[_0x941ax6];
          _0x941axb.length += 1;
          _0x941axb[_0x941axb.length - 1] = relatedTitles[_0x941ax6]
      }
  };
  relatedTitles = _0x941axb;
  relatedUrls = _0x941axa
}
function contains(_0x941axd, _0x941axe) {
  for (var _0x941axf = 0; _0x941axf < _0x941axd.length; _0x941axf++) {
      if (_0x941axd[_0x941axf] == _0x941axe) {
          return true
      }
  };
  return false
}
