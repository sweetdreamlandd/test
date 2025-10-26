// Cuộn mượt đến CTA khi bấm các icon liên hệ (demo nhẹ)
document.querySelectorAll('.icon-list a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    // nếu để trống '#', chỉ cuộn tới nút CTA
    if(a.getAttribute('href') === '#'){
      e.preventDefault();
      document.querySelector('.btn-primary')?.scrollIntoView({behavior:'smooth', block:'center'});
    }
  });
});

// Nhấn CTA -> highlight hotline (demo)
const cta = document.querySelector('.btn-primary');
cta?.addEventListener('click', (e)=>{
  if(cta.getAttribute('href') === '#'){
    e.preventDefault();
    const hl = document.querySelector('.hotline');
    hl?.classList.add('pulse');
    setTimeout(()=>hl?.classList.remove('pulse'), 1200);
  }
});
