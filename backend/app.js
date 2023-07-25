import { Express } from "express";
import { KEYS } from "./config/keys";
import { client } from "./config/database";
import morgan from "morgan";

const app = Express();

//Setup morgan to log API status
app.use(morgan('dev'))

//Setup middleware to parse JSON POST and PUT requests
app.use(Express.json())

app.listen(KEYS.PORT, async () => {
    console.log(`Server is listening for requests on port ${KEYS.PORT}`)


})