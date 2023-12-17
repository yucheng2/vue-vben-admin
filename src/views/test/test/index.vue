<template>
  <a-button @click="showModal">打卡</a-button>
  <CropperModal2
    @register="register"
    @upload-success="handleUploadSuccess"
    :uploadApi="uploadApi"
    :circled="false"
    :src="sourceValue"
  />
</template>

<script setup lang="ts">
  import CropperModal2 from '@/components/Cropper/src/CropperModal2.vue';
  import { useModal } from '@/components/Modal';
  import { ref } from 'vue';
  import { useMessage } from '@/hooks/web/useMessage';

  const sourceValue = ref('');

  const [register, { openModal, closeModal }] = useModal();
  const { createMessage } = useMessage();

  function handleUploadSuccess({ source }) {
    sourceValue.value = source;
    createMessage.success('上传成功');
  }

  function showModal() {
    openModal();
  }

  function uploadApi() {}
</script>

<style scoped></style>
