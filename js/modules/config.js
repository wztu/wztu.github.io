//configObj
export default {
  token: "secrets.MY_GITHUB_TOKEN",
  userAndRepo: "",
  branch: "master",
  path: "/img",
  dns: "",
  ...JSON.parse(localStorage.getItem("config")) // 加载配置
}
