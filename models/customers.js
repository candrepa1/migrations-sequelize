"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class customers extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	customers.init(
		{
			email: DataTypes.STRING,
			name: DataTypes.STRING,
			last_name: DataTypes.STRING,
		},
		{
			sequelize,
			underscored: true,
			modelName: "customers",
		}
	);
	return customers;
};
