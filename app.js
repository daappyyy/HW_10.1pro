// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

const userInfo = {
    firstname: '',
    lastname: '',
    age: 0,
    hometown: '',

    getInfo: function(){
        this.firstname = prompt("Enter your firstname: ");
        this.lastname = prompt("Enter your lastname: ");
        this.age = parseInt(prompt("Enter your age: "));
        this.hometown = prompt("Enter your hometown: ");
    },

    getFullName: function(){
        return `${this.firstname} ${this.lastname}`;
    },

    showInfo: function(){
        console.log(`User's info:`)
        console.log(`Fullname: ${this.getFullName()}`);
        console.log(`Age: ${this.age}`);
        console.log(`Hometown: ${this.hometown}`);
    }
}
userInfo.getInfo();
userInfo.showInfo();