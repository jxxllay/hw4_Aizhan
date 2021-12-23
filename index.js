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
    const filtered = products.filter(product => {
        if (product.category === 'food') {
            return true
        } else if (product.category === 'tool')
            return true
    })
    console.log(filtered)
}

filter()

function name() {
    const cleaned = products.map(name => {
        return `${name.productName}`
    })
    console.log(cleaned)
}

name()

const categories = products.reduce((accumalator, product) => {
    accumalator[product.category]++
    return accumalator
}, {
    tool: 0,
    clothes: 0,
    food: 0
})
console.log(categories)

function render() {
    products.map(function (product) {
        `
            <div class="product">
                    <h3>${product.productName}</h3>
                    <p>${product.cost} </p>
                     <p>${product.category} </p>
                </div>`
    })
    console.log(products)
}
render()
