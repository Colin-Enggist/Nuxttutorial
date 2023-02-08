<template>
  <header>
    <div class="sticky font-Itim top-0 w-screen h-20">
      <Navbar />
    </div>
  </header>
  <main>
    <div class="w-full relative h-40">
      <div class="absolute top-0 left-0 w-1/6">
        <Sidebar/>
      </div>
      <div class="bg-slate-300 absolute top-4 right-9 w-4/5 p-4">
        <slot/>
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-slate-200 absolute bottom-0 w-full p-7">
      <Bottomstuff/>
    </div>
  </footer>
</template>
