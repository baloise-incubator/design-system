/**
 * archive icons
 * --------------------------------------
 * This script creates a zip file out of the svg icons for the documentation
 */

const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const log = require('./utils/log')

const DIRNAME = path.normalize(__dirname);
const PACKAGE = path.join(DIRNAME, "../packages/maps");

const main = async () => {
  await log.title('maps: archive')

  const docsDir = path.join(PACKAGE, 'dist')
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir)
  }

  const output = fs.createWriteStream(path.join(docsDir, 'map-icons.zip'))
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  })

  output.on('close', function () {
    log.success('ZIP file created with ' + archive.pointer() + ' bytes')
  })

  archive.pipe(output)

  archive.glob('*.svg', { cwd: path.join(PACKAGE, 'markers') })
  archive.finalize()
}

main()
