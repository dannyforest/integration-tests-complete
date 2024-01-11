<template>
  <div class="profile" v-if="user">
    <h2>User Profile</h2>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>

    <!-- Back button to navigate back to UserList -->
    <router-link :to="{ name: 'UserList' }">Back to User List</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserProfile",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchUserDataById(this.$route.params.id);
  },
  methods: {
    async fetchUserDataById(userId) {
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

      try {
        const response = await axios.get(apiUrl);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  },
};
</script>
