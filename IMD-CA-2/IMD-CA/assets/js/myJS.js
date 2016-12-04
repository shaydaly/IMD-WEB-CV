/**
 * Created by Seamus on 03/12/2016.
 */
// Get the modal

    function displayImagePopUp(imageId) {
    var modal = document.getElementById('imageModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(imageId);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
    var span = document.getElementById("closeImage");

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}