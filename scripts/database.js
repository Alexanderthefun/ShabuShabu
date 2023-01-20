export const database = {
    broths: [
        { 
            id: 1, 
            name: "Tonkotsu", 
            spicy: false, 
            canBeVegetarian: false, 
            description: "Traditional Japanese pork-bone based ramen broth with a savory flavor" 
        },
        { 
            id: 2, 
            name: "Miso", 
            spicy: false, 
            canBeVegetarian: true, 
            description: "Traditional Dashi stock mixed with softened miso paste." 
        },
        { 
            id: 3, 
            name: "Sukiyaki",
            spicy: false,
            canBeVegetarian: true,
            description: "Sweet and savory soy-based broth. "
        },
        { 
            id: 4, 
            name: "Tomato",
            spicy: false,
            canBeVegetarian: true,
            description: "Simple but delicious broth made with juicy ripened tomatos."
        },
        { 
            id: 5, 
            name: "Curry",
            spicy: true,
            canBeVegetarian: true,
            description: "Traditional Japanese yellow curry. Fragrant and flavorful with a mild heat level"
        },
        { 
            id: 6, 
            name: "Tom Yum",
            spicy: true,
            canBeVegetarian: true,
            description: "Thai hot and sour soup with added lemongrass and coconut milk. Medium heat level"
        },
        { 
            id: 7, 
            name: "Szechuan Spicy",
            spicy: true,
            canBeVegetarian: true,
            description: "Made with Szechuan peppers, peppercorn and chili oil. Your choice of Mild, Hot or Very Hot. Spicy and savory."
        }

    ]
}

export const getBroths = () => {
    return [...database.broths]
}