var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	flash = require("connect-flash"),
	methodOverride = require("method-override"),
	LocalStrategy = require("passport-local"),
	Campground = require("./models/campground"),
	Comment = require("./models/comment"),
	User = require("./models/user");
seedDB = require("./seeds");
// mongoose.connect("mongodb://localhost/yelp_camp_v10", {
//	mongodb://<dbuser>:<dbpassword>@ds245277.mlab.com:45277/yelpcamp_v11
	mongoose.connect("mongodb://username:password@ds245277.mlab.com:45277/yelpcamp_v11", {
	useMongoClient: true
});

var commentRoutes = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");

//Passport Configuration
app.use(require("express-session")({
	secret: "This is new secret code for encoding and decoding",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flash());
app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/public/cssjs"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
	extended: true
}));

// seedDB();

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.listen(process.env.PORT, process.env.IP, function () {
	console.log("YelpCamp Server Started!");
});
