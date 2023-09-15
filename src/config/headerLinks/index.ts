export interface IHeaderLink {
  name: string;
  path: string;
}

const headerLinks = [
  {
    name: "HOME",
    path: "/"
  },
  {
    name: "POSTS",
    path: "/post"
  },
  {
    name: "USERS",
    path: "/user"
  }
]

export default headerLinks