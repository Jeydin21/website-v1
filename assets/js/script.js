let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

const openSocial = type => {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.com/users/690677631720357979';
      break;
    case 'github':
      url = 'https://github.com/Jeydin21';
      break;
    case 'twitter':
      url = 'https://twitter.com/Jeydin21';
      break;
    case 'reddit':
      url = 'https://www.reddit.com/user/Jeydin21';
      break;
      case 'anilist':
        url = 'https://anilist.co/user/Jeydin21';
        break;
  }

  window.open(url);
}

const startIntroTyping = () => {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('Welcome to my website.', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type(`
    ${mobile ? 'Tap' : 'Press any key'} to enter.<br>>>> `)
    .go();

  setTimeout(() => {
    switchAllowed = true;
  }, 2500);
}

const typerStartTyping = typer => {
  typer.reset();

  let text = ["Python", 'JavaScript', 'Web'];

  text.forEach((language, index) => {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 500 });
  });

  typer.go();
}

const startMainTyping = () => {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

const switchScreen = () => {
  document.title = 'Jeydin21 | Home';

  $('.intro').fadeOut(1000, () => {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, () => {
      startMainTyping();
    });
  });

  ["lofi", 'rain'].forEach(audioName => {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none';

    audioElement.addEventListener('ended', () => {
      this.currentTime = 0;
      this.play();
    });

    audioElement.play();
  });
}

document.addEventListener('keydown', e => {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', e => {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  startIntroTyping();
});