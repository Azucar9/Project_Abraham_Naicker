// Import necessary modules
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const fs = require("fs");
const { FORMERR } = require("dns");

//Specifies the path to a JSON file (users.json) where user data will be stored.
const userDataFile = "./users.json";


// Configures the Express app to use middleware for parsing URL-encoded data, typically used with HTML forms.
app.use(express.urlencoded({ extended: true }));


// Starts the server on port 3000 and logs a message when the server is successfully started.
app.listen(3000, () => {
    console.log("Server started on port 3000")
});


// Configures the Express app to use EJS(Embedded JavaScript) as the view engine.
// You can pass the data/information from the server to view and view engine will process the template, replacing placeholders with actual data before sending the HTML to the client.
app.set("view engine", "ejs");


// Renders the index.ejs view when the root ("/") route is accessed.
app.get("/", (req, res) => {
    res.render("index.ejs");
});


// REGISTRATION FORM
// Renders the register.ejs view with no error message when the "/register" route is accessed via a GET request.
app.get("/register", (req, res) => {
    res.render("register.ejs", { error: null});
});


// Handles the registration form submission when the "/register" route is accessed via a POST request.
app.post("/register", async (req, res) => {
    try {
        // Destructures the request body to extract the name, email, and password submitted in the registration form.
        const { name, email, password } = req.body;

        // Checks if any of the required fields are missing and renders the registration form with an error message if validation fails.
        if (!name || !email || !password) {
            return res.render("register.ejs", {
                error: "Please enter all fields.",
            });
        }

        // Uses bcrypt to securely hash the provided password with a salt factor of 10. 
        // A salt factor of 10 means that 2^10(1024) iterations of the underlying hashing algorithms will be performed making it very difficult and expensive for the attackers to decrypt it.
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creates a user object with a unique ID, name, email, and the hashed password.
        const user = {
            id: Date.now().toString(),
            name,
            email,
            password: hashedPassword,
        }

        // Reads existing user data from the specified JSON file and parses it into a JavaScript object.
        const userData = JSON.parse(fs.readFileSync(userDataFile));
        userData.push(user);

        // Adds the newly created user to the existing user data and writes the updated data back to the JSON file.
        fs.writeFileSync(userDataFile, JSON.stringify(userData));

        // Redirects the user to the "/login" page after successfully processing the registration.
        res.redirect("/login");
    } 
        // Catches any errors that may occur during the registration process, logs the error, and redirects the user back to the registration page ("/register").
        catch (error) {
        console.log(error);
        res.redirect("/register");
    }
});

// LOGIN FORM
app.get("/login", (req, res) => {
    res.render("login.ejs", { error: null });
})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.render("login.ejs", {
                error: "Please enter all fields.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            id: Date.now().toString(),
            email,
            password: hashedPassword,
        }

        const userData = JSON.parse(fs.readFileSync(userDataFile));
        userData.push(user);

        fs.writeFileSync(userDataFile, JSON.stringify(userData));

        res.render("#");
    } catch (error) {
        console.log(error);
        res.redirect("/login");
    }
})