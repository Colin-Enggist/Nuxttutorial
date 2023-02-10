<template>
    <div v-for="item in list" :key="item.id">
    <ul class="w-fit h-fit m-8 font-Itim">
        <li>Name: {{item.name }}</li>
        <li>Gender: {{ item.gender }}</li>
        <li>Height: {{ item.height }}</li>
        <li>Weight: {{ item.mass }}</li>
        <li>Born in: {{ item.birth_year }}</li>
    </ul>
</div>
</template>

<script setup>
    const list = data.value.results
    
</script>