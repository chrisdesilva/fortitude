exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "https://crossfitstrive.net/*",
    toPath: "https://www.crossfitstrivebastrop.com/:splat",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.crossfitstrive.net/*",
    toPath: "https://www.crossfitstrivebastrop.com/:splat",
    isPermanent: true,
    force: true,
  })
}
