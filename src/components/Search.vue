<template>
  <section class="custom-border flex flex-col gap-4">
    <input
      type="text"
      placeholder="Qidirish..."
      class="w-full p-4 outline-none rounded-lg bg-neutral-800 focus:bg-green/20 transition-color duration-300"
    />
    <div
      class="flex sm:flex-row flex-col justify-between gap-4"
    >
      <button
        v-for="button in buttons"
        :key="button.id"
        class="w-full py-4 px-6 transitions-all duration-100 active:scale-95 rounded-lg"
        
        :class="[
          'all' == button.value
            ? 'bg-green hover:bg-[#166534]'
            : 'bg-neutral-800 hover:bg-neutral-900/30',
        ]"
      >
        {{ button.title }}
      </button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      filter: "all",
      buttons: [
        {
          id: 1,
          value: "all",
          title: "Barcha Topshiqlar",
        },
        {
          id: 2,
          value: "completed",
          title: "Bajarilgan",
        },
      ],
    };
  }
};
</script>
<style></style>
