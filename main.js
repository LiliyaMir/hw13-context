console.log('1. Нужно исправить код что бы в консоль выводилось имя пользователя Vic вместо Vic2. Использовать нужно bind или call или apply.')

var name = 'Vic 2';
var user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};

const getName = user.getName.bind(user);
console.log(getName());

//-----------------------------------
console.log('2. Нужно исправить код что бы в консоль выводился Arni.')
const user1 = {
    age: 5,
    name: 'Vic',
    getName2: function() {
      return this.name;
    }
  };
  const user2 = {
    name: 'Arni',
  }
  
  const getName2 = user1.getName2.call(user2);
  console.log(getName2);