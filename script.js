const blogPosts = [
    {
        title: "Solving Boolean Hell: A State Machine Approach. Part 1",
        date: "2026-01-09",
        excerpt: "Exploring the power of state machines for managing complex form validation. A deep dive into XState vs traditional React state management, and why declarative state machines can eliminate boolean hell while improving maintainability and developer experience.",
        link: "posts/state-machines-vs-react-state.html"
    }
];

const loadBlogPosts = () => {
    const blogGrid = document.getElementById('blogPosts');
    
    if (blogPosts.length === 0) {
        blogGrid.innerHTML = '<p class="empty-state">Coming soon... Blog posts will appear here.</p>';
        return;
    }

    blogGrid.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
        const card = document.createElement('a');
        card.href = post.link;
        card.className = 'blog-card';
        card.style.animationDelay = `${(index + 1) * 0.15}s`;
        
        const date = new Date(post.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        card.innerHTML = `
            <div class="blog-card-date">${formattedDate}</div>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
        `;
        
        blogGrid.appendChild(card);
    });
};

document.addEventListener('DOMContentLoaded', loadBlogPosts);