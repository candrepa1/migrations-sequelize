"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class transactions extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	transactions.init(
		{
			amount: DataTypes.INTEGER,
			accounts_id: DataTypes.INTEGER,
			transaction_types_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			underscored: true,
			modelName: "transactions",
		}
	);
	return transactions;
};
