const fs = require("fs");

module.exports = class Container {
    constructor(myFile) {
        this.myFile = myFile

        try {
            this.products = fs.readFileSync(this.myFile, 'utf-8')
            this.products = JSON.parse(this.products)
        }
        catch (error) {
            this.products = []
        }
    }

    getAll() {
        const fileContent = this.products
        return fileContent
    }

    getById(id) {
        try {
            const fileContent = this.products
            const product = fileContent.find(product => product.id === id)
            return product
        } catch (error) {
            console.log(error)
        }
    }

    getRandomInt(min, max) {
        min = Math.ceil(0)
        max = Math.floor(this.products.length)
        return Math.ceil(Math.random() * (max - min) + min)
      }
}