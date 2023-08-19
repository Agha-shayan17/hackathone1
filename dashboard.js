const createPostButton = document.getElementById("btn");
const titleInput = document.getElementById("title");
const conveyInput = document.getElementById("convey");
const postsContainer = document.getElementById("posts");

createPostButton.addEventListener("click", function () {
    const title = titleInput.value;
    const convey = conveyInput.value;

    if (title && convey) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${title}</h2>
            <p>${convey}</p>
        `;
        postsContainer.appendChild(postElement);

        // Clear input fields
        titleInput.value = "";
        conveyInput.value = "";
    }
});
