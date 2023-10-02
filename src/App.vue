<template>
  <section class="container-custom py-8 flex flex-col gap-8">
    <Search
      :type="type"
      :updateFilter="updateFilter"
      @searchvalue="handleSearch"
    />
    <div class="h-[0.01rem] bg-neutral-700 w-full"></div>
    <Header
      :projects="projects.length"
      :completed="projects.filter((e) => e.completed).length"
    />
    <Task
      :projects="searchProject(search, handleFilterProjects(projects, type))"
      @updatedProject="updateProject"
      @delete="handleDelete"
      @completed="handleCompleted"
    />
    <div class="h-[0.01rem] bg-neutral-700 w-full"></div>
    <NewTask @add="handleAddProject" />
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
          completed: false,
        },
        {
          id: 2,
          title: "Project 2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic voluptatibus voluptates recusandae consectetur veniam, voluptate explicabo quam vel perferendis.",
          completed: true,
        },
        {
          id: 3,
          title: "Project 3",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic voluptatibus voluptates recusandae consectetur veniam, voluptate explicabo quam vel perferendis.",
          completed: false,
        },
      ],
      type: "all",
      search: "",
    };
  },
  mounted() {
    if (localStorage.getItem("projects")) {
      try {
        this.projects = JSON.parse(localStorage.getItem("projects"));
      } catch (e) {
        localStorage.removeItem("projects");
      }
    }
  },
  methods: {
    saveProjects() {
      let parsed = JSON.stringify(this.projects);
      localStorage.setItem("projects", parsed);
    },
    updateProject(data) {
      this.projects.map((e) => {
        if (e.id == data.id) {
          e.id = data.id;
          e.completed = data.completed;
          e.desc = data.desc;
          e.title = data.title;
        }
      });
      this.saveProjects();
    },
    handleDelete(id) {
      this.projects = this.projects.filter((e) => e.id !== id);
      this.saveProjects();
    },
    handleCompleted(id) {
      this.projects.map((e) => {
        if (e.id == id) {
          e.completed = !e.completed;
        }
      });
      this.saveProjects();
    },
    handleAddProject(newProject) {
      if (newProject.title == 0 || newProject.desc == 0) {
        return;
      } else {
        this.projects.push(newProject);
        this.saveProjects();
      }
    },
    handleFilterProjects(arr, type) {
      if (type == "completed") {
        return arr.filter((e) => e.completed);
      }
      return arr;
    },
    updateFilter(type) {
      this.type = type;
    },
    handleSearch(search) {
      this.search = search;
    },
    searchProject(search, arr) {
      if (search.length == 0) {
        return arr;
      }
      return arr.filter((e) => e.title.toLowerCase().indexOf(search) > -1);
    },
  },
};
</script>
<style></style>
