<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <!-- Navbar -->
      <nav class="bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
        <div class="text-2xl font-bold text-white">sinKOSTan</div>
        <NuxtLink to="/user" class="text-white hover:text-blue-600">Dashboard</NuxtLink>
      </nav>
  
      <!-- Form Laporan Fasilitas -->
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-3xl font-semibold mb-6 text-gray-800">Laporan Fasilitas</h1>
        <form @submit.prevent="submitFacilityReport" class="bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Deskripsi Kerusakan:</label>
            <textarea
              v-model="facilityReport"
              rows="5"
              placeholder="Deskripsikan kerusakan fasilitas..."
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
        facilityReport: "",
      };
    },
    methods: {
      submitFacilityReport() {
        if (!this.facilityReport.trim()) {
          alert("Deskripsi kerusakan tidak boleh kosong!");
          return;
        }
  
        // Simpan laporan (dummy)
        console.log("Laporan Kerusakan Fasilitas:", this.facilityReport);
  
        alert("Laporan berhasil dikirim!");
        this.facilityReport = "";
      },
    },
  };
  </script>
  