const menu = () => {
  const content = document.querySelector('#content');

  let h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  content.appendChild(h1);

  var menuItems = [ { title: 'Lavender Latte',
                      img: 'img/latte.jpg',
                      describtion: 'Nullam quis libero faucibus, pharetra nisl eu, mattis lectus.',
                      price: 5
                    },
                    { title: 'Hot Chocolate',
                      img: 'img/choco.jpg',
                      describtion: 'Maecenas interdum massa ac vestibulum venenatis.',
                      price: 6
                    },
                    { title: 'Rooibos Tea',
                      img: 'img/tea.jpg',
                      describtion: 'Suspendisse commodo dolor eget pretium placerat. ',
                      price: 4
                    },
                    { title: 'Green Tea',
                      img: 'img/green_tea.jpg',
                      describtion: 'Quisque aliquam cursus leo non varius.',
                      price: 4
                    },
                    { title: 'Rainbow Cake',
                      img: 'img/cake.jpg',
                      describtion: 'Donec egestas nisi eget libero laoreet, ac tempor dui hendrerit.',
                      price: 8
                    },
                    { title: 'Sandwich',
                      img: 'img/sandwich.jpg',
                      describtion: 'Vivamus lacinia venenatis erat, eu tincidunt dolor posuere id.',
                      price: 10
                    }
                  ];

  let menuContent = document.createElement('div');
  menuContent.id = 'menuContent';
  content.appendChild(menuContent);

  menuItems.forEach((item, i) => {
    let card = document.createElement('div');
    card.classList.add('card');
    //title
    let h3 = document.createElement('h3');
    h3.textContent = item.title;
    card.appendChild(h3);
    //image
    let img = new Image();
    img.src = item.img;
    img.classList.add('cardImg')
    card.appendChild(img);
    //describtion
    let p = document.createElement('p');
    p.textContent = item.describtion;
    card.appendChild(p);
    //price
    let div = document.createElement('div');
    div.textContent = `$${item.price}`;
    div.classList.add('price');
    card.appendChild(div);
    card.id = `item${i}`;
    menuContent.appendChild(card);
  });

}

export { menu }
