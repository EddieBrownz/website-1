
    // Array of recipes, each with an intro, ingredients, steps, and a video link
    const recipes = [
        {
            intro: "Scrambled Eggs with Smoked Trout and Crème Fraîche",
            ingredients: [
                "8 large eggs",
                "Kosher salt and pepper",
                "1 Tbsp. olive oil or unsalted butter",
                "1/4 c. crème fraîche, plus more for serving",
                "1/2 c. flaked smoked trout",
                "1/2 small red onion, thinly sliced"
            ],
            steps: [
                { title: "Step 1", content: "In a large bowl, whisk together eggs, 1 tablespoon water and 1/2 teaspoon each salt and pepper." },
                { title: "Step 2", content: "Heat oil or butter in a 10-inch nonstick skillet on medium. Add eggs and cook, stirring with a rubber spatula every few seconds, to desired doneness, 2 to 3 minutes for medium-soft eggs." },
                { title: "Step 3", content: "Fold crème fraîche, then trout and red onion into scrambled eggs. Dollop with additional crème fraîche." }
            ],
            video: "https://www.youtube.com/embed/g7-ILfguxYs?si=Xc3-fAyoXTejdSUL&amp;controls=0"
        },
        {
            intro: "A classic recipe for hard-boiled eggs.",
            ingredients: [
                "4 large eggs",
                "Water",
                "Salt (optional)"
            ],
            steps: [
                { title: "Step 1", content: "Place the eggs in a saucepan and cover with water." },
                { title: "Step 2", content: "Bring water to a boil over medium-high heat." },
                { title: "Step 3", content: "Once boiling, reduce heat and simmer for 10-12 minutes." },
                { title: "Step 4", content: "Drain the water, cool the eggs in ice water, then peel and serve." }
            ],
            video: "https://www.youtube.com/embed/dg51LRrfWY0?si=BIU5yCE0xXCVC14m&amp;controls=0"
        },
        {
            intro: "Avocado Toast with Poached Egg",
            ingredients: [
                "2 ripe avocados",
                "4 slices of whole-grain bread",
                "4 eggs",
                "1 tablespoon vinegar",
                "Kosher salt and pepper to taste",
                "1 tsp. white vinegar",
                "Red pepper flakes (optional)"
            ],
            steps: [
                { title: "Step 1", content: "Toast the bread slices until golden brown." },
                { title: "Step 2", content: "TIn a small pot, bring water to a simmer and add vinegar. Crack eggs into the simmering water and poach for 3-4 minutes." },
                { title: "Step 3", content: "While the eggs are poaching, mash the avocados in a bowl and season with salt and pepper." },
                { title: "Step 4", content: "Spread the mashed avocado on the toasted bread. Top each slice with a poached egg" },
                {title : "step 5" , content: "Sprinkle with red pepper flakes if desired, and serve immediately."}
            ],
            video: "https://www.youtube.com/embed/GxL9fTvf4go?si=VAZ1eMy85T_ZfPOC&amp;controls=0"
        },
        {
            intro: "Classic French Omelet",
            ingredients: [
                "3 large eggs",
                "1 Tbsp. unsalted butter",
                "Salt and pepper to taste",
                "2 Tbsp. shredded cheese (optional)",
                "Fresh herbs (optional)"
            ],
            steps: [
                { title: "Step 1", content: "Whisk the eggs in a bowl until smooth." },
                { title: "Step 2", content: "Heat butter in a nonstick skillet over medium-low heat." },
                { title: "Step 3", content: "Pour in the eggs and stir continuously until they start to set." },
                { title: "Step 4", content: "Fold the omelet gently, add cheese or herbs if desired, and serve immediately." }
            ],
            video: "https://www.youtube.com/embed/UHNpCBm0gj0?si=JGj3G9withxbBsBi&amp;controls=0"
        },
        {
            intro: "Shakshuka (Eggs in Spiced Tomato Sauce)",
            ingredients: [
                "1 Tbsp. olive oil",
                "1 small onion, diced",
                "1 bell pepper, diced",
                "2 cloves garlic, minced",
                "1 can (14 oz) crushed tomatoes",
                "1 tsp. cumin",
                "1/2 tsp. paprika",
                "Salt and pepper to taste",
                "4 large eggs",
                "Fresh parsley for garnish"
            ],
            steps: [
                { title: "Step 1", content: "Heat olive oil in a skillet over medium heat. Sauté onions, bell peppers, and garlic until soft." },
                { title: "Step 2", content: "Add crushed tomatoes, cumin, paprika, salt, and pepper. Simmer for 10 minutes." },
                { title: "Step 3", content: "Make small wells in the sauce and crack the eggs into them. Cover and cook until eggs are set, about 5 minutes." },
                { title: "Step 4", content: "Garnish with fresh parsley and serve with warm bread." }
            ],
            video: "https://www.youtube.com/embed/3AC8thsvwW4?si=Yp1hM-PUt1ijj1km&amp;controls=0"
        }
    ];

    // Function to display a random recipe with its video
    function displayRandomRecipe() {
        // Select a random recipe from the recipes array
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

        // Clear previous recipe content
        const factsContainer = document.getElementById('factsContainer');
        factsContainer.innerHTML = '';

        // Create a new article element to display the recipe
        const article = document.createElement('div');
        article.classList.add('article');
        article.innerHTML = `
            <h1 style="color: rgba(69, 123, 157, 1)">RECIPE</h1>
            <p>${randomRecipe.intro}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${randomRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Steps:</h3>
            <ul>
                ${randomRecipe.steps.map(step => `
                    <li>
                        <strong>${step.title}:</strong>
                        <p>${step.content}</p>
                    </li>
                `).join('')}
            </ul>
        `;

        // Add the new article to the facts container
        factsContainer.appendChild(article);

        // Display the related video from the same recipe
        const videoContainer = document.getElementById('videoContainer');
    
        const mainVideo = document.getElementById('mainVideo');
        mainVideo.src = randomRecipe.video; // Set the video source to the selected recipe's video
    }

    // Set up an event listener on the button to show a new recipe when clicked
    
    document.getElementById('getRandomFact').addEventListener('click', displayRandomRecipe);
    $(document).ready(function () {
       
        
       
        
        // Animate button
        
        $('img.logo').hover(
                function () {
                    $(this).animate({ width: '200px', backgroundColor: '#ffcc00' }, 1000);
                },
                function () {
                    $(this).animate({ width: '140px', backgroundColor: '#f8f9fa' }, 500);
                }
            );
    });
   