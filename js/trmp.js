$(function () {
    $('li a').on('click', function () {
        var title = $(this).find('img').attr('title');
        var number = $(this).find('img').attr('alt');
        if (title) { // 确保title属性存在
            sessionStorage.setItem('name', title.substring(0, title.length - 4));
            sessionStorage.setItem('url', $(this).attr('alt'));
            sessionStorage.setItem('number', number)
        }
    });
});