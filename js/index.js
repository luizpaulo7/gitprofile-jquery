$(document).ready(function () {

    $.get({
        url: 'https://api.github.com/users/luizpaulo7'
    }).done(response => {

        var contentHtml = '';

        contentHtml += '<img src="' + response.avatar_url + '">';
        contentHtml += '<h1>' + response.name + '</h1>';
        contentHtml += '<p><a href="' + response.html_url + '">' + response.html_url + '</a></p>';
        contentHtml += '<p>location: ' + response.location + '</p>';
        contentHtml += '<div class="foll">';
        contentHtml += '<p>seguidores: ' + response.followers + '</p>';
        contentHtml += '<p>seguindo: ' + response.following + '</p>';
        contentHtml += '</div>';

        $('.content').append(contentHtml);
    });

});