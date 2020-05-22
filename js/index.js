$(document).ready(function () {

    $.ajax({
        url: 'https://api.github.com/users/luizpaulogroup',
        success: response => {
            
            var html;

            html += `<img src="${response.avatar_url}">`;
            html += `<h1>${response.name}</h1>`;
            html += `<p><a href="${response.html_url}">${response.html_url}</a></p>`;
            html += `<p>location: ${response.location}</p>`;
            html += `<div class="foll">`;
            html += `<p>seguidores: ${response.followers}</p>`;
            html += `<p>seguindo: ${response.following}</p>`;
            html += `</div>`;

            $('.content').append(html);
            
        }
    });

});
