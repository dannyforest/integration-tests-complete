<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'UserProfile', params: { id: user.id } }">{{ user.name }}</router-link>
      </li>
    </ul>
    <router-view @user-selected="handleUserSelected" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    handleUserSelected(user) {
      console.log(`Selected User: ${user.name}`);
    },
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
