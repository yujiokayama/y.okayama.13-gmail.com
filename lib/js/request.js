/**
 * 一覧取得
 */

function getDataReportList() {
  var url = "http://localhost:3000/datareportlist/";
  var xhr = new XMLHttpRequest();
  var dataReportList = document.querySelector("#dataReportList");

  xhr.open("GET", url, true);
  xhr.onload = function() {
    var data = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      dataReportList.insertAdjacentHTML("beforeend", data.dataReportList);
    } else {
      console.error(data);
    }
  };
  xhr.send(null);
}

window.addEventListener("load", function() {
  // GET
  getDataReportList();
});
