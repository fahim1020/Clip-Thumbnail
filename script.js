// *Show Toast
function showToast(msg, status) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "top",
    position: "left",
    style: {
      background:
        status === "success"
          ? "linear-gradient(to right, #4CAF50, #8BC34A)"
          : "linear-gradient(to right, #FF5722, #FFC107)",
    },
    onClick: function () {},
  }).showToast();
}

// *Fetch YouTube Thumbnail
function getThumbnail() {
  const url = document.getElementById("youtubeUrl").value;
  const videoId = extractVideoID(url);

  if (!videoId) {
    showToast("Please enter a valid YouTube URL.", "error");
    return;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const thumbnailContainer = document.getElementById("thumbnailContainer");
  thumbnailContainer.innerHTML = `
      <img src="${thumbnailUrl}" alt="YouTube Thumbnail" class="w-full rounded-md mb-4 shadow-lg" />
      <a href="${thumbnailUrl}" target="_blank"
         class="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition inline-block" 
       >
         Full View
      </a>
  `;
  showToast("Thumbnail fetched successfully.", "success");
}

// *Extract Video ID from URL
function extractVideoID(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length == 11 ? match[2] : null;
}

// *Change Background Color
function changeBackgroundColor() {
  //? Soft colors
  const colors = [
    "#fff2f2",
    "#f2f2ff",
    "#f2fff2",
    "#fff9f2",
    "#f2faff",
    "#f2fff9",
  ];
  let index = 0;

  setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 3000);
}

//? Call the function when the page loads
window.onload = function () {
  changeBackgroundColor();
};
