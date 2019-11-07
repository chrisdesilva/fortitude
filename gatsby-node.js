exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: 'https://crossfitstrive.net/*', toPath: 'https://crossfitstrive.net/:splat', isPermanent: true, force: true })
}