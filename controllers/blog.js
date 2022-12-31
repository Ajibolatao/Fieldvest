export const getBlog = (req, res) => {
  res.render("blog/index", { title: "Blog", current: "blog" });
};

