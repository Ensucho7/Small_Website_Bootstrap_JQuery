$(document).ready(function(){
    $("#searchBtn").click(function(){
        var user = $("#username").val();
        var url = "https://api.github.com/users/" + user + "/repos";

        $.get(url, function(data) {
            $("#repoTable tbody").empty();

            $.each(data, function(index, value) {

                var row = "<tr>";
                row += "<td>" + value.name + "</td>";
                row += "<td>" + value.description + "</td>";
                row += "<td>" + value.stargazers_count + "</td>";
                row += "</tr>";

                $("#repoTable tbody").append(row);
            });

            $("#repoTable").show();
        });
    });
});