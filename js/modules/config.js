//configObj
export default {
  token: "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",
  userAndRepo: "tvwz/img",
  branch: "master",
  path: "/img",
  dns: "",
  ...JSON.parse(localStorage.getItem("config")) // 加载配置
}
