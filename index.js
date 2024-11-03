const express  = require("express")
const config = require("config");

const port = process.env.PORT || config.get("PORT") || 7373;
const app = express();

app.get('/', (req, res) => {
 res.redirect(`https://ictimaishura.az`);
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});