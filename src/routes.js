

const PATHS = {
  home: {
      path: "/",
      template: home(),
  },
  book: {
      path: "/book",
      template: book(),
  },
  about: {
      path: "/about",
      template: about(),
  },
  contact: {
      path: "/contact",
      template: notfound(),
  },
  error: {
      path: "",
      template: notfound(),
  }
}

export default PATHS;