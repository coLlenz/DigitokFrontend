<template>
  <div class="flex justify-center">
    <div class="sm:w-8/12 md:container md:mx-auto bg-white p-6 rounded-lg">
     <h3 class="text-center text-3xl font-bold font-inter pb-4">Log In</h3>
      <form @submit= "onSubmit" method="post">
        <div
          class="
            mb-4
            relative
            flex
            items-center
            focus:ring focus:border-blue-500
            rounded
          "
        >
          <label for="email" class="sr-only">Email</label>
          <input
            type="text"
            v-model="user.email"
            name="email"
            id="email"
            placeholder="Your email"
            class="bg-gray-100 w-full p-4 rounded-lg font-inter"
            value=""
          />
        </div>

        <div
          class="
            mb-4
            relative
            flex
            items-center
            focus:ring focus:border-blue-500
            rounded
          "
        >
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            v-model="user.password"
            name="password"
            id="password"
            placeholder="Choose a password"
            class="bg-gray-100 w-full p-4 rounded-lg font-inter"
            value=""
          />

          <!-- <a class="text-sm font-bold text-black hover:bg-blue-100 w-full bg-gray-100 px-2 py-1 mr-1 leading-normal cursor-pointer">show</a> -->
        </div>

        <div>
          <button
            type="submit"
            class="
              bg-black
              text-white
              ext-center
              px-4
              py-3
              font-medium
              w-full
              rounded-full
              font-inter
            "
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
        user: {
            email: "",
            password: "",
        },
    };
  },

  methods: {
    ...mapActions(['authlogin']),

     onSubmit(e) {
        e.preventDefault();
        this.authlogin(this.user);
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
