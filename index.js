const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv").config();

const app = express();
const { Customers } = require("./models");
const { Accounts } = require("./models");
const { AccountTypes } = require("./models");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Para poder leer los datos que envía el cliente con el formato URL Encoded
app.use(express.urlencoded({ extended: false }));

app.get("/customers", async (req, res) => {
	let results = await Customers.findAll({ raw: true });
	console.log(results);
	res.render("customers", { customers: results });
});

app.post("/customers", async (req, res) => {
	const { email, firstName, lastName } = req.body;
	try {
		let results = await Customers.create({
			email,
			name: firstName,
			last_name: lastName,
		});
		res.send("a new customer has been created");
	} catch (err) {
		console.log(err);
		res.status(400).send("new customer could not been added");
	}
});

app.get("/accounts", async (req, res) => {
	let results = await Accounts.findAll({ raw: true });
	let accountTypesResults = await AccountTypes.findAll({ raw: true });
	let customersResults = await Customers.findAll({ raw: true });
	res.render("accounts", {
		accounts: results,
		types: accountTypesResults,
		customers: customersResults,
	});
});

app.post("/accounts", async (req, res) => {
	const { accountType, customer } = req.body;
	try {
		let results = await Accounts.create({
			balance: 0,
			date_opened: "2020/01/05",
			account_types_id: accountType,
			customers_id: customer,
		});
		res.send("a new account has been created");
	} catch (error) {
		console.log(error);
		res.status(400).send("a new account could not be created");
	}
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server is up and listening on port", PORT));
