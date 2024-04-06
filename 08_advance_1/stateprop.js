class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is  ${this.username}`);
  }

  static createId(){
    return `123`
  }
}

const pankaj = new User("pankaj")
// console.log(pankaj.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId())