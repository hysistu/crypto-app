module.exports = () => {
  return {
    "/": { page: "/" },
    "/user/:id": { page: "/user/[id]" },
    "/users/list": { page: "/users/list" },
    announcements: { page: "announcements" },
  };
};
