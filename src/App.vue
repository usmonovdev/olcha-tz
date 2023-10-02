<template>
  <section class="container-custom py-8 flex flex-col gap-8">
    <Header />
    <Search />
    <NewTask />
    <Task
      :projects="projects"
      @updatedProject="updateProject"
      @delete="handleDelete"
      @completed="handleCompleted"
    />
  </section>
</template>
<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import NewTask from "./components/NewTask.vue";
import Task from "./components/Task.vue";
export default {
  components: {
    Header,
    Search,
    NewTask,
    Task,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic voluptatibus voluptates recusandae consectetur veniam, voluptate explicabo quam vel perferendis.",
          completed: true,
        },
        {
          id: 2,
          title: "Project 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic voluptatibus voluptates recusandae consectetur veniam, voluptate explicabo quam vel perferendis.",
          completed: false,
        },
        {
          id: 3,
          title: "Project 3",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic voluptatibus voluptates recusandae consectetur veniam, voluptate explicabo quam vel perferendis.",
          completed: false,
        },
      ],
    };
  },
  methods: {
    updateProject(data) {
      this.projects.map((e) => {
        if (e.id == data.id) {
          e.id = data.id;
          e.completed = data.completed;
          e.desc = data.desc;
          e.title = data.title;
        }
      });
    },
    handleDelete(id) {
      this.projects = this.projects.filter((e) => e.id !== id);
    },
    handleCompleted(id) {
      this.projects.map((e) => {
        if (e.id == id) {
          e.completed = !e.completed;
        }
      });
    },
  },
};
</script>
<style></style>
