// --- JAVASCRIPT WITH PERSISTENCE (localStorage), RESET, AND CUSTOM MESSAGES ---

// 1. Get DOM element
const imageElement = document.querySelector('.xyjah'); 
const storageKey = 'clickedLoveItems'; // Key for localStorage


// ⭐️ UPDATED: Function to handle the image click with love letter ⭐️
function handleImageClick() {
    alert(`Dear Mabby,

Every time I wake up, I thank God for blessing us with another day to fight, to love, and to cherish each other. I am beyond grateful for you and everything you bring into my life. Please take care of yourself, and amping mo there sa Giligaon!

Yours always,
Haji`);
}

// Function to save the state of all clicked items to localStorage
function saveClickedState() {
    const clickedIndexes = Array.from(listItems)
        .filter(item => item.classList.contains('clicked'))
        .map(item => getItemIndex(item));
        
    localStorage.setItem(storageKey, JSON.stringify(clickedIndexes));
}

// Load the saved state when the page loads
if (imageElement) {
    imageElement.addEventListener('click', handleImageClick);
}
