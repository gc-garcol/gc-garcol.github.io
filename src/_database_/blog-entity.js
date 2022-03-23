export const blogs = {
  "20220323-01": {
    id: "20220323-01",
    title: "Understanding bitwise operators",
    description: "",
    url: "/blog/20220323-01_understanding-bitwise-operators",
    status: 'DONE',
    tags: ["bitwise"]
  },
  "20220323-02": {
    id: "20220323-02",
    title: "Snowflake algorithm",
    description: "",
    url: "/blog/20220323-02_snowflake-algorithm",
    status: 'PROCESSING',
    tags: ["bitwise", "algorithm"]
  }
}

export const tags = {
  ["bitwise"]: {
    name: "bitwise",
    postIDs: ["20220323-01", "20220323-02"],
    tagStyles: {
      background: '#fbeecc'
    }
  },
  ["algorithm"]: {
    name: "algorithm",
    postIDs: ["20220323-02"],
    tagStyles: {
      background: '#cce7e1'
    }
  }
}