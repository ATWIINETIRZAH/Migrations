// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Teacher extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Teacher.init({
//     name: DataTypes.STRING,
//     subject: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Teacher',
//   });
//   return Teacher;
// };


const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Teacher extends Model {}

  Teacher.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "Teachers",
      timestamps: true, // Automatically adds createdAt and updatedAt
    }
  );

  return Teacher;
};
