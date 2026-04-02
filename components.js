/**
 * Nestify Shared UI Components
 * Centralizes the branding (Header and Sidebar) for easy updates across the project.
 */

// Configuration for Paths (Relative to the HTML files in root)
const PATHS = {
    logo: 'nestify_logo-removebg-preview.png',
    login: 'index.html',
    home: 'ai_matcher_updated_sidebar_icons.html',
    compare: 'portfolio_comparison_updated_sidebar_navigation.html',
    status: 'acquisition_portal_focused_journey_view.html',
    privacy: '#',
    terms: '#',
    support: '#'
};

/**
 * Renders the Oversized Top Navigation Bar (112px height)
 * @param {string} logoLink - Where the logo should link to (defaults to app home).
 */
function renderTopbar(logoLink = PATHS.home) {
    return `
    <nav class="bg-white dark:bg-[#020d1d] shadow-sm fixed top-0 z-50 flex justify-between items-center w-full px-8 py-3 max-w-full border-b border-slate-200 h-16">
        <div class="flex items-center gap-8">
            <a href="${logoLink}" class="flex items-center no-underline text-inherit px-2 group">
                <!-- Text Logo (Nestify) -->
                <span class="text-3xl font-black tracking-tighter text-[#031632] group-hover:scale-105 transition-transform duration-300 font-headline">Nestify</span>
            </a>
        </div>
        <div class="flex items-center gap-6">
            <button class="p-2.5 hover:bg-slate-100 transition-all duration-200 rounded-full text-[#031632]">
                <span class="material-symbols-outlined text-2xl">notifications</span>
            </button>
            <button class="p-2.5 hover:bg-slate-100 transition-all duration-200 rounded-full text-[#031632]">
                <span class="material-symbols-outlined text-2xl">account_circle</span>
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
    <aside class="hidden md:flex flex-col py-8 gap-2 bg-[#031632] dark:bg-[#020d1d] border-r border-white/10 fixed left-0 w-64 shadow-2xl overflow-y-auto top-16 h-[calc(100vh-64px)] z-40">
        <nav class="flex-1 space-y-1">
            ${navHtml}
        </nav>
    </aside>`;
}

/**
 * Renders the Standardized Footer
 */
function renderFooter() {
    return `
    <footer class="bg-white dark:bg-[#020d1d] py-12 px-12 border-t border-slate-200 dark:border-white/10 mt-auto">
        <div class="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto gap-6">
            <div class="flex flex-col items-center md:items-start gap-2">
                <span class="font-headline font-bold text-primary dark:text-white">Nestify</span>
                <p class="font-body text-xs tracking-wide uppercase text-slate-400">©2026 Nestify. All rights reserved.</p>
            </div>
            <div class="flex items-center gap-8">
                <a class="font-body text-xs tracking-wide uppercase text-slate-400 hover:text-secondary transition-colors duration-200" href="${PATHS.privacy}">Privacy Policy</a>
                <a class="font-body text-xs tracking-wide uppercase text-slate-400 hover:text-secondary transition-colors duration-200" href="${PATHS.terms}">Terms of Service</a>
                <a class="font-body text-xs tracking-wide uppercase text-slate-400 hover:text-secondary transition-colors duration-200" href="${PATHS.support}">Support</a>
            </div>
        </div>
    </footer>`;
}
