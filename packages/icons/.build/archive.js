/**
 * archive icons
 * --------------------------------------
 * This script creates a zip file out of the svg icons for the documentation
 */

const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const log = require('../../../.build/log')

const main = async () => {
  await log.title('icons: archive')

  const docsDir = path.join(__dirname, '../generated')
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir)
  }

  const output = fs.createWriteStream(path.join(docsDir, 'icons.zip'))
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  })

  output.on('close', function () {
    log.success('ZIP file created with ' + archive.pointer() + ' bytes')
  })

  archive.pipe(output)

  archive.glob('*.svg', { cwd: path.join(__dirname, '../svg') })
  archive.finalize()
}

main()
