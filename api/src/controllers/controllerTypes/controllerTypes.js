const {Type}= require("../../db")

const createTypesBD = async ({ nombre }) => {
    return await Type.create({nombre})
}
module.exports = {createTypesBD}