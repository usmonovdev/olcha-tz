<template>
  <section class=" flex flex-row justify-between gap-4">
    <h1 class="w-full text-[18px] p-4 bg-green rounded-lg">
      Barchasi: <span class="font-medium">{{ projects }}</span>
    </h1>
    <h1 class="w-full text-[18px] p-4 bg-green rounded-lg">
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
