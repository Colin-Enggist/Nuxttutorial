<template>
  <header>
    <div class="sticky font-Itim top-0 w-screen h-28 p-3">
      <slot name="header" />
    </div>
  </header>
  <main>
    <div class="w-full relative bg-slate-700 h-40">
      <div class="bg-slate-100 absolute top-4 left-0 w-1/6 p-3">
        <slot name="sidebar" />
      </div>
      <div class="bg-slate-300 absolute top-4 right-0 w-4/5 h-12">
        <slot name="content" />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-slate-400 absolute bottom-0 w-full p-7">
      <slot name="footer" />
    </div>
  </footer>
</template>
