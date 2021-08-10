'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

// let js_user_avatar = document.querySelector('.js_user_avatar');
// console.log(js_user_avatar);
// js_user_avatar.innerHTML= `<img src=${userAvatar} class="user__avatar js_user_avatar" />` ;
// console.log("new img:" + js_user_avatar);

// User HAS image:

// let user = document.querySelector('.js_user');
// user.innerHTML += `<img src="${userAvatar}" alt="profile image"  class="user__avatar js_user_avatar" />` ; 

// // User doesn't have image:

userAvatar = '';
let user = document.querySelector('.js_user');
console.log(user);
// The avatar will be userAvatar but if this ones false it will pick DEFAULT_AVATAR
const newAvatar = userAvatar || DEFAULT_AVATAR; 
user.innerHTML += `<img src="${newAvatar}" alt="profile image" class="user__avatar js_user_avatar" />`;