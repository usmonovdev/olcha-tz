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
        
      />
      <textarea
        type="tel"
        placeholder="Topshiriq haqida"
        class="w-full p-4 outline-none rounded-lg bg-neutral-800 focus:bg-green/20 transition-color duration-300 max-h-[200px] min-h-[100px]"
        
      ></textarea>
      <button
        class="w-full py-4 px-6 bg-green hover:bg-[#166534] transitions-all duration-100 active:scale-95 rounded-lg max-w-[400px]"
      >
        Qo`shish
      </button>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style></style>
