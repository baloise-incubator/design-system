import { paramCase } from 'param-case'
import { pascalCase } from 'pascal-case'
import { htmlBeautify } from './html'
import ComponentJson from '../../../public/assets/data/components.json'

export interface SourceCodeOptions {
  vue?: string
}

export const withSourceCode = (
  code: string,
  argTypes = {},
  args = {},
  comps = [],
  options: SourceCodeOptions = {},
  beautify = true,
) => {
  let template = filterVueSpecific(code, argTypes, args)
  if (beautify) {
    template = htmlBeautify(template)
  }

  return {
    docs: {
      source: {
        code: template,
      },
    },
    mySource: template,
    vueSource: vueCode(code, argTypes, args, comps, options.vue),
  }
}

const vueCode = (templateSource: string, argTypes = {}, args = {}, comps = [], setup = ''): string => {
  const replacing = ' v-bind="args"'
  const componentArgs = {}
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k]
    if (
      typeof val !== 'undefined' &&
      (t as any).table &&
      (t as any).table.category === 'props' &&
      val !== (t as any).defaultValue
    ) {
      componentArgs[k] = val
    }
  }

  const propToSource = (key, val) => {
    const type = typeof val
    switch (type) {
      case 'boolean':
        return val ? key : ''
      case 'string':
        return `:${key}="'${val}'"`
      default:
        return `:${key}="${val}"`
    }
  }

  let source = templateSource
    .replace('{{ args.content }}', (args as any).content || 'Content')
    .replace(
      replacing,
      Object.keys(componentArgs)
        .map(key => ' ' + propToSource(paramCase(key), args[key]))
        .join(''),
    )
    .replace(
      replacing,
      Object.keys(componentArgs)
        .map(key => ' ' + propToSource(paramCase(key), args[key]))
        .join(''),
    )

  const tags = ComponentJson.components.map(c => c.tag)
  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index]
    source = source.replaceAll(`<${tag}>`, `<${pascalCase(tag)}>`)
    source = source.replaceAll(`<${tag} `, `<${pascalCase(tag)} `)
    source = source.replaceAll(`</${tag}>`, `</${pascalCase(tag)}>`)
  }

  setup = setup.replaceAll(`Object(vue__WEBPACK_IMPORTED_MODULE_4__["ref"])`, `ref`)
  setup = setup.replaceAll(
    `Object(_components_vue_src_helpers__WEBPACK_IMPORTED_MODULE_5__[ /* element */ "a"])`,
    `element`,
  )

  return `<script setup lang="ts">
import {
${comps.map(c => `  ${c},`).join('\n')}
} from '@baloise/design-system-components-vue'
${setup}
</script>
<template>
  ${htmlBeautify(source)}
</template>`
}

const filterVueSpecific = (templateSource: string, argTypes = {}, args = {}): string => {
  const replacing = ' v-bind="args"'
  const componentArgs = {}
  for (const [k, t] of Object.entries(argTypes)) {
    const val = args[k]
    if (
      typeof val !== 'undefined' &&
      (t as any).table &&
      (t as any).table.category === 'props' &&
      val !== (t as any).defaultValue
    ) {
      componentArgs[k] = val
    }
  }

  const propToSource = (key, val) => {
    if (val === '') {
      return ''
    }
    const type = typeof val
    switch (type) {
      case 'boolean':
        return val ? key : ''
      case 'string':
      case 'number':
        return `${key}="${val}"`
      default:
        return `${key}="${val}"`
    }
  }

  return (
    templateSource
      // TODO: write regex to replace events
      .replace(' @balRejectedFile="onBalRejectedFile($event)"', '')
      .replace(' @click="openModal()"', '')
      .replace(' @click="closeModal()"', '')
      .replace(' @click="closeModal()"', '')
      .replace(' @click="checkA()"', '')
      .replace(' @click="checkB()"', '')
      .replace(' @click="checkA($event)"', '')
      .replace(' @click="checkB($event)"', '')
      .replace(' :value', ' value')
      .replace(' v-model="args.value"', '')
      .replace(' v-model="args.value"', '')
      .replace(' v-model="args.value"', '')
      .replace(' v-model="args.value"', '')
      .replace(' v-if="args.invalid"', '')
      .replace(` v-model="selectedA"`, '')
      .replace(` v-model="selectedB"`, '')
      .replace(` v-model="value"`, '')
      .replace(` @click="toggle()"`, '')
      .replace(` :scrollable`, ' scrollable')
      .replace(` size=""`, '')
      .replace(
        ` :class="{'has-background': args.hasBackground, 'has-sticky-footer': args.hasStickyFooter}"`,
        ' class="has-background has-sticky-footer"',
      )
      .replace(` :class="value === '1' ? 'has-background-blue-light':''"`, '')
      .replace(` :class="value === '2' ? 'has-background-blue-light':''"`, '')
      .replace(` :class="selectedA ? 'has-background-blue-light':''"`, '')
      .replace(` :class="selectedB ? 'has-background-blue-light':''"`, '')
      .replace(' :expanded="args.expanded"', (args as any).expanded === true ? ' expanded' : '')
      .replace(' :disabled="args.disabled"', (args as any).disabled === true ? ' disabled' : '')
      .replace(' :disabled="args.disabled"', (args as any).disabled === true ? ' disabled' : '')
      .replace(' :disabled="args.disabled"', (args as any).disabled === true ? ' disabled' : '')
      .replace(' :inverted="args.inverted"', (args as any).inverted === true ? ' inverted' : '')
      .replace(' :invalid="args.invalid"', (args as any).invalid === true ? ' invalid' : '')
      .replace(' :invalid="args.invalid"', (args as any).invalid === true ? ' invalid' : '')
      .replace(' :invalid="args.invalid"', (args as any).invalid === true ? ' invalid' : '')
      .replace(
        ` :color="args.invalid ? 'danger' : 'hint'"`,
        ` color="${(args as any).invalid === true ? 'danger' : 'hint'}"`,
      )
      .replace(' v-if="args.hasFieldMessage"', '')
      .replace('{{ args.content }}', (args as any).content || 'Content')
      .replace('{{ args.content }}', (args as any).content || 'Content')
      .replace('{{ args.content }}', (args as any).content || 'Content')
      .replace('{{ args.content }}', (args as any).content || 'Content')
      .replace('<span v-html="args.content"></span>', (args as any).content || 'Content')
      .replace(' :vertical="args.vertical"', ` vertical="${(args as any).vertical || false}"`)
      .replace(
        replacing,
        Object.keys(componentArgs)
          .map(key => ' ' + propToSource(paramCase(key), args[key]))
          .join(''),
      )
      .replace(
        replacing,
        Object.keys(componentArgs)
          .map(key => ' ' + propToSource(paramCase(key), args[key]))
          .join(''),
      )
      .replace(
        replacing,
        Object.keys(componentArgs)
          .map(key => ' ' + propToSource(paramCase(key), args[key]))
          .join(''),
      )
      .replace(
        replacing,
        Object.keys(componentArgs)
          .map(key => ' ' + propToSource(paramCase(key), args[key]))
          .join(''),
      )
  )
}
