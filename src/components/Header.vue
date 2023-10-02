<template>
  <section class="custom-border flex flex-col justify-between gap-4">
    <h1 class="text-[18px] p-4 bg-green/20 rounded-lg">
      Barchasi: <span class="font-medium">{{ projects }}</span>
    </h1>
    <h1 class="text-[18px] p-4 bg-green/20 rounded-lg">
      Bajarildi: <span class="font-medium">{{ completed }}</span>
    </h1>
  </section>
</template>
<script>
export default {
  props: {
    projects: {
      type: Number,
      required: true
    },
    completed: {
      type: Number,
      required: true
    }
  }
};
</script>
<style></style>
