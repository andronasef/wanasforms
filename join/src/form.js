// @ts-check
import fs from 'fs'
import { googleFormsToJson } from 'react-google-forms-hooks'

// can use both full and shortened form url
const result = await googleFormsToJson(
  'https://docs.google.com/forms/d/e/1FAIpQLSc-y3-L5sg-oke74YSYGpL6dc_ZzfVKoog_w1DQLDAyRilemw/viewform'
)

// save file from text
fs.writeFileSync('./src/form.json', JSON.stringify(result, null, 2))
