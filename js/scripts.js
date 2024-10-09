// Function to change the main image when a thumbnail is clicked
function changeImage(element) {
    var mainImage = document.getElementById("mainProductImage");
    var modalImage = document.getElementById("modalImage");
    mainImage.src = element.src; // Set the source of the main image to the clicked thumbnail
    modalImage.src = element.src; // Also update the modal image
}

// Function to open the image modal when the main image is clicked
function openModal(element) {
    var modalImage = document.getElementById("modalImage");
    modalImage.src = element.src; // Set the source of the modal image to the clicked image
    var modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show(); // Show the modal
}

// Close modal when clicking outside the image
document.getElementById('modalBody').addEventListener('click', function (event) {
    var modalImage = document.getElementById('modalImage');
    var modal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
    modal.hide();
});


// Function to load video source when the user clicks on the video
function loadVideo(videoElement) {
    var source = videoElement.querySelector('source');
    if (!source.src) {
        source.src = source.getAttribute('data-src'); // Load the actual video source
        videoElement.load(); // Reload the video with the new source
        videoElement.play(); // Optionally, you can autoplay the video after loading
    }
}