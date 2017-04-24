$(document).ready(function () {
    var source = $("#girl-template").html();
    var girlTemplate = Handlebars.compile(source);

    $.ajax({
        method: "get",
        url: "/api/post/getAll"
    }).then(function (data) {
        var listContent = girlTemplate(data.data);
        console.log(data.data);
        $('#content').html(listContent);

        $('#content').masonry({
            itemSelector: '.post',
            columnWidth: '.col-md-3',
            percentPosition: true
        });

        $('#content').imagesLoaded().progress(function () {
            $('#content').masonry('layout');
        });


    }).fail(function (err) {
        console.log(err);
    })

});