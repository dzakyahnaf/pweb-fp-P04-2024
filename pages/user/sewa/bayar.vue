<template>
    <div class="min-h-screen bg-cover bg-center flex flex-col" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <!-- Navbar -->
      <nav class="py-4 px-8 flex justify-between items-center shadow-md" :style="{ backgroundColor: '#D3A78C' }">
        <div class="text-2xl font-bold text-white">kostFP04</div>
        <NuxtLink to="/user/sewa" class="text-white hover:underline">Kembali</NuxtLink>
      </nav>
  
      <!-- Form Pembayaran -->
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-3xl font-semibold mb-6 text-gray-800 text-center">Pembayaran</h1>
        <div class="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Total Biaya:</label>
            <p class="text-lg font-bold">{{ formatCurrency(totalBill) }}</p>
          </div>
          <form @submit.prevent="submitPayment">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Metode Pembayaran:</label>
              <select v-model="paymentMethod" class="w-full p-2 border rounded">
                <option value="QRIS">QRIS</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            <div v-if="paymentMethod === 'Bank Transfer'" class="mb-4">
              <label class="block text-gray-700 mb-2">Nama Bank:</label>
              <input type="text" v-model="bankName" class="w-full p-2 border rounded" />
            </div>
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Bayar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentMethod: "QRIS",
        bankName: "",
        totalBill: 0,
        backgroundImage: "https://example.com/path/to/your/background-image.jpg", // Sesuaikan URL gambar
      };
    },
    mounted() {
      const query = this.$route.query;
      const period = parseInt(query.period || "3");
      const extras = (query.extras || "").split(",");
  
      let basePrice = period === 3 ? 6000000 : 12000000;
      let extrasPrice = 0;
  
      if (extras.includes("Laundry")) {
        extrasPrice += period === 3 ? 600000 : 1200000;
      }
      if (extras.includes("Cleaning Service")) {
        extrasPrice += period === 3 ? 300000 : 600000;
      }
      if (extras.includes("Catering")) {
        extrasPrice += period === 3 ? 3000000 : 6000000;
      }
  
      this.totalBill = basePrice + extrasPrice;
    },
    methods: {
      formatCurrency(amount) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(amount);
      },
      submitPayment() {
        alert("Pembayaran berhasil diproses!");
        this.$router.push("/user");
      },
    },
  };
  </script>
  