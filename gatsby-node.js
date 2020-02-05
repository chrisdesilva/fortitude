exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "https://crossfitstrive.net/*",
    toPath: "https://www.crossfitstrivebastrop.com/:splat 301!",
    isPermanent: true,
    force: true,
  })
}
