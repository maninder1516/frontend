<template>
    <div>
        <h1>Tasks</h1>
        <Tasks :tasks="tasks" />
    </div>
</template>

<script>
import Tasks from '../components/Task/Tasks.vue';

export default {
  name: 'TaskView',
  components: {
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors appointment',
        day: 'March 3rd at 11:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 5th at 10:30',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shooping',
        day: 'March 7rd at 18:30',
        reminder: false,
      },
    ];
  },
};
</script>
