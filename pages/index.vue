<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Navbar -->
    <nav class="bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
      <div class="text-2xl font-bold text-white">sinKOSTan</div>
      <div class="space-x-4">
        <NuxtLink to="/facility" class="text-white hover:text-blue-600">Fasilitas</NuxtLink>
        <NuxtLink to="/rules" class="text-white hover:text-blue-600">Peraturan Kost</NuxtLink>
      </div>
    </nav>

    <!-- Form Login -->
    <div class="flex flex-grow items-center justify-center bg-black bg-opacity-50">
      <form @submit.prevent="handleLogin" class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Selamat Datang Warga!</h2>

        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Username</label>
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Masukkan username"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Masukkan password"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Role -->
        <div class="mb-6">
          <label for="role" class="block text-gray-700">Role</label>
          <select
            v-model="role"
            id="role"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="admin">Admin</option>
            <option value="penghuni">Penghuni</option>
          </select>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">&copy; 2024 sinKOSTan. P04. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      role: 'admin',
      backgroundImage:
        'https://previews.123rf.com/images/siraphol/siraphol1901/siraphol190100441/114919195-beautiful-comfortable-white-pillow-on-bed-with-light-lamp-decoration-in-bedroom-interior.jpg', // Gantilah URL ini
    };
  },
  methods: {
    handleLogin() {
      // Logika autentikasi sederhana
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Role:', this.role);
    },
  },
};
</script>
