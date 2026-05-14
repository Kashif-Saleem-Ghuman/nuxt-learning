<template>
    <div>
        

        <main>
            <slot />
        </main>

        <footer>
            <nav class="bg-purple-200 p-4">
                <ul class="flex justify-end gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
</template>