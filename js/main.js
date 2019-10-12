console.log("Hello World!");

/* Write out psuedo code
Constants(Things that don't change)
content
button
Variables (thigns that cange)
if text is showing
Functions (actions)
WHEN tap (or click) on BUTTON THEN toggleText
*/

function toggleText(event) {
    console.log(!!event.target.parentNode.children[1].style.display);
    if (event.target.parentNode.children[1].style.display) {
        // if there is some string
        event.target.parentNode.children[1].style.display = "";
    } else {
        event.target.parentNode.children[1].style.display = "none";
    }
}


