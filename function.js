/**
 * Creates functionality to the nav tabs
 */
 $(document).ready(function() {
    // Activates when the about tab is clicked
    $("#about-tab").click(function() {
        $('#about-tab').tab('show');
    });

    // Activates when the education tab is clicked
    $("#education-tab").click(function() {
        $('#education-tab').tab('show');
    });

    // Activates when the awards tab is clicked
    $("#awards-tab").click(function() {
        $('#awards-tab').tab('show');
    });

    // Activates when the skills tab is clicked
    $("#skills-tab").click(function() {
        $('#skills-tab').tab('show');
    });

    // Activates when the projects tab is clicked
    $("#projects-tab").click(function() {
        $('#projects-tab').tab('show');
    });
});