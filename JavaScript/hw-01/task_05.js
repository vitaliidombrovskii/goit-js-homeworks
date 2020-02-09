const deliveryChina = 100;
const deliveryChile = 250;
const deliveryAustralia = 170;
const deliveryIndia = 80;
const deliveryJamaica = 120;
let message;
let inputCountryDelivery = prompt('Пожалуйста, введите страну доставки.');
if (inputCountryDelivery === null) {
  console.log('Отменено пользователем!')
}
let inputUser = inputCountryDelivery;
switch (inputUser.toUpperCase()) {
  case 'CHINA':
    message = `Доставка в ${inputUser} будет стоить ${deliveryChina} кредитов.`;
    break;
  case 'CHILE':
    message = `Доставка в ${inputUser} будет стоить ${deliveryChile} кредитов.`;
    break;
  case 'AUSTRALIA':
    message = `Доставка в ${inputUser} будет стоить ${deliveryAustralia} кредитов.`;
    break;
  case 'INDIA':
    message = `Доставка в ${inputUser} будет стоить ${deliveryIndia} кредитов.`;
    break;
  case 'JAMAICA':
    message = `Доставка в ${inputUser} будет стоить ${deliveryJamaica} кредитов.`;
    break;
  default:
    message = 'В вашей стране доставка не доступна';
    break
}
alert(message);

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов