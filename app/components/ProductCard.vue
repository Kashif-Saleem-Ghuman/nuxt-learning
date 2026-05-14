<template>
    <!-- hide scrollbar -->
    <div class="border rounded-lg p-4 max-h-96 overflow-auto hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <!-- wrap card in a link -->
         <NuxtLink :to="`/products/${product.id}`">
             <NuxtImg :src="product.image" alt="Product Image" class="w-48 h-48 object-cover" />
             <h2 class="font-bold text-lg mt-2">{{ product.title }}</h2>
             <p class="text-gray-600 mt-1">{{ product.description }}</p>
             <p class="font-bold text-xl mt-2">${{ product.price }}</p>
         </NuxtLink>
      
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>