<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <!-- Navbar -->
      <nav class="bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
        <div class="text-2xl font-bold text-white">sinKOSTan</div>
        <NuxtLink to="/user" class="text-white hover:text-blue-600">Dashboard</NuxtLink>
      </nav>
  
      <!-- Form Laporan Penghuni -->
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-3xl font-semibold mb-6 text-gray-800">Laporan Penghuni</h1>
        <form @submit.prevent="submitReport" class="bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Deskripsi Laporan:</label>
            <textarea
              v-model="report"
              rows="5"
              placeholder="Ceritakan masalahnya..."
              class="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Kirim Laporan
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        report: "",
      };
    },
    methods: {
      submitReport() {
        if (!this.report.trim()) {
          alert("Deskripsi laporan tidak boleh kosong!");
          return;
        }
  
        // Simpan laporan (dummy)
        console.log("Laporan Penghuni:", this.report);
  
        alert("Laporan berhasil dikirim!");
        this.report = "";
      },
    },
  };
  </script>
  