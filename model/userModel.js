import connectDb from '../config/dbConnection.js';
import { Sequelize } from 'sequelize';


const User = connectDb.define('user',{
    name:{
        type: Sequelize.DataTypes.STRING,
        required: true,
    },
    email:{
        type: Sequelize.DataTypes.STRING,
        required: true,
    },
    phone:{
        type: Sequelize.DataTypes.STRING,
        required: true,
    },
},{
    freezeTableName: true,
    timestamps: true,
});

export default User;