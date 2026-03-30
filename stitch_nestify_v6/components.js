/**
 * Nestify Shared UI Components
 * Centralizes the branding (Header and Sidebar) for easy updates across the project.
 */

// Configuration for Paths (Relative to the HTML files in subfolders)
const PATHS = {
    logo: '../../nestify_logo-removebg-preview.png',
    login: '../nestify_login_screen/code.html',
    home: '../ai_matcher_updated_sidebar_icons/code.html',
    compare: '../portfolio_comparison_updated_sidebar_navigation/code.html',
    status: '../acquisition_portal_focused_journey_view/code.html'
};

/**
 * Renders the Oversized Top Navigation Bar (112px height)
 * @param {string} logoLink - Where the logo should link to (defaults to app home).
 */
function renderTopbar(logoLink = PATHS.home) {
    return `
    <nav class="bg-[#031632] dark:bg-[#020d1d] shadow-lg fixed top-0 z-50 flex justify-between items-center w-full px-8 py-4 max-w-full border-b border-white/5 h-[112px]">
        <div class="flex items-center gap-8">
            <a href="${logoLink}" class="flex items-center no-underline text-inherit px-2 group">
                <!-- Logo Only (Oversized) -->
                <img src="${PATHS.logo}" alt="Nestify Logo"
                    class="h-20 w-auto opacity-100 group-hover:scale-105 transition-transform duration-300">
            </a>
        </div>
        <div class="flex items-center gap-6">
            <button class="p-3 hover:bg-white/10 transition-all duration-200 rounded-full">
                <span class="material-symbols-outlined text-white text-3xl">notifications</span>
            </button>
            <button class="p-3 hover:bg-white/10 transition-all duration-200 rounded-full">
                <span class="material-symbols-outlined text-white text-3xl">account_circle</span>
            </button>
        </div>
    </nav>`;
}

/**
 * Renders the Sidebar with Content Offset (pt-10)
 * @param {string} activeId - The ID of the currently active navigation item.
 */
function renderSidebar(activeId = '') {
    const navItems = [
        { id: 'homes', label: 'Matched Homes', icon: 'home', url: PATHS.home },
        { id: 'compare', label: 'Compare Homes', icon: 'compare_arrows', url: PATHS.compare },
        { id: 'status', label: 'Status', icon: 'donut_large', url: PATHS.status }
    ];

    const navHtml = navItems.map(item => {
        const isActive = item.id === activeId;
        const activeClasses = isActive 
            ? 'bg-[#1A2B48] text-[#00CCF9] active-nav' 
            : 'text-slate-400 hover:text-white hover:bg-white/5';
        
        return `
        <a class="flex items-center gap-3 px-4 py-3 mx-2 transition-all rounded-lg ${activeClasses}"
           href="${item.url}">
            <span class="material-symbols-outlined">${item.icon}</span>
            <span class="font-label text-sm ${isActive ? 'font-bold' : ''}">${item.label}</span>
        </a>`;
    }).join('');

    return `
    <aside class="hidden md:flex flex-col py-6 gap-2 bg-[#031632] dark:bg-[#020d1d] border-r border-white/10 fixed left-0 w-64 shadow-2xl overflow-y-auto top-[112px] h-[calc(100vh-112px)] z-40">
        <div class="px-6 mb-8 pt-10">
            <h2 class="text-xl font-bold text-white font-headline mt-2">Editorial Intel</h2>
            <p class="text-xs font-label text-[#00ccf9]">AI-Driven Insights</p>
        </div>
        <nav class="flex-1 space-y-1">
            ${navHtml}
        </nav>
    </aside>`;
}
