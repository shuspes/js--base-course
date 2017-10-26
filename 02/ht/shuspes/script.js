/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA 
 * @param {*} objB 
 * @return {boolean} идентичны ли параметры по содержимому
 */

function isDeepEqual(objA, objB) {
  if(objA === objB) return true;
  if (objA == null && objB == null) return true;
  if (objA == null || objB == null) return false;
  if (typeof objA === 'number' && typeof objB === 'number' && isNaN(objA) && isNaN(objB)) return true;
  if(typeof objA !== "object" && typeof objB !== "object") return objA === objB;

  var objAKeys = Object.keys(objA);
  var objBKeys = Object.keys(objB);
  
  if(objAKeys.length !== objBKeys.length) return false;

  return !objAKeys.some(function(key) {
    if(!objBKeys.includes(key)) return true;
    if(objA === objA[key] && objB === objB[key]) return false;
    return !isDeepEqual(objA[key], objB[key]);
  });
}

/**
 * Функция фиксации контекста
 * @param {*} func Функция для которой нужно зафиксировать контекст
 * @param {*} context значение для this
 * @return {function} функция с зафиксированным контекстом
 */

function bind(func, context) {
  return function() { 
    return func.apply(context, arguments); 
  }
}

/**
 * Реализовать метод .myBind для всех функций, 
 * который работает так же как оригинальный .bind но не использует его внутри
 * (можно использовать фукнцию выше)
 */

Function.prototype.myBind = function(newContext) {
  return bind(this, newContext);
}

/**
* Создать объект o так, чтобы каждый раз когда в коде написано 
* o.magicProperty = 3 // (любое значение) 
* в консоль выводилось значение, которое присваивается и текущее время
*/

var o = {};
Object.defineProperty(o, "magicProperty", {
  set: function(value) {
    console.log(value, new Date());
  }
});

// o.magicProperty = 3;

/**
* Создать конструктор с методами, так, 
* чтобы следующий код работал и делал соответствующие вещи
* те запуск кода ниже должен делать то, что говорят методы
* u.askName().askAge().showAgeInConsole().showNameInAlert();
*/

function User() {
  this.askName = function() {
    this.name = prompt('Insert your name');
    return this;
  }

  this.askAge = function() {
    this.age = prompt('Insert your age');    
    return this;
  }

  this.showAgeInConsole = function() {
    console.log(this.age);
    return this;
  }

  this.showNameInAlert = function() {
    alert(this.name);
    return this;
  }
}

var u = new User();
// u.askName().askAge().showAgeInConsole().showNameInAlert();

/**
 * Написать фукнцию-калькулятор, которая работает следующим образом
 * calculate('+')(1)(2); // 3
 * calculate('*')(2)(3); // 6
 * Допустимые операции : + - * /
 */

function calculate(operator) {
  return function(firstValue) {
    return function(secondValue) {
      var result;
      switch(operator) {
        case "+":
          result = firstValue + secondValue;
          break;
        case "-":
          result = firstValue - secondValue;
          break;
        case ":":
        case "/":
          result = firstValue / secondValue;
          break;
        case "*":
          result = firstValue * secondValue;
          break;
        default:
          result = 0;
      }
      return result;
    }
  }
}

/**
 * Создайте конструктор-синглтон? Что такое синглтон?
 * new Singleton() === new Singleton
 */

var Singleton = (function() {
  var instance;
  return function () {return instance || (instance = this)};
}())

/**
  * Создайте функцию ForceConstructor
  * которая работает как конструктор независимо от того,
  * вызвана она с new или без
  * и сохраняет параметры в создаваемый объект с именами параметров
  */

function ForceContructor(a, b, c) {
  if(this instanceof ForceContructor) {
    this.a = a;
    this.b = b;
    this.c = c;
  } else {
    return new ForceContructor(a, b, c);
  }
}

/**
 * Написать фукнцию сумматор, которая будет работать 
 * var s = sum();
 * log(s); // 0
 * log(s(1)); // 1
 * log(s(1)(2)); //3
 * log(s(3)(4)(5)); // 12
 * Число вызовов может быть неограниченым
 */

function sum(value) {
  value = value || 0;

  function sumIt(anotherValue) {
    anotherValue = anotherValue || 0;
    return sum(value + anotherValue);
  }

  sumIt.toString = function() {
    return value;
  };

  return sumIt;
}

