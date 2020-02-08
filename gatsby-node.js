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
  createRedirect({
    fromPath: "https://www.crossfitstrive.net/class-schedule",
    toPath: "/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.crossfitstrive.net/about-us",
    toPath: "/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.crossfitstrive.net/getting-started",
    toPath: "/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.crossfitstrive.net/nutritional-coaching",
    toPath: "/",
    isPermanent: true,
    force: true,
  })
}
