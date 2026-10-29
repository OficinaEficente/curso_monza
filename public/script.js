'use strict';
const modal = document.querySelector('#enrollment');
const host = document.querySelector('#form-host');
let formLoaded = false;
let opener;
function loadForm() {
  if (formLoaded) return;
  formLoaded = true;
  host.replaceChildren();
  const script = document.createElement('script');
  script.src = 'https://atendeia.riodelaplatamkt.com.br/atendeia-form.js?v=20260925-4';
  script.dataset.formKey = '24ee2f839978bb45f60e581def00b33b469a680ce41551c0';
  script.async = true;
  script.onerror = () => {
    formLoaded = false;
    host.replaceChildren();
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'cta';
    retry.textContent = 'Tentar carregar o formulário novamente';
    retry.addEventListener('click', loadForm, {once:true});
    host.append(retry);
  };
  host.append(script);
}
document.querySelectorAll('[data-enroll]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    modal.showModal();
    document.body.classList.add('modal-open');
    loadForm();
    if (typeof window.gtag === 'function') window.gtag('event', 'open_enrollment_form', {
      event_label: button.dataset.label, currency: 'BRL', value: 89,
      content_name: 'Reparo da Caixa de Direção Monza DHB'
    });
  });
});
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  if (event.target !== modal) return;
  const r = modal.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) modal.close();
});
modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  opener?.focus();
});
