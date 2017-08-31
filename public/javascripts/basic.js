/**
 * Created by Truth on 2017/8/31.
 * 界面的初始显示
 */
// 随机获取一张图片
var imageNum = 5;
var curIndex = (Math.floor(Math.random() * 10)) % imageNum + 1;
var imageURL = "/images/" + curIndex + ".jpg";
var wrapper = $("#wrapper");
// wrapper.fadeIn(1000);
wrapper.css("background", 'url("' + imageURL + '") no-repeat center');
wrapper.css('background-size', 'cover');

// var autoShow;
// var curIndex = 0;
// var imageNum = 5;
// 设置自动播放
// function backgroundAutoShow() {
//     autoShow = setInterval(function () {
//         showImage();
//     },5000)
// }
//
// // 图片轮播
// function showImage() {
//     console.log(curIndex);
//     curIndex = curIndex % imageNum + 1;
//     console.log('url("/images/' + curIndex + '.jpg") no-repeat center');
//     var imageURL = "/images/" + curIndex + ".jpg";
//     var body = $("body");
//     // body.animate({"background": 'url("' + imageURL + '") no-repeat center'}, 1000);
//     body.css("background", 'url("' + imageURL + '") no-repeat center');
//     body.css('background-size', 'cover');
// }







/*********************************************************************************************/
// 事件

// backgroundAutoShow();
