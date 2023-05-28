let isEnglish = true;

function toggleLanguage() {
  const textElement = document.querySelector('.text-stage2');
  const header = document.querySelector('.stage-2-header')

  if (isEnglish) {
    textElement.innerHTML = `
      <p>Привет, я Денис — UX/UI дизайнер из Минска.<br> Интересуюсь дизайном и всем, что с ним связано.</p>
      <p>Учусь на курсе "Веб и мобильный дизайн <br> интерфейсов" в IT-Academy.</p>
      <p>Готов реализовывать отличные проекты <br> с прекрасными людьми.</p>
    `;
    header.textContent = "Обо мне";
    isEnglish = false;
  } else {
    textElement.innerHTML = `
      <p>Hi, I'm Denis – UX/UI designer from Minsk.<br> I'm interested in design and everything connected with it.</p>
      <p>I'm studying at courses "Web and mobile design <br> interfaces" in IT-Academy.</p>
      <p>Ready to implement excellent projects <br> with wonderful people.</p>
    `;
    header.textContent = "About me";
    isEnglish = true;
  }
}