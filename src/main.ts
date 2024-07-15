import { RuleTester } from 'eslint'

const ruleTester = new RuleTester()

ruleTester.run('no-foo', rule, {
  valid: [
    {
      code: 'const bar = 1;'
    }
  ],
  invalid: [
    {
      code: 'const foo = 1;',
      errors: [{ message: 'Unexpected foo' }]
    }
  ]
})