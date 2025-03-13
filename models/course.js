// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Course extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Course.init({
//     name: DataTypes.STRING,
//     description: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Course',
//   });
//   return Course;
// };

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Model {}

  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "Courses",
      timestamps: true, // This will create createdAt and updatedAt columns
    }
  );

  return Course;
};
