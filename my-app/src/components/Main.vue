<template>
        <section id="main" class="min-h-screen">
            <div
                class="flex flex-col md:flex-row max-md:flex-col-reverse items-center place-content-around px-4 md:px-16 lg:px-24 xl:px-32 max-sm:-mb-80">
                <div class="flex flex-col items-center md:items-start gap-4">
                    <h1
                        class="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[68px] font-semibold xl:max-w-xl text-[#1E1E1E] ">
                        <span
                            class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#D4A5A5]">
                            <span class="relative text-[#1E1E1E] dark:text-gray-950">Искусство</span>
                        </span>
                        на кончиках пальцев
                    </h1>
                    <p class="text-center md:text-left text-sm text-[#1E1E1E] max-w-lg">Салон красоты и ногтевой
                        эстетики в Москве.</p>
                    <div class="flex flex-row items-center flex-row gap-4 text-sm max-sm:flex-col">
                        <a href="#contacts"
                            class="flex bg-[#1E1E1E] min-w-[200px] min-h-12 justify-center items-center hover:bg-white text-white hover:text-[#1E1E1E] hover:border hover:scale-90 transition rounded-full font-medium active:scale-100">
                            Записаться
                        </a>
                        <a href="#services"
                            class="flex items-center justify-center min-w-[200px] min-h-12 gap-2 border border-[#1E1E1E] active:scale-95 hover:bg-[#1E1E1E] hover:text-white hover:scale-90 transition text-[#1E1E1E] rounded-full">
                            Посмотреть услуги
                        </a>
                    </div>
                </div>
                <img src="..\assets\img\MainNails.png" alt="hero"
                    class="sm:max-w-xs max-md:max-w-125 max-md:max-h-100 lg:max-w-lg 2xl:max-w-xl transition-all duration-300">
            </div>
        </section>
</template>

<script setup>
</script>
