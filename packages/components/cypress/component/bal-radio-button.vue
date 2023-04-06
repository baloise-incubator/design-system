<script setup lang="ts">
import { BalRadioGroup, BalRadio, BalRadioButton, BalItem } from '../../.storybook/vue/generated/components'
</script>

<template>
  <BalRadioGroup>
    <BalRadioButton>
      <BalItem>
        <BalRadio name="radio-test" value="1" label="Radio 1"></BalRadio>
      </BalItem>
    </BalRadioButton>
    <BalRadioButton>
      <BalItem>
        <BalRadio name="radio-test" value="2" label="Radio 2"></BalRadio>
      </BalItem>
    </BalRadioButton>
    <BalRadioButton>
      <BalItem>
        <BalRadio name="radio-test" value="3" label="Radio 3"></BalRadio>
      </BalItem>
    </BalRadioButton>
  </BalRadioGroup>
</template>
