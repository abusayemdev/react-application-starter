//------------------------------ this -----------------------------------

const Fruit = {
    name: 'Mango',
    price: '1000',
    weight: '5kg',
    about: function fn() {
        return 'The '+this.name+"'s price is "+this.price+ ' Taka.';
        //return `The ${this.name}'s price is ${this.price} Taka.`
    }
}

console.log(Fruit.about());