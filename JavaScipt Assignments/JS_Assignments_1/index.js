function toggleFunction() {
  let likeImage = document.getElementById("like-image");
  let likeDialog = document.querySelector(".like-dialog");
  if (
    //If the icon color is white
    likeImage.src.match("https://cdn-icons-png.flaticon.com/512/126/126473.png")
  ) {
    //Then turn it into black
    likeImage.src = "https://cdn-icons-png.flaticon.com/128/739/739231.png";
  } else {
    //If the icon color is black
    likeImage.src = "https://cdn-icons-png.flaticon.com/512/126/126473.png";
  }

  if (
    likeImage.src.match("https://cdn-icons-png.flaticon.com/512/126/126473.png")
  ) {
    likeDialog.innerHTML = "I like this";
  } else {
    likeDialog.innerHTML = "I liked this";
  }
}
