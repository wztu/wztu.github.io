//configObj
export default {
  token: "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",
  userAndRepo: "wztu/wztu.github.io",
  branch: "master",
  path: "/img",
  dns: "",
  ...JSON.parse(localStorage.getItem("config")) // 加载配置
}
