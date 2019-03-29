hexo.extend.tag.register('shcode', function (args) {
    var a = args[0];
    if (a == undefined) {
        a = "html";
    }
    if (a.indexOf(':') != -1) {
        var b = a.split(':');
        a = b[1];
    }
    return '<pre class="brush: ' + a + '">';
});

hexo.extend.tag.register('endshcode', function (args) {
    return '</pre>';
});