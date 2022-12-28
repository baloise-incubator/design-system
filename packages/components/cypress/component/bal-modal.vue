<script setup lang="ts">
import { ref } from 'vue'

import {
  BalModal,
  BalModalHeader,
  BalButton,
  BalModalBody,
  BalButtonGroup,
} from '../../.storybook/vue/generated/components'

const modal = ref()

function openModal() {
  modal.value?.$el.open()
}

function closeModal() {
  modal.value?.$el.close()
}
</script>

<template>
<div>
  <BalModal ref="modal">
    <BalModalHeader>Modal Title</BalModalHeader>
    <BalModalBody>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing?</p>
      <BalButtonGroup position="right" reverse>
        <BalButton color="text" @click="closeModal()">Cancel</BalButton>
        <BalButton color="primary" @click="closeModal()">Okay</BalButton>
      </BalButtonGroup>
    </BalModalBody>
  </BalModal>
  <BalButton @click="openModal()" class="m-normal">Trigger a Modal</BalButton>
</div>
</template>
