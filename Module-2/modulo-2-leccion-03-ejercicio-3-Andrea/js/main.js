'use strict';

const numberToCompare = 21;

if (numberToCompare === 0) {
    console.log('El número es 0')
  } else if (numberToCompare < 0) {
    console.log('El número es negativo')
  } else if (numberToCompare + 2 > 13 && numberToCompare + 2 <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } else if (numberToCompare > 20 && numberToCompare < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }