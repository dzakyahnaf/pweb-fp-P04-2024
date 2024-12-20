<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <!-- Navbar -->
      <nav class="bg-gray-800 shadow-md py-4 px-8 flex justify-between items-center">
        <div class="text-2xl font-bold text-white">sinKOSTan</div>
        <div class="space-x-4">
          <NuxtLink to="/user/sewa" class="text-white hover:text-blue-600">Sewa Kamar</NuxtLink>
          <NuxtLink to="/user/laporan/fasilitas" class="text-white hover:text-blue-600">Laporan Fasilitas</NuxtLink>
          <NuxtLink to="/user/laporan/penghuni" class="text-white hover:text-blue-600">Laporan Penghuni</NuxtLink>
        </div>
      </nav>
  
      <!-- Riwayat Tagihan -->
      <div class="flex-grow container mx-auto px-6 py-10">
        <h1 class="text-3xl font-semibold mb-6 text-gray-800">Riwayat Tagihan</h1>
        <table class="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr class="bg-gray-800 text-white text-left">
              <th class="px-6 py-4">Tanggal</th>
              <th class="px-6 py-4">Jumlah Tagihan</th>
              <th class="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(invoice, index) in invoices" :key="index" class="text-gray-700 border-b">
              <td class="px-6 py-4">{{ invoice.date }}</td>
              <td class="px-6 py-4">{{ formatCurrency(invoice.bill) }}</td>
              <td class="px-6 py-4">
                <span
                  :class="invoice.status === 'Lunas' ? 'text-green-500' : 'text-red-500'"
                  class="font-semibold"
                >
                  {{ invoice.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4 text-center">
          <p class="text-sm">&copy; 2024 sinKOSTan. P04.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserLandingPage",
    data() {
      return {
        invoices: [
          { date: "2024-01-01", bill: 6000000, status: "Lunas" },
          { date: "2024-04-01", bill: 12000000, status: "Belum Lunas" },
          { date: "2024-07-01", bill: 6000000, status: "Lunas" },
        ],
      };
    },
    methods: {
      formatCurrency(amount) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(amount);
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
  }
  </style>
  