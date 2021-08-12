'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';


userAvatar = '';
// The avatar will be userAvatar but if this ones false it will pick DEFAULT_AVATAR
const newAvatar = userAvatar || DEFAULT_AVATAR; 
let js_user_avatar = document.querySelector('.js_user_avatar');

// with setAttribute we can add src to the image:
js_user_avatar.setAttribute('src', newAvatar);