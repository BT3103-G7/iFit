<template>
  <div class="modal-content">
    {{ data.information }}
    <button @click="$emit('close')">Cancel</button>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>