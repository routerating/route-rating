export default args => {
  const lambda = args.lambda
  delete args.lambda

  return {
    input: `src/handlers/${
      lambda.charAt(0).toLowerCase() + lambda.slice(1)
    }.js`,
    output: {
      file: `../amplify/backend/function/${lambda}/src/index.js`,
      format: 'cjs',
    },
  }
}
