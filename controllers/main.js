export const getIndex = (req, res) => {
  res.render("main/index", { title: "Home", current: "home" });
};

export const getAbout = (req, res) => {
  res.render("main/about", { title: "About Us", current: "about-us" });
};
export const getSavings = (req, res) => {
  res.render("main/savings", { title: "Savings", current: "savings" });
};
export const getLoans = (req, res) => {
  res.render("main/loans", { title: "Loans", current: "loans" });
};
export const getOthers = (req, res) => {
  res.render("main/others", { title: "Other Services", current: "others" });
};

export const getContact = (req, res) => {
  res.render("main/contact", { title: "Contact Us", current: "contact" });
};

export const getGallery = (req, res) => {
  res.render("main/gallery", { title: "Gallery", current: "gallery" });
};

export const getMembers = (req, res) => {
  res.redirect("/login");
};
export const getRegister = (req, res) => {
  res.render("auth/register", { title: "Register", current: "register" });
};
export const getLogin = (req, res) => {
  res.render("auth/login", { title: "Login", current: "login" });
};
