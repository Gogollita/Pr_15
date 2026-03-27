<template>
  <section id="faq" class="flex items-center justify-center min-h-screen max-sm:-mt-80 max-sm:-mb-20">
    <div class="flex flex-col items-center text-center">
      <p class="text-base font-medium text-slate-600">FAQ</p>
      <h1 class="text-3xl md:text-4xl h-18 font-semibold">Часто задаваемые вопросы</h1>

      <div class="max-w-xl w-full flex flex-col gap-4 items-center text-left">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item flex flex-col items-start w-5/6 mb-4"
          :data-index="index"
        >
          <div
            class="faq-header flex items-center justify-between w-full cursor-pointer min-h-[48px] border border-indigo-100 p-4 rounded transition-all hover:bg-slate-50"
            @click="toggleFaq(index)"
          >
            <h2 class="text-sm font-medium">&nbsp;&nbsp;&nbsp;&nbsp;{{ faq.question }}</h2>
            <svg
              :class="['faq-icon transition-all duration-300 ease-in-out shrink-0', faq.open && 'rotate-180']"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#1E1E1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            class="faq-answer overflow-hidden transition-all duration-500 ease-in-out w-full"
            :class="faq.open ? 'max-h-[300px] opacity-100 translate-y-0 pt-4' : 'max-h-0 opacity-0 -translate-y-2'"
          >
            <p class="text-sm text-slate-500 p-4 pt-2" v-html="formattedAnswer(faq.answer)"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Как записаться на приём?',
    answer: 'Записаться можно через форму на сайте в разделе «Контакты», по телефону +7 (XXX) XXX-XX-XX или в нашем Instagram. Мы подберём удобное для вас время и напомним о визите.',
    open: false
  },
  {
    question: 'Сколько времени длится процедура?',
    answer: 'Маникюр с покрытием — около 1,5 часов.\nПедикюр — 1,5–2 часа.\nНаращивание — 2–2,5 часа.\nДизайн — от 30 минут в зависимости от сложности.\nТочное время уточняйте при записи.',
    open: false
  },
  {
    question: 'Какие материалы вы используете?',
    answer: 'Мы работаем только с профессиональными брендами: премиальные гель-лаки, базы и топы, безопасные жидкости для снятия. Все материалы сертифицированы и гипоаллергенны.',
    open: false
  },
  {
    question: 'Можно ли снимать гель-лак самостоятельно?',
    answer: 'Категорически не рекомендуем! Самостоятельное снятие может повредить ногтевую пластину. Лучше доверить это мастеру — мы аккуратно удалим покрытие без травм.',
    open: false
  },
  {
    question: 'Что входит в стоимость маникюра?',
    answer: 'В базовую стоимость входит: обработка кутикулы, придание формы, выравнивание ногтей, подготовка к покрытию. Покрытие гель-лаком оплачивается отдельно или в составе комплексной услуги.',
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const formattedAnswer = (answer) => {
  return answer.replace(/\n/g, '<br>')
}
</script>