const products = [
    {
        productName: 'milk',
        cost: 48,
        category: 'food'
    },
    {
        productName: 'bread',
        cost: 20,
        category: 'food'
    },
    {
        productName: 'egg',
        cost: 11,
        category: 'food'
    },
    {
        productName: 'axe',
        cost: 180,
        category: 'tool'
    },
    {
        productName: 'hammer',
        cost: 170,
        category: 'tool'
    },
    {
        productName: 'bag',
        cost: 1100,
        category: 'clothes'
    },
    {
        productName: 'socks',
        cost: 90,
        category: 'clothes'
    },
]

function filter() {
    const filtered = products.filter(({ category }) => {
        if (category === 'food') {
            return true
        } else if (category === 'tool')
            return true
//         return category === 'food' || category === 'tool'
    })
    
    console.log(filtered)
}

filter()

function name() {
    const cleaned = products.map(({ productName }) => {
        return productName
    })
    console.log(cleaned)
}

name()

const categories = products.reduce((accumalator, { category }) => {
    accumalator[category]++
    return accumalator
}, {
    tool: 0,
    clothes: 0,
    food: 0
})
console.log(categories)

function render() {
    products.map(function ({ productName, cost, category }) {
        `
            <div class="product">
                    <h3>${productName}</h3>
                    <p>${cost} </p>
                     <p>${category} </p>
                </div>`
    })
    console.log(products)
}
render()
