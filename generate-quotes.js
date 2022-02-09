import yaml from 'js-yaml'
import fs from 'fs'

const warning = '// ⚠️ This file is auto-generated. Don\' t modify it!'

const languages = ['be', 'en']
languages.map(lang => {
  const quotes = yaml.load(fs.readFileSync(`./quotes.${lang}.yaml`, 'utf8'))
  fs.writeFileSync(`./api/quotes.${lang}.js`, `${warning}\nexport default ${JSON.stringify(quotes, null, 2)}`)
})
