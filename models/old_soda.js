const Soda = {
    data: [
        {name: "Orange Soda", color: "orange", readyToSell: true},
        {name: "Root Beer", color: "brown", readyToSell: false}
    ],
    getAll: function(){
        return this.data
    },
    getOne: function(index){
        return this.data[index]
    },
    create: function(newSoda){
        this.data.push(newSoda)
    },
    update: function(index, updates){
        this.data[index] = updates
    },
    destroy: function(index){
        this.data.splice(index, 1)
    }
}

module.exports = Soda