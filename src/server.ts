const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
var path = require('path');

export const initServer = async () => {
    try {
        const { PORT } = process.env;
        
        const app = express();
        app.use(cookieParser());

        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, './'));
        app.use(express.static(path.join(__dirname, './')));

        app.get('/', (req: any, res: any) => {
            res.render('index')
        })
        app.listen(PORT, () => {
            console.log(`SERVER IS UP AND RUNNING ON ${PORT}`);
        });
    } catch (e) {
        throw e;
    }
};
initServer()