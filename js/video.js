var _name = sessionStorage.getItem("name"); // 从会话存储中获取视频名称
var url = sessionStorage.getItem("url"); // 从会话存储中获取视频URL
var number = sessionStorage.getItem("number"); // 从会话存储中获取视频集数

var _number = localStorage.getItem(_name); // 从本地存储中获取当前观看集数
var _time = localStorage.getItem(_name + 'time'); // 从本地存储中获取当前观看时间

function a(b) {
    for (var i = 1; i <= number; i++) {
        if (i == _number) {
            $('#' + i).css('background-color', '#ccffff');
            $('#' + i).css('color', '#66ccff');
        } else {
            $('#' + i).css('background-color', '#66ccff');
            $('#' + i).css('color', '#ffffff');
        }
    }
}

$(function () {
    $('title').text(_name); // 设置页面标题
    $('#title').text(_name); // 设置页面标题显示

    if (_number == null) {
        _number = 1; // 如果没有存储当前观看集数，则默认为第一集
        localStorage.setItem(_name, _number);
    }
    if (_time == null) {
        _time = 0; // 如果没有存储当前观看时间，则默认为0
        _time = Number(_time);
        
        localStorage.setItem(_name + 'time', _time);
    }

    for (var i = 1; i <= number; i++) {
        $('#number ul').append('<li id="' + i + '">第' + i + '集</li>'); // 动态生成集数列表
    } // 设置视频源
    a(_number);

    $('li').on('click', function () {
        _number = $(this).attr('id'); // 更新当前观看集数
        _number = Number(_number);
        localStorage.removeItem(_name);
        localStorage.setItem(_name, _number);
        $('#iframe').attr('src', $('#iframe').attr('src'));
        a(_number);
    })
    $('#prev').on('click', function () {
        _number -= 1; // 点击“上一集”按钮，更新当前观看集数
        _number = Number(_number);
        if (_number < 1) {
            _number = number;
        }
        _number = Number(_number);
        localStorage.removeItem(_name);
        localStorage.setItem(_name, _number);
        $('#iframe').attr('src', $('#iframe').attr('src'));
        a(_number);
    })
    $('#next').on('click', function () {
        _number += 1; // 点击“下一集”按钮，更新当前观看集数
        _number = Number(_number);
        if (_number > number) {
            _number = 1;
        }
        _number = Number(_number);
        localStorage.removeItem(_name);
        localStorage.setItem(_name, _number);
        $('#iframe').attr('src', $('#iframe').attr('src'));
        a(_number);
    })
});