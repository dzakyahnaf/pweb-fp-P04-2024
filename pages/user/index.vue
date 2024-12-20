<template>
    <div
      class="min-h-screen flex flex-col"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <!-- Navbar -->
      <nav class="py-4 px-8 flex justify-between items-center shadow-md" :style="{ backgroundColor: '#D3A78C' }">
        <div class="text-2xl font-bold text-white">kostFP04</div>
        <div class="flex space-x-8 items-center relative">
          <NuxtLink to="/user/sewa" class="text-white hover:underline">Rent</NuxtLink>
          <!-- Dropdown for Report -->
          <div class="relative group">
            <button class="text-white hover:underline focus:outline-none">Report</button>
            <div
              class="absolute hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-lg mt-2 right-0 w-40 border border-gray-300"
            >
              <NuxtLink to="/user/lapor/penghuni" class="px-4 py-2 hover:bg-gray-100">Penghuni</NuxtLink>
              <NuxtLink to="/user/lapor/fasilitas" class="px-4 py-2 hover:bg-gray-100">Fasilitas</NuxtLink>
            </div>
          </div>
          <div class="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </nav>
  
      <!-- Welcome Section -->
      <div class="flex-grow flex flex-col justify-center items-center text-white px-6">
        <h1 class="text-5xl font-bold mb-4">Welcome, (user)</h1>
        <div class="bg-white bg-opacity-50 rounded-lg shadow-lg p-6 w-full max-w-4xl">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Invoice History</h2>
          <table class="table-auto w-full text-left text-gray-800 border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-400">
                <th class="px-4 py-2 font-semibold">Tanggal</th>
                <th class="px-4 py-2 font-semibold">Tagihan</th>
                <th class="px-4 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(invoice, index) in invoices" :key="index" class="border-b">
                <td class="px-4 py-2">{{ invoice.date }}</td>
                <td class="px-4 py-2">{{ formatCurrency(invoice.bill) }}</td>
                <td class="px-4 py-2">
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImage: '/images/bed-bg.jpg', // Path gambar
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
  nav {
    background-color: #D3A78C;
  }
  
  .group:hover .group-hover\:flex {
    display: flex;
  }
  </style>
  