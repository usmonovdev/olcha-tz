<template>
  <section class="custom-border flex flex-col justify-between gap-4">
    <h1 class="text-[18px] p-4 bg-green/20 rounded-lg">
      Yangi topshiriq qo'shish
    </h1>
    <div class="flex flex-col gap-4 items-center">
      <input
        type="text"
        placeholder="Topshiriq nomi"
        class="w-full p-4 outline-none rounded-lg bg-neutral-800 focus:bg-green/20 transition-color duration-300"
        :value="title"
        @input="title = $event.target.value"
      />
      <textarea
        type="tel"
        placeholder="Topshiriq haqida"
        class="w-full p-4 outline-none rounded-lg bg-neutral-800 focus:bg-green/20 transition-color duration-300 max-h-[200px] min-h-[100px]"
        :value="desc"
        @input="desc = $event.target.value"
      >{{ desc }}</textarea>
      <button
        class="w-full py-4 px-6 bg-green hover:bg-[#166534] transitions-all duration-100 active:scale-95 rounded-lg max-w-[400px]"
        @click="handleAddProduct"
      >
        Qo`shish
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      desc: '',
    }
  },
  methods: {
    handleAddProduct() {
      const data = {
        title: this.title,
        desc: this.desc,
        id: Date.now(),
        completed: false
      }
      this.$emit("add", data)
      this.title = ''
      this.desc = ''
    }
  }
};
</script>

<style></style>
