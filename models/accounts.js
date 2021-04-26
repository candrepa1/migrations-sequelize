"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Accounts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Accounts.init(
		{
			balance: DataTypes.INTEGER,
			date_opened: DataTypes.DATEONLY,
			account_types_id: DataTypes.INTEGER,
			customers_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			underscored: true,
			modelName: "Accounts",
		}
	);
	return Accounts;
};
