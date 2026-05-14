<script setup>
definePageMeta({
    layout: 'products'
})

useHead({
    title: 'Products',
    meta: [
        { name: 'description', content: 'List of products' }
    ]
})

// Fetching products data
const {data: products, loading, error} = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <div>
        <h1 class="font-black flex justify-center p-4 text-xl">Products</h1>
            <p v-if="loading">Loading...</p>
            <p v-else-if="error">Error: {{ error }}</p>
        <ul v-else class="grid grid-cols-4 gap-5">
            <li v-for="product in products " :key="product.id">
               <ProductCard  :product="product"/>
            </li>

        </ul>
    </div>
</template>