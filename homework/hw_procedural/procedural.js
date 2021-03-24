// Переменные как переменные 
// Функции - процедуры
// Объекты - данные (POJO), Модули - набор функционала (префикс), 

// username - обязательное, не меньше 5 символов
// passwrods - обязательное, не меньше 8 символов, (содержит символ !) (содержит большую букву и цифру)
// age - число, целое, (0, 150)

let validForm = {
  username: "anton",
  password: "anton!anton",
  age: "20",
  height: "пара",
  width: "апрапр",
};

let invalidForm = {
  username: "anto",
  password: "anto",
  age: "20a",
  height: "апрапр",
  width: "апра",
};

const handleSubmit = (form) => {
  // const username = form.username;
  // ..
  const { username, password, age, height, width } = form;

  let isValid = true;
  let errors = { };

  if (username.length < 5) {
    errors["username"] = "Логин должен быть не меньше 5 символов";
    isValid = false;
  }
  
  if (password.length < 8) {
    errors["password"] = "Пароль должен быть не меньше 8 символов";
    isValid = false;
  }

  if (password.indexOf("!") < 0) {
    errors["password"] = "Пароль должен содержать '!'";
    isValid = false;
  }

  let ageNumber = parseInt(age);
  // "20" !== "20.1"

  if (isNaN(ageNumber) || age !== String(ageNumber)) {
    errors["age"] = "Возраст должен быть числом";
    isValid = false;
  }

  if (age < 0 || age > 150) {
    errors["age"] = "Возраст должен быть в промежутке от 0 до 150 лет";
    isValid = false;
  }

  if (height === ""){
    errors["height"] = "Рост не указан, ну и ладно";
    // isValid = false;
  }

  if (isNaN(height) || height !== String(height)) {
    errors["height"] = "Рост должен быть числом";
    isValid = false;
  }


  if (height < 0 || height > 300){
    errors["height"] = "Рост человека не может быть больше 300см и меньше 0см";
    isValid = false;
  }

  if (width === ""){
    errors["width"] = "Ширина не указана, ну и ладно";
    // isValid = false;
  }

  if (width < 0 || width > 228){
    errors["width"] = "Ширина человека не может быть больше 228см и меньше 0см";
    isValid = false;
  }

  if (isNaN(width) || width !== String(width)) {
    errors["width"] = "Ширина должна быть числом";
    isValid = false;
  }

  if (isValid) {
    // отправить форму 
    const user = {
      username,
      password,
      age,
      height,
      width,
      dateOfRegistration: new Date(),
    };

    console.log("Создаем пользователя", user);
  } else {
    // отображаем ошибки в форме
    console.log("Форма заполнена с ошибками", errors, form);
  }
}

/// 

handleSubmit(validForm);
console.log("------------------------------");
handleSubmit(invalidForm);