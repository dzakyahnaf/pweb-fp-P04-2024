<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <!-- Navbar -->
    <nav
      class="bg-gray-800 shadow-md py-4 px-4 sm:px-8 flex justify-between items-center sticky top-0 z-10"
    >
      <div class="text-2xl font-bold text-white">sinKOSTan</div>
      <div class="space-x-4 flex flex-wrap items-center">
        <NuxtLink
          to="/"
          class="text-white hover:text-blue-600"
          :class="currentRoute === '/' ? 'text-blue-400' : ''"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/rules"
          class="text-white hover:text-blue-600"
          :class="currentRoute === '/rules' ? 'text-blue-400' : ''"
        >
          Peraturan Kost
        </NuxtLink>
      </div>
    </nav>

    <!-- Carousel Container -->
    <div class="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg bg-white bg-opacity-90 mt-6 mx-auto flex-grow">
      <!-- Slides -->
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <!-- Slide 1: Spesifikasi Kamar -->
        <div class="w-full flex-shrink-0 text-gray-700 flex flex-col">
          <div
            class="h-96 bg-cover bg-center rounded-t-md"
            :style="{ backgroundImage: `url(${slideImages[0]})` }"
          ></div>
          <div class="p-4 flex-grow">
            <h2 class="text-2xl font-semibold mt-2 mb-2">Spesifikasi Kamar</h2>
            <ul class="list-disc pl-5">
              <li>Luas kamar: 4x5</li>
              <li>Kasur tidur ukuran queen</li>
              <li>Kamar mandi dalam</li>
              <li>Kursi dan meja belajar</li>
            </ul>
          </div>
        </div>

        <!-- Slide 2: Pilihan Sewa -->
        <div class="w-full flex-shrink-0 text-gray-700 flex flex-col">
          <div
            class="h-96 bg-cover bg-center rounded-t-md"
            :style="{ backgroundImage: `url(${slideImages[1]})` }"
          ></div>
          <div class="p-4 flex-grow">
            <h2 class="text-2xl font-semibold mt-2 mb-2">Pilihan Sewa</h2>
            <ul class="list-disc pl-5">
              <li>3 Bulan</li>
              <li>6 Bulan</li>
            </ul>
          </div>
        </div>

        <!-- Slide 3: Fasilitas Tambahan Berbayar -->
        <div class="w-full flex-shrink-0 text-gray-700 flex flex-col">
          <div
            class="h-96 bg-cover bg-center rounded-t-md"
            :style="{ backgroundImage: `url(${slideImages[2]})` }"
          ></div>
          <div class="p-4 flex-grow">
            <h2 class="text-2xl font-semibold mt-2 mb-2">Fasilitas Tambahan Berbayar</h2>
            <ul class="list-disc pl-5">
              <li>Laundry</li>
              <li>Cleaning Service</li>
              <li>Catering</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
      >
        &#8592;
      </button>
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
      >
        &#8594;
      </button>
    </div>

    <!-- Indicators -->
    <div class="flex justify-center mt-4">
      <span
        v-for="(slide, index) in slideImages"
        :key="index"
        @click="goToSlide(index)"
        class="h-3 w-3 mx-1 rounded-full cursor-pointer"
        :class="currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'"
      ></span>
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
      currentIndex: 0,
      backgroundUrl:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      slideImages: [
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1179490/pexels-photo-1179490.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2927523/pexels-photo-2927523.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slideImages.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slideImages.length) % this.slideImages.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>
