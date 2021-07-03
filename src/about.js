const about = () => {
  const content = document.querySelector('#content');

  let h1 = document.createElement('h1');
  h1.textContent = 'Flying Flower Cafe';
  content.appendChild(h1);

  let img = new Image();
  img.src = "../img/main_cafe.jpg";
  content.appendChild(img);

  let p = document.createElement('p');
  p.textContent = 'Donec accumsan venenatis placerat. Pellentesque volutpat, est a semper facilisis, tellus nisi semper velit, eu malesuada ex augue nec ante. Etiam elit tellus, blandit interdum tempus ac, luctus at leo. Proin pharetra lorem eget leo pellentesque, quis ultricies erat volutpat. Nunc nulla nisi, porta id mi eu, tincidunt efficitur nunc. Maecenas at leo ante. Pellentesque rhoncus urna elit, vel molestie metus consequat a. Aenean dui metus, aliquam eget erat ut, tristique blandit felis. Sed gravida ut augue a consequat. Nam a lorem et eros elementum accumsan in non dui. Nullam laoreet placerat elit vitae aliquet.';
  content.appendChild(p);
}

export { about }
