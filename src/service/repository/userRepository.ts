// var Model = require("../models");
import db  from "../../database/models"


const _findOneEmail = (email:string) => {
    return db.User.findOne({
        where: { email:email },
    });
}
