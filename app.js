const searchBarContainerEl = document.getElementById("container");

const magnifierEl = document.getElementById("mag")




magnifierEl.addEventListener('click', () => {
      searchBarContainerEl.classList.toggle("active")
      const input = document.getElementById("input")
    
})