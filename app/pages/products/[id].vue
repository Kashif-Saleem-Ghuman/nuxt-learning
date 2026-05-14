<template>
    <div>
        <Head>
            <Title>{{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ul>
            <li>
                <h1>{{ product.title }}</h1>
            </li>
            <li>
                <p>{{ product.description }}</p>
            </li>
            <li>
                <p>Price: ${{ product.price }}</p>
            </li>
            <li>
                <NuxtImg :src="product.image" alt="Product Image" class="w-48 h-48 object-cover" />
            </li>
        </ul>
    </div>
</template>

<script setup>
const route = useRoute()
const productId = route.params.id

//fetching product data based on the ID
const {data: product} = await useFetch(`https://fakestoreapi.com/products/${productId}`)

// throw error if product is not found
if (!product.value) {
    throw createError({
        statusCode: 404,
        message: 'Product not found',
        fatal: true
    })
}
</script>