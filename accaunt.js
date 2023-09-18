const moment = require("moment");

class Accaunt {
    #amaunt;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;

    }

    tellMeBalance() {
        console.log('sizning hisobingizdagi qoldiq:' , this.#amount);
        return this.#amount;
    }

    withdrawMoney(amount) {
       if  (this.#amount >amount) {
           this.#amount -=amount;
        console.log('Hisobingizda ${amount} yechildi va qoldiq ${this.#amount}');
    } else {
        console.log('Sizning balansingizdagi pul yetarli emas: ${this.#amount}');
    }
}
    makeDeposit(amount)  {
        this.#amount += amount
        console.log(
            'Hisobingi toldirildi, hisobingiz ${this.#amount} tashkil etdi');
    }

    giveMeDetails() {
        console.log(
            'Salom hurmatli $thsi.name} sizning hisobingiz ${this.#amount} ga teng');
            console.log("Hisob raqamingiz:", this.#account_id);
    }

    static tellMeAboutClass() {
        console.log('Bu class accauntlarni yasash uchun hizmat qiladi');
    }

    static tellMeTime() {
        console.log('Hozirgi vaqt ${moment().format("YYY MM DD HH:mm:ss")}');

    }

}
module.exports =Account;
