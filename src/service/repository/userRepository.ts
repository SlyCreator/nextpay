import {sequelize} from "../../database/models";


// var Model = require("../models");
// const { Op, Sequelize} = require("sequelize");


const _findOneEmail = (email:string) => {
    return sequelize.User.findOne({
        where: { email:email },})}
