"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class transaction_types extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	transaction_types.init(
		{
			type: DataTypes.STRING,
		},
		{
			sequelize,
			underscored: true,
			modelName: "transaction_types",
		}
	);
	return transaction_types;
};
