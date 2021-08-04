// var Model = require("../models");
// import db  from "../../database/models"
// import  User from  "../../database/models/user"
import User from '../../database/models/test'

const _findOneEmail = (email:string) => {
    return User.findOne({});
}

const _getUser = () => {
    return User.findAndCountAll().
    then((data:any) =>{return data});
}

module.exports = {
    _getUser,
    _findOneEmail
}
