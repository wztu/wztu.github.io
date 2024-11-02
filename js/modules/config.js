//configObj
export default {
  token: "",
  userAndRepo: "wztu/wztu.github.io",
  branch: "master",
  path: "/tu",
  dns: "",
  ...JSON.parse(localStorage.getItem("config")) // 加载配置
}
