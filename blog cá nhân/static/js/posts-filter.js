// Posts Filter & Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Tab Switching
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.getElementById(tabName + '-tab').classList.add('active');
    });
  });

  // Search Functionality
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const searchResults = document.getElementById('searchResults');
  const postsContainer = document.getElementById('posts-container');
  const allPosts = document.querySelectorAll('.post-entry');
  const noResults = document.getElementById('no-results');

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      
      // Show/hide clear button
      if (searchTerm) {
        clearSearch.style.display = 'flex';
      } else {
        clearSearch.style.display = 'none';
      }

      // Filter posts
      filterPosts(searchTerm);
    });

    clearSearch.addEventListener('click', function() {
      searchInput.value = '';
      this.style.display = 'none';
      showAllPosts();
    });
  }

  // Tags Filter
  const tagButtons = document.querySelectorAll('.filter-tag');
  
  tagButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');
      
      // Update active state
      tagButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter posts by tag
      if (selectedTag === 'all') {
        showAllPosts();
      } else {
        filterByTag(selectedTag);
      }
    });
  });

  // Categories Filter
  const categoryButtons = document.querySelectorAll('.filter-category');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedCategory = this.getAttribute('data-category');
      
      // Update active state
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter posts by category
      if (selectedCategory === 'all') {
        showAllPosts();
      } else {
        filterByCategory(selectedCategory);
      }
    });
  });

  // Filter Functions
  function filterPosts(searchTerm) {
    if (!searchTerm) {
      showAllPosts();
      return;
    }

    let visibleCount = 0;

    allPosts.forEach(post => {
      const title = post.querySelector('.entry-header h2').textContent.toLowerCase();
      const summary = post.querySelector('.entry-content p')?.textContent.toLowerCase() || '';
      const tags = post.getAttribute('data-tags')?.toLowerCase() || '';
      const categories = post.getAttribute('data-categories')?.toLowerCase() || '';
      
      const matches = title.includes(searchTerm) || 
                     summary.includes(searchTerm) || 
                     tags.includes(searchTerm) ||
                     categories.includes(searchTerm);
      
      if (matches) {
        post.classList.remove('hidden');
        visibleCount++;
      } else {
        post.classList.add('hidden');
      }
    });

    // Show/hide no results message
    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }

  function filterByTag(tag) {
    let visibleCount = 0;

    allPosts.forEach(post => {
      const postTags = post.getAttribute('data-tags')?.toLowerCase() || '';
      
      if (postTags.includes(tag.toLowerCase())) {
        post.classList.remove('hidden');
        visibleCount++;
      } else {
        post.classList.add('hidden');
      }
    });

    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }

  function filterByCategory(category) {
    let visibleCount = 0;

    allPosts.forEach(post => {
      const postCategories = post.getAttribute('data-categories')?.toLowerCase() || '';
      
      if (postCategories.includes(category.toLowerCase())) {
        post.classList.remove('hidden');
        visibleCount++;
      } else {
        post.classList.add('hidden');
      }
    });

    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }

  function showAllPosts() {
    allPosts.forEach(post => post.classList.remove('hidden'));
    noResults.style.display = 'none';
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
      // Switch to search tab
      document.querySelector('[data-tab="search"]').click();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && searchInput === document.activeElement) {
      searchInput.value = '';
      clearSearch.style.display = 'none';
      showAllPosts();
      searchInput.blur();
    }
  });
});
