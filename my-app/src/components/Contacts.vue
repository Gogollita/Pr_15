<template>
        <section id="contacts" class="flex items-center justify-center min-h-screen">
            <div class="flex flex-col max-lg:gap-10 md:max-w-xs max-lg:max-w-lg w-5/6 items-center">
                <h1 class="text-3xl font-semibold text-gray-900 text-center max-md:text-start h-12 tracking-tight">
                    Записаться на приём
                </h1>
                <div class="hidden max-sm:h-10"></div>
                <form>
                    <div class="flex flex-col gap-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm text-gray-500 min-h-6">Имя</label>
                                <input type="text" id="firstname" placeholder="Кристина"
                                    class="w-full px-3 py-3 border border-gray-300 min-h-8 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                            <div>
                                <label class="block text-sm text-gray-500 min-h-6">Фамилия</label>
                                <input type="text" id="lastname" placeholder="Богородская"
                                    class="w-full px-3 py-3 border border-gray-300 min-h-8 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm text-gray-500 min-h-6">Почта</label>
                            <input type="email" id="email" placeholder="email@mail.ru"
                                class="w-full px-3 py-3 border border-gray-300 min-h-8 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                        </div>

                        <div>
                            <label class="block text-sm text-gray-500 min-h-6">Номер телефона</label>

                            <input type="tel" id="tel" placeholder="+7 342 123-456"
                                class="w-full px-3 py-3 border border-gray-300 min-h-8 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />

                        </div>

                        <div>
                            <label class="block text-sm text-gray-500 min-h-6">На какое число и время?</label>
                            <input id="date" type="date" required
                                class="flex px-3 py-3 border border-gray-300 min-h-8 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors text-sm text-gray-400 valid:text-black" />

                        </div>

                        <div class="flex">
                            <input type="checkbox" id="agreement"
                                class="w-5 h-5 cursor-pointer accent-[#1E1E1E] rounded-[5px] text-gray-300" />
                            <label class="text-sm text-gray-500 cursor-pointer justify-center">
                                &nbsp;Вы соглашаетесь с <span class="underline">Условиями использования</span> и
                                <span class="underline">Политикой
                                    конфиденциальности</span>.
                            </label>
                        </div>
                        <button type="submit"
                            class="bg-[#1E1E1E] min-w-[200px] min-h-10 hover:bg-white text-white hover:text-[#1E1E1E] hover:border hover:scale-90 transition rounded-full font-medium active:scale-100">
                            Отправить
                        </button>
                    </div>

                </form>
            </div>

            <div
                class="rounded-3xl -mt-50.5 ml-30 relative min-h-[730px] w-full max-w-[565px] hidden md:flex flex-col justify-between overflow-hidden">
                <img src="..\assets\img\ToSide2.png" alt="Shop of Gels"
                    class="absolute inset-0 w-full h-full object-cover" />
            </div>
        </section>
</template>

<script setup>
</script>

