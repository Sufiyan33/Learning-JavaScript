class Complex {
    constructor(real, imaginary){
        this.real = real
        this.imaginary = imaginary
    }

    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
}

let a = new Complex(2, 6)
let b = new Complex(8, 12)
a.add(b)
console.log(`$(a.real)+$(a.imaginary)i`)
