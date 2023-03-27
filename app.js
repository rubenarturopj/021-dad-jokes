const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// console.log(btn, result);

btn.addEventListener("click", async () => {
    console.log("button was clicked");
    fetchDadJoke();
});

const fetchDadJoke = async () => {
    result.textContent = "Loading..."; // placeholder while the joke loads in case internet isnt fast

    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "learning app",
            },
        });

        if (!response.ok) {
            throw new Error("there was an error");
        }
        // console.log(response);
        const data = await response.json();
        // console.log(data);

        result.textContent = data.joke;
    } catch (error) {
        console.log(error);
        result.textContent =
            "Sorry, there was an error while fetching the joke, please try again.";
    }
};

fetchDadJoke(); // so it triggers when the page loads
