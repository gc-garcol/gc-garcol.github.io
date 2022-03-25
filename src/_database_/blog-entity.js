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
  },
  "20220324-01": {
    id: "20220324-01",
    title: "[Leetcode] unique-paths",
    description: "",
    url: "/blog/20220324-01_leetcode_unique-paths",
    status: 'DONE',
    tags: ["leetcode", "algorithm", "dynamic programming"]
  },
  "20220324-02": {
    id: "20220324-02",
    title: "[Leetcode] container-with-most-water",
    description: "",
    url: "/blog/20220324-02_leetcode_container-with-most-water",
    status: 'PROCESSING',
    tags: ["leetcode", "algorithm", "dynamic programming"]
  },
  "20220324-03": {
    id: "20220324-03",
    title: "Genetic algorithm",
    description: "",
    url: "/blog/20220324-03_genetic-algorithm",
    status: 'DONE',
    tags: ["algorithm", "AI"]
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
    postIDs: ["20220323-02", "20220324-01", "20220324-02", "20220324-03"],
    tagStyles: {
      background: '#cce7e1'
    }
  },
  ["leetcode"]: {
    name: "leetcode",
    postIDs: ["20220324-01", "20220324-02"],
    tagStyles: {
      background: '#fce4ec'
    }
  },
  ["dynamic programming"]: {
    name: "dynamic programming",
    postIDs: ["20220324-01", "20220324-02"],
    tagStyles: {
      background: 'rgb(216 190 176)'
    }
  },
  ["AI"]: {
    name: "AI",
    postIDs: ["20220324-03"],
    tagStyles: {
      background: '#faf09f'
    }
  }
}