import { mkdirSync, readFileSync, writeFileSync } from 'fs'

const main = async () => {
  const data = readFileSync('README.md')
  mkdirSync('docs', { recursive: true })
  writeFileSync('docs/index.md', data)
}

main().catch(console.error)
