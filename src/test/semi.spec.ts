import { RuleTester } from 'eslint'

import { semi } from '../rules/semi'

const ruleTester = new RuleTester()

ruleTester.run('semi', semi, {
  valid: [
    {
      code: 'const a = 1;'
    },
    {
      code: 'const a = 1;\n'
    },
    {
      code: 'const a = 1;\n\n'
    },
    {
      code: 'const a = 1;\n\n\n'
    }
  ],
  invalid: [
    {
      code: 'const a = 1',
      errors: [
        {
          message: 'Missing semicolon'
        }
      ]
    },
    {
      code: 'const a = 1\n',
      errors: [
        {
          message: 'Missing semicolon'
        }
      ]
    },
    {
      code: 'const a = 1\n\n',
      errors: [
        {
          message: 'Missing semicolon'
        }
      ]
    },
    {
      code: 'const a = 1\n\n\n',
      errors: [
        {
          message: 'Missing semicolon'
        }
      ]
    }
  ]
})