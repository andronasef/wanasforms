// @ts-check
import fs from 'fs'
import { googleFormsToJson } from 'react-google-forms-hooks'

// can use both full and shortened form url
const result = await googleFormsToJson('https://forms.gle/Je44jmE2VQAzwAPo6')

// save file from text
fs.writeFileSync('./src/form.json', JSON.stringify(result, null, 2))
