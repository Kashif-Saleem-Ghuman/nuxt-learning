<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="btn">
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                     <li class="btn">
                        <NuxtLink to="/products/abc">Products detail</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <slot />
        </main>
    </div>
</template>