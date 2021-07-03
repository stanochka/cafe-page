const contact = () => {
  const content = document.querySelector('#content');

  let h1 = document.createElement('h1');
  h1.textContent = 'Contact';
  content.appendChild(h1);

  let p = document.createElement('p');
  p.textContent = 'Flying Flower Cafe';
  content.appendChild(p);

  p = document.createElement('p');
  p.id = 'phone'
  p.innerHTML = '<span class="material-icons-round">call</span> <a href="tel:+19736843611">973 684 3611</a>';
  content.appendChild(p);

  p = document.createElement('p');
  p.id = 'address'
  p.innerHTML = '<span class="material-icons-round">home</span> 2880 Broadway, New York';
  content.appendChild(p);

  let outer = document.createElement('div');
  outer.classList.add('mapouter');
  let canvas = document.createElement('div');
  canvas.classList.add('gmap_canvas');
  let iframe = document.createElement('iframe');
  iframe.width = '500';
  iframe.height = '400';
  iframe.id = 'gmap_canvas';
  iframe.src = 'https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed';
  iframe.scrolling= 'no';
  iframe.marginheight= '0';
  iframe.marginwidth= '0';
  iframe.style.border = 'none';
  canvas.appendChild(iframe);
  outer.appendChild(canvas);
  content.appendChild(outer);
}

export { contact }