function log(x) {
  console.log(+x);
}

/**
 * Написать каррирующую функцию и покрыть ее тестами
 * Функция должна поддерживать каррирование функций с 2,3,4,5 параметрами
 * пример работы  функции
 * 
 * function target1(a,b,c,d) { return a + b + c + d }
 * function target2(a,b) { return a + b }
 * curry(target1)(1)(2)(3)(4) // 10
 * curry(target2)(5)(8) // 13
 * 
 * Примеры тестов смотреть в файле тестов
 * 
 * Читать
 * http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html
 * @param {*} func 
 */
function curry(func) {}

/*
Написать код, который для объекта созданного с помощью конструктора будет показывать, 
что объект является экземпляром двух классов
*/
/* Тут ваш код */

function PreUser() {};
PreUser.prototype = new Array();

function User() {};
User.prototype = new PreUser();

// User === PreUser; // false
// u instanceof User; // true
// u instanceof Array; // true
// u instanceof PreUser; // true

/*
Создать веб страницу. Добавить на нее форму с полями 
- имя (строкое поле), 
- родной город (Выпадающий список), 
- Комментарий (многострочное поле), пол (radiobutton). 
При нажатии на кнопку - нужно собрать данные введенные в поля и вывести их в блоке под формой, 
после чего поля очистить.
*/

/* 
Используя функцию drawCalendar из прошлого урока
создать функцию drawInteractiveCalendar(el)
Которая выводит календарь, в шапке которого отображается
[<] месяц / год [>]
При клике по кнопкам [<] / [>] нужно реализовать листание календаря
Добавть на страницу index.html вызов календаря
*/
function drawInteractiveCalendar(el) {
  var currentDate = new Date(); 
  var calendarRender = drawCalendar.call(null, el);
  calendarRender(currentDate.getFullYear(), currentDate.getMonth());
  initCalendarbuttons(currentDate.getFullYear(), currentDate.getMonth(), calendarRender);
}

function drawCalendar(htmlEl) {
  htmlEl.innerHTML = '<button id="previousMonth">[<]</button><span id="caption"></span><button id="nextMonth">[>]</button><div id="calendarTable"></div>';
  
  return function(year, month) {
    var belWeek = [1, 2, 3, 4, 5, 6, 0];
    var weekDays = {0: "Вс", 1: "Пн", 2: "Вт", 3: "Ср", 4: "Чт", 5: "Пт", 6: "Сб"};

    var day = new Date(year, month);
    var currentMonth = day.toLocaleString("ru", {month: 'long'});
    var currentYear = day.getFullYear();
    var calendarHeader = belWeek.map(function(day) { return `<th>${weekDays[day]}</th>`}).join("");

    var calendarBody = "<tr>";
    for(var i = 0; belWeek[i] != day.getDay(); i++) {
      calendarBody += "<td></td>";
    }

    while(month == day.getMonth()) {
      if(day.getDay() == 1) calendarBody += "<tr>";
        calendarBody += `<td>${day.getDate()}</td>`;
      if(day.getDay() == 0) calendarBody += "</tr>";
      day.setDate(day.getDate() + 1);
    }

    if(day.getDay() !== 0) calendarBody += "</tr>";
    
    document.getElementById("caption").innerHTML = `${currentMonth} / ${currentYear}`;
    document.getElementById("calendarTable").innerHTML = `<table><tr>${calendarHeader}</tr>${calendarBody}</table>`;
  }
}

function initCalendarbuttons(year, month, calendarRender) {
  var day = new Date(year, month);  
  var navigation = calendarNavigation.call(null, 1, day, calendarRender);

  document.getElementById("previousMonth").addEventListener("click", function() {
    navigation("-");
  });

  document.getElementById("nextMonth").addEventListener("click", function() {
    navigation("+");
  })
}

function calendarNavigation(monthCount, initDate, calendarRender) {
  var month = initDate.getMonth();
  var date = initDate;

  return function(direction) {
    if(direction === "+") {
      date.setMonth(month + monthCount);
      
    } else if(direction === "-") {
      date.setMonth(month - monthCount);
    }

    month = date.getMonth();
    
    calendarRender(date.getFullYear(), month);
  }
}