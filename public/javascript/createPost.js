const { response } = require("express");

async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#post-title-input").nodeValue.trim();
    const content = document.querySelector("#post-content-textarea").nodeValue.trim();

    if (title && content) {
        const responce = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
}

document
.querySelector("#add-post-form")
.addEventListener("submit", createPostHandler);