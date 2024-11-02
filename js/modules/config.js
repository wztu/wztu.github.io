//configObj
export default {
  token: "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",
  userAndRepo: "wztu/wztu.github.io",
  branch: "master",
  path: "/tu",
  dns: "",
  ...JSON.parse(localStorage.getItem("config")) // 加载配置
}
