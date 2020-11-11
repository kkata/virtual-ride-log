exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allStravaActivity {
        nodes {
          activity {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("faild to create details", result.errors)
  }

  const details = result.data.allStravaActivity.nodes

  details.forEach(detail => {
    actions.createPage({
      path: String(detail.activity.id),
      component: require.resolve("./src/templates/detail.js"),
      context: {
        id: detail.activity.id,
      },
    })
  })
}
