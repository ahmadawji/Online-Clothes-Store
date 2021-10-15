import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css"; //make sure to put bootstrap before the style file
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min"
import "./css/style.css";


/*One way to initialize all tooltips on a page would be to select them by their data-toggle attribute:*/
$(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
});