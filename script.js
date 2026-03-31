function switchLang(lang) {
  const jaElements = document.querySelectorAll('.ja');
  const enElements = document.querySelectorAll('.en');
  const btnJa = document.getElementById('btn-ja');
  const btnEn = document.getElementById('btn-en');

  if (lang === 'en') {
    jaElements.forEach(el => el.hidden = true);
    enElements.forEach(el => el.hidden = false);
    btnJa.classList.remove('active');
    btnEn.classList.add('active');
    document.documentElement.lang = 'en';
  } else {
    jaElements.forEach(el => el.hidden = false);
    enElements.forEach(el => el.hidden = true);
    btnJa.classList.add('active');
    btnEn.classList.remove('active');
    document.documentElement.lang = 'ja';
  }
}
