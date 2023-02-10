<template>
  
    <header>
      <div class="sticky font-Itim top-0 w-screen h-20">
        <Navbar />
      </div>
    </header>
    <main>
      <div class="w-full mb-6 flex flex-row justify-left h-fit ">
        <div class="w-1/6">
          <Sidebar />
        </div>
        <div class="w-4/5 ml-3 my-6 p-4">
          <slot />
        </div>
      </div>
    </main>
    <footer>
      <div class="bg-slate-100 w-full p-7">
        <Myfooter />
      </div>
    </footer>

</template>
