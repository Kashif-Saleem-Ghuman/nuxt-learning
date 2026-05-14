<template>
    <div>
        This is about page.
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>