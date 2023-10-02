<template>
  <section class="custom-border flex flex-col justify-between gap-4">
    <div
      v-if="projects.length > 0"
      :class="[project.completed ? 'bg-green/10' : 'bg-neutral-800']"
      class="p-4 rounded-lg flex flex-col gap-3"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-[18px]" v-if="project.id !== editProjectId">
          {{ project.title }}
        </h1>
        <h1 class="text-[18px] bg-green px-2 rounded-lg" v-else>
          Topshiriqni tahrirlash
        </h1>
        <div class="flex flex-row gap-2">
          <svg
            @click="handleEditProject(project)"
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="none"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            color="#000000"
          >
            <path
              :class="[
                project.id == editProjectId ? 'stroke-green' : 'stroke-white',
              ]"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.363 5.652 1.48-1.48a2 2 0 0 1 2.829 0l1.414 1.414a2 2 0 0 1 0 2.828l-1.48 1.48m-4.243-4.242-9.616 9.615a2 2 0 0 0-.578 1.238l-.242 2.74a1 1 0 0 0 1.084 1.085l2.74-.242a2 2 0 0 0 1.24-.578l9.615-9.616m-4.243-4.242 4.243 4.242"
            ></path>
          </svg>

          <svg
            @click="onCompleted(project.id)"
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="none"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            color="#000000"
          >
            <path
              :class="[project.completed ? 'stroke-green' : 'stroke-white']"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5 13 4 4L19 7"
            ></path>
          </svg>

          <svg
            @click="onDelete(project.id)"
            class="cursor-pointer fill-red-600"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#fff"
          >
            <path
              class="stroke-red-600"
              d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div
        v-if="project.id == editProjectId"
        class="flex flex-col gap-3 items-center"
      >
        <input
          type="text"
          :value="title"
          @input="title = $event.target.value"
          class="w-full p-4 outline-none rounded-lg bg-neutral-900/30 focus:bg-green/20 transition-color duration-300"
        />
        <textarea
          @input="desc = $event.target.value"
          class="w-full p-4 outline-none rounded-lg bg-neutral-900/30 focus:bg-green/20 transition-color duration-300 max-h-[200px] min-h-[100px]"
          >{{ desc }}</textarea
        >
        <div class="flex flex-row gap-3 w-full justify-end">
          <button
            class="w-fit py-4 px-6 bg-neutral-900/30 transitions-all duration-100 active:scale-95 rounded-lg"
            @click="this.editProjectId = 0"
          >
            Bekor qilish
          </button>
          <button
            class="w-fit py-4 px-6 bg-green hover:bg-[#166534] transitions-all duration-100 active:scale-95 rounded-lg"
            @click="saveUpdating"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
    <div v-else class="h-[100px] flex items-center justify-center">
      <p class="text-center px-2 rounded-lg bg-red-600/20">
        Topshiriqlar topilmadi!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      editProjectId: 0,
      title: "",
      desc: "",
      completed: Boolean,
      id: Number,
    };
  },
  methods: {
    // onLike(id) {
    //   this.$emit("like", id);
    // },
    // onViewed(id) {
    //   this.$emit("viewed", id);
    // },
    onCompleted(id) {
      this.$emit("completed", id)
    },
    onDelete(id) {
      this.$emit("delete", id);
    },
    handleEditProject(data) {
      this.editProjectId = data.id;
      this.title = data.title;
      this.desc = data.desc;
      this.completed = data.completed;
      this.id = data.id;
    },
    saveUpdating() {
      const updatedProject = {
        id: this.id,
        title: this.title,
        desc: this.desc,
        completed: this.completed,
      };
      this.$emit("updatedProject", updatedProject);
      this.editProjectId = 0;
    },
  },
};
</script>
<style></style>
