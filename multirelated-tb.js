(function ignielMultiRelated() {

  var text = 'Xem thêm:';

let r = Math.floor((relatedTitles.length - 1) * Math.random());
let i = 0;
let jumlah = document.querySelectorAll(".ignielMultiRelated");
while (i < relatedTitles.length && i < jumlah.length) {
for (let a = 0; a < jumlah.length; a++) {
    jumlah[a].innerHTML = "<span class=\"content\"><span class=\"text\">" + text + "</span><a href=\"" + relatedUrls[r] + "\" title=\"" + relatedTitles[r] + "\">" + relatedTitles[r] + "</a></span><span class=\"icon\"></span>";
    if (r < relatedTitles.length - 1) {
        r++
    } else {
        r = 0
    };
    i++
}
}

})();
