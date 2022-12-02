$("#btn").click(function () {
    var url = "https://636752e279b0914b75de761f.mockapi.io/users";
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            var $jsontip = $("#jsonTip");
            var strHTML = "";
            $jsontip.empty();
            $.each(data, function (infoIndex, info) {
                strHTML += String.raw`
                <div class="card">
                    <h2>${info["name"]}</h2>
                    <img src="${info["avatar"]}" alt="">
                </div>
                `
            })
            $jsontip.html(strHTML);
        }
    }
});

// 时间戳：1637244864707
/* 时间戳转换为时间 */
function timestampToTime(timestamp) {
    timestamp = timestamp ? timestamp : null;
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
}


