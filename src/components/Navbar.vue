<template>
  <header class="flex justify-between mx-7">
    <div class="logo w-16">
      <img src="../assets/img/logo.png" alt="logo_img" />
    </div>
    <ul class="flex items-center justify-end">
      <li
        class="
          menu
          active
          hover:bg-greyblueHover
          px-6
          py-2
          rounded-full
          transition
          duration-300
        "
      >
        <a href="#">Home</a>
      </li>
      <li
        class="
          menu
          hover:bg-greyblueHover
          px-6
          py-2
          rounded-full
          transition
          duration-300
        "
      >
        <a href="#" class="">Discover</a>
      </li>
      <li class="ml-8 mr-5">
        <a href="#">Register</a>
      </li>
      <li class="mx-5">
        <a href="#">
          <img src="../assets/img/search.png" class="w-5" alt="" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
.active {
  background-color: #e0e2e2;
  border-radius: 30px;
  padding: 1.5rem 0.5rem;
}

li.menu {
  margin: 0 10px;
}
</style>