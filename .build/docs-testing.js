/**
 * utils - docs-json
 * --------------------------------------
 * This script reads the defined filter functions and creates
 * a JSON file with all the meta information for documentation
 * and code generations.
 */

const path = require('path')
const file = require('./utils/file')
const log = require('./utils/log')
const { createSourceFile, parseFunctionComment, filterModuleDeclaration, filterInterfaceDeclaration } = require('./utils/typescript')

const DIRNAME = path.normalize(__dirname);
const PACKAGE = path.join(DIRNAME, "../packages/components");
const PACKAGE_TESTING = path.join(DIRNAME, "../packages/testing");

const parseTypes = (fileContent, filePath) => {
  const sourceFile = createSourceFile(fileContent)
  const moduleDeclarationNode = filterModuleDeclaration(sourceFile.statements)
  const interfaceDeclarationNode = filterInterfaceDeclaration(moduleDeclarationNode.body.statements)

  const commands = []
  interfaceDeclarationNode.members.forEach(commandNode => {
    const commandComment = parseFunctionComment(commandNode, sourceFile)

    commands.push({
      name: commandNode.name.escapedText,
      description: commandComment,
      signature: commandNode.getText(sourceFile).replace(commandNode.name.escapedText, ''),
      path: filePath,
      component: filePath.split('/').pop().replace('.types.ts', ''),
    })
  })

  return commands
}

const run = async () => {
  await log.title('testing : docs-json')

  const pathToTypes = path.join(PACKAGE_TESTING, 'src/commands/**/bal-**.types.ts')
  let typeFilePaths = []
  let typeFileContents = []
  let commands = []

  try {
    typeFilePaths = await file.scan(pathToTypes)
  } catch (error) {
    log.error(`Could not find any files with the pattern = ${pathToTypes}`, error)
  }

  try {
    typeFileContents = await Promise.all(typeFilePaths.map(f => file.read(f)))
  } catch (error) {
    log.error(`Could not find any files with the pattern = ${pathToTypes}`, error)
  }

  commands = typeFileContents.map((m, i) => parseTypes(m, typeFilePaths[i])).reduce((acc, item) => [...acc, ...item], [])

  log.info(`Found ${commands.length} commands`)
  commands.forEach((c, i) => {
    if (c.description.length === 0) {
      log.warn(`Please add a description to the custom command ${c.name}.`)
    }
  })

  await file.makeDir(path.join(PACKAGE, 'public/assets/data'))
  await file.save(path.join(PACKAGE, 'public/assets/data/commands.json'), JSON.stringify(commands))
}

run()
