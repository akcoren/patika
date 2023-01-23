const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        // img:
        // "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        img:
            "https://www.chilipeppermadness.com/wp-content/uploads/2021/05/Dan-Dan-Noodles-Recipe1.webp",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

// html main DOMS
const menuItemsDOM = document.querySelector("#menu-items")
const filterBtnDOM = document.querySelector("#filter-buttons")

// every unique category in the menu
const uniqueCategory = [... new Set(menu.map(item => item.category))]

// create filter buttons for each unique category
createButtons()

// initialize whole menu
menu.forEach(item => createMenuItem(item))


function createButtons() {
    // All button
    let btnDOM = document.createElement("button")
    btnDOM.classList.add("btn", "btn-outline-dark", "btn-item")
    btnDOM.innerHTML = "All"
    btnDOM.addEventListener("click", filterMenuItems)
    filterBtnDOM.append(btnDOM)
    
    // construction for filter buttons for every unique category
    uniqueCategory.forEach(category => {
        let btnDOM = document.createElement("button")
        btnDOM.classList.add("btn", "btn-outline-dark", "btn-item")
        btnDOM.innerHTML = category
        btnDOM.addEventListener("click", filterMenuItems)
        filterBtnDOM.append(btnDOM)
    });

}

function filterMenuItems() {
    // erase everythin on the menu items 
    menuItemsDOM.innerHTML = ""

    let category = this.innerHTML
    console.log(`Items are filtered in ${category}`)

    if (category === "All") {
        menu.forEach(item => {
            createMenuItem(item)
        })
        return
    }

    const filteredArr = menu.filter(e => e.category === category)
    filteredArr.forEach((item) => {
        createMenuItem(item)
    })

}

// create menu item and append to the menuItems container
function createMenuItem(item) {

    // menu item container
    const menuItemDOM = document.createElement("div")
    menuItemDOM.classList.add("menu-items", "col-lg-6", "col-sm-12")

    // menu item img inside menuItemDOM
    const menuItemImgDOM = document.createElement("img")
    menuItemImgDOM.classList.add("photo")
    menuItemImgDOM.src = item.img
    menuItemImgDOM.alt = item.title

    // menu item info inside menuItemDOM
    const menuItemInfoDOM = document.createElement("div")
    menuItemInfoDOM.classList.add("menu-info")

    // menu item title inside menuItemInfoDOM
    const menuItemTitleDOM = document.createElement("div")
    menuItemTitleDOM.classList.add("menu-title")

    // menu item title text inside menuItemTitleDOM
    const menuItemTitle = document.createElement("h4")
    menuItemTitle.innerHTML = item.title

    // menu item price text inside menuItemTitleDOM
    const menuItemPrice = document.createElement("h4")
    menuItemPrice.classList.add("price")
    menuItemPrice.innerHTML = `${item.price}`

    // menu item description inside inside menuItemInfoDOM    
    const menuItemTextDOM = document.createElement("div")
    menuItemTextDOM.classList.add("menu-text")
    menuItemTextDOM.innerHTML = item.desc
    
    menuItemTitleDOM.append(menuItemTitle, menuItemPrice)
    menuItemInfoDOM.append(menuItemTitleDOM, menuItemTextDOM)
    menuItemDOM.append(menuItemImgDOM, menuItemInfoDOM)
    menuItemsDOM.append(menuItemDOM)

    console.log("menu item created!")
}




