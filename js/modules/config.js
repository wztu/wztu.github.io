//configObj
export default {
  token: process.env.MY_GITHUB_TOKEN,
  userAndRepo: "",
  branch: "master",
  path: "/img",
  dns: "",
  ...JSON.parse(localStorage.getItem("config")) // 加载配置
}
