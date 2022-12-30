export const getIndex = (req, res) => {
   res.render("main/index", { title: 'Home' });
}

export const getAbout = (req, res) => {
  res.render("main/about", { title: "About Us" });
};
export const getSavings = (req, res) => {
  res.render("main/savings", { title: "Savings" });
};
export const getLoans = (req, res) => {
  res.render("main/loans", { title: "Loans" });
};
export const getOthers = (req, res) => {
  res.render("main/others", { title: "Other Services" });
};

export const getContact = (req, res) => {
  res.render("main/contact", { title: 'Contact Us' });
};

export const getGallery = (req, res) => {
  res.render("main/gallery", { title: 'Gallery' });
};

export const getMembers = (req, res) => {
  res.render("main/members", { title: 'Members' });
};