$(document).ready(function () {
    console.log("ok");
    $('#content').masonry({
        itemSelector: '.post',
        columnWidth: '.col-md-3',
        percentPosition: true
    })
});