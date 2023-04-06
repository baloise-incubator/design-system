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
const { createSourceFile, parseSelectorComment, filterModuleDeclaration, filterInterfaceDeclaration, filterDeclarationList, filterVariableStatement } = require('./utils/typescript')

const DIRNAME = path.normalize(__dirname);
const PACKAGE = path.join(DIRNAME, "../packages/components");
const PACKAGE_TESTING = path.join(DIRNAME, "../packages/testing");

const parseTypes = (fileContent, filePath) => {
  const sourceFile = createSourceFile(fileContent)
  const variableStatementsNode = filterVariableStatement(sourceFile.statements)
  const properties = variableStatementsNode[0].declarationList.declarations[0].initializer.properties

  const commands = {}
  properties.forEach(commandNode => {
    const commandComment = parseSelectorComment(commandNode, sourceFile)
    commands[commandComment[0]] = {
      description: commandComment[1],
    }
    // commands.push({
    //   name: commandComment[0],
    //   description: commandComment[1],
    // })
  })
  // console.log('commands ', commands)
  return commands
}

const run = async () => {
  await log.title('testing : docs-json')

  const pathToType = path.join(PACKAGE_TESTING, 'src/selectors/index.ts')
  let typeFilePaths = []
  let typeFileContents = []
  // let commands = []

  try {
    typeFilePaths = await file.scan(pathToType)
  } catch (error) {
    log.error(`Could not find any files with the pattern = ${pathToType}`, error)
  }

  try {
    typeFileContents = await Promise.all(typeFilePaths.map(f => file.read(f)))
  } catch (error) {
    log.error(`Could not find any files with the pattern = ${pathToType}`, error)
  }

  commands = typeFileContents.map((m, i) => parseTypes(m, typeFilePaths[i]))//.reduce((acc, item) => [...acc, ...item], [])
  // console.log('commands ', commands)
  // log.info(`Found ${commands.length} commands`)
  // commands.forEach((c, i) => {
  //   if (c.description.length === 0) {
  //     log.warn(`Please add a description to the custom command ${c.name}.`)
  //   }
  // })

  await file.makeDir(path.join(PACKAGE, 'public/assets/data'))
  await file.save(path.join(PACKAGE, 'public/assets/data/selectors.json'), JSON.stringify(commands))
}

run()
