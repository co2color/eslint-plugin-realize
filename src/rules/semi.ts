// 实现eslint的semi规则

export const semi = {
  create(context) {
    return {
      Program(node) {
        const sourceCode = context.getSourceCode()
        const text = sourceCode.getText(node)
        const lines = text.split('\n')
        const lastLine = lines[lines.length - 1]
        if (lastLine.trim() !== '') {
          context.report({
            node,
            loc: {
              start: {
                line: lines.length,
                column: lastLine.length
              }
            },
            message: 'Missing semicolon'
          })
        }
      }
    }
  }
}