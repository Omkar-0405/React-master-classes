/**
 * REACT & JS INTERVIEW DOCUMENTATION HUB - CORE APP LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  const categories = window.INTERVIEW_CATEGORIES || [];
  const flatFileList = [];
  
  // Flatten file list for sequential navigation
  categories.forEach(cat => {
    cat.files.forEach(file => {
      flatFileList.push({ ...file, categoryId: cat.id, categoryName: cat.name, categoryNum: cat.number });
    });
  });

  let currentFileId = null;
  let activeSearchCategory = 'all';
  let completedFiles = JSON.parse(localStorage.getItem('doc_hub_completed') || '[]');
  let searchSelectedIndex = -1;

  // DOM Elements
  const leftSidebar = document.getElementById('left-sidebar');
  const sidebarNavScroll = document.getElementById('sidebar-nav-scroll');
  const sidebarFilterInput = document.getElementById('sidebar-filter-input');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const collapseSidebarBtn = document.getElementById('collapse-sidebar-btn');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  
  const mainDocTitle = document.getElementById('doc-main-title');
  const breadcrumbCat = document.getElementById('breadcrumb-cat');
  const breadcrumbTitle = document.getElementById('breadcrumb-title');
  const metaDifficulty = document.getElementById('meta-difficulty');
  const metaReadtime = document.getElementById('meta-readtime');
  const docContent = document.getElementById('doc-content');
  const prevTopicCard = document.getElementById('prev-topic-card');
  const nextTopicCard = document.getElementById('next-topic-card');
  
  const tocList = document.getElementById('toc-list');
  const mobileTocList = document.getElementById('mobile-toc-list');
  const mobileTocSheet = document.getElementById('mobile-toc-sheet');
  const closeMobileTocBtn = document.getElementById('close-mobile-toc-btn');
  
  const progressBar = document.getElementById('progress-bar');
  const progressMiniFill = document.getElementById('progress-mini-fill');
  const progressCountText = document.getElementById('progress-count-text');
  
  const sidebarProgressFill = document.getElementById('sidebar-progress-fill');
  const sidebarProgressPct = document.getElementById('sidebar-progress-pct');
  const sidebarProgressCount = document.getElementById('sidebar-progress-count');
  const markMasteredBtn = document.getElementById('mark-mastered-btn');
  const markMasteredIcon = document.getElementById('mark-mastered-icon');
  const markMasteredText = document.getElementById('mark-mastered-text');
  
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  
  const searchTriggerBtn = document.getElementById('search-trigger-btn');
  const searchModalBackdrop = document.getElementById('search-modal-backdrop');
  const searchModalInput = document.getElementById('search-modal-input');
  const searchResultsList = document.getElementById('search-results-list');
  const modalEscBtn = document.getElementById('modal-esc-btn');
  const mobileSearchBackBtn = document.getElementById('mobile-search-back-btn');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const searchCatPillsRow = document.getElementById('search-cat-pills-row');
  const printPdfBtn = document.getElementById('print-pdf-btn');

  // Mobile Bottom Bar Buttons
  const mobileBtnMenu = document.getElementById('mobile-btn-menu');
  const mobileBtnSearch = document.getElementById('mobile-btn-search');
  const mobileBtnToc = document.getElementById('mobile-btn-toc');
  const mobileBtnTheme = document.getElementById('mobile-btn-theme');
  const mobileBtnTop = document.getElementById('mobile-btn-top');

  // SEO Elements
  const seoTitle = document.getElementById('seo-title');
  const seoDescription = document.getElementById('seo-description');
  const ogTitle = document.getElementById('og-title');
  const ogDescription = document.getElementById('og-description');
  const twitterTitle = document.getElementById('twitter-title');
  const twitterDescription = document.getElementById('twitter-description');
  const canonicalUrl = document.getElementById('canonical-url');
  const seoJsonld = document.getElementById('seo-jsonld');

  // Initialize
  initTheme();
  renderLeftSidebar();
  updateProgressTracker();
  handleInitialRoute();

  // Event Listeners
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('scroll', handleScrollProgress);
  
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', toggleSidebarState);
  }

  if (collapseSidebarBtn) {
    collapseSidebarBtn.addEventListener('click', toggleSidebarState);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeMobileSidebar);
  }

  // Mobile Bottom Bar Event Handlers
  if (mobileBtnMenu) {
    mobileBtnMenu.addEventListener('click', toggleMobileSidebar);
  }
  if (mobileBtnSearch) {
    mobileBtnSearch.addEventListener('click', openSearchModal);
  }
  if (mobileBtnToc) {
    mobileBtnToc.addEventListener('click', toggleMobileTocSheet);
  }
  if (mobileBtnTheme) {
    mobileBtnTheme.addEventListener('click', toggleTheme);
  }
  if (mobileBtnTop) {
    mobileBtnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (closeMobileTocBtn) {
    closeMobileTocBtn.addEventListener('click', closeMobileTocSheet);
  }

  if (sidebarFilterInput) {
    sidebarFilterInput.addEventListener('input', (e) => {
      filterSidebarItems(e.target.value.trim().toLowerCase());
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => window.print());
  }

  if (markMasteredBtn) {
    markMasteredBtn.addEventListener('click', () => {
      if (!currentFileId) return;
      const isCompleted = completedFiles.includes(currentFileId);
      toggleFileCompleted(currentFileId, !isCompleted);

      const checkbox = document.querySelector(`.topic-checkbox[data-file-id="${currentFileId}"]`);
      if (checkbox) checkbox.checked = !isCompleted;
    });
  }

  // Global Search Triggers
  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener('click', openSearchModal);
  }
  if (modalEscBtn) {
    modalEscBtn.addEventListener('click', closeSearchModal);
  }
  if (mobileSearchBackBtn) {
    mobileSearchBackBtn.addEventListener('click', closeSearchModal);
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchModalInput.value = '';
      clearSearchBtn.style.display = 'none';
      performSearch('');
      searchModalInput.focus();
    });
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener('click', (e) => {
      if (e.target === searchModalBackdrop) closeSearchModal();
    });
  }

  // Search Category Pill Filters
  if (searchCatPillsRow) {
    searchCatPillsRow.addEventListener('click', (e) => {
      const pill = e.target.closest('.search-cat-pill');
      if (!pill) return;
      
      searchCatPillsRow.querySelectorAll('.search-cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeSearchCategory = pill.dataset.cat || 'all';
      performSearch(searchModalInput.value.trim().toLowerCase());
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'Escape') {
      closeSearchModal();
      closeMobileTocSheet();
      closeMobileSidebar();
    }
  });

  if (searchModalInput) {
    searchModalInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = val ? 'block' : 'none';
      performSearch(val.trim().toLowerCase());
    });

    searchModalInput.addEventListener('keydown', (e) => {
      const items = searchResultsList.querySelectorAll('.search-result-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchSelectedIndex = (searchSelectedIndex + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchSelectedIndex = (searchSelectedIndex - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchSelectedIndex >= 0 && items[searchSelectedIndex]) {
          items[searchSelectedIndex].click();
        } else if (items[0]) {
          items[0].click();
        }
      }
    });
  }

  function toggleSidebarState() {
    if (window.innerWidth <= 768) {
      toggleMobileSidebar();
    } else {
      leftSidebar.classList.toggle('collapsed');
    }
  }

  function toggleMobileSidebar() {
    const isOpen = leftSidebar.classList.contains('mobile-open');
    if (isOpen) {
      closeMobileSidebar();
    } else {
      leftSidebar.classList.add('mobile-open');
      if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileSidebar() {
    leftSidebar.classList.remove('mobile-open');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleMobileTocSheet() {
    if (!mobileTocSheet) return;
    mobileTocSheet.classList.toggle('open');
  }

  function closeMobileTocSheet() {
    if (mobileTocSheet) mobileTocSheet.classList.remove('open');
  }

  // ==========================================================================
  // RENDER LEFT SIDEMENU
  // ==========================================================================
  function renderLeftSidebar() {
    if (!sidebarNavScroll) return;
    sidebarNavScroll.innerHTML = '';

    categories.forEach((cat) => {
      const categoryGroup = document.createElement('div');
      categoryGroup.className = 'category-group open';
      categoryGroup.dataset.catId = cat.id;

      const categoryHeader = document.createElement('button');
      categoryHeader.className = 'category-header';
      categoryHeader.innerHTML = `
        <div class="category-header-left">
          <span class="category-num-badge">${cat.number}</span>
          <span class="category-name-text">${escapeHtml(cat.name)}</span>
        </div>
        <div class="category-header-right">
          <span class="category-count">${cat.files.length}</span>
          <span class="chevron-icon">▶</span>
        </div>
      `;

      categoryHeader.addEventListener('click', () => {
        categoryGroup.classList.toggle('open');
      });

      const topicList = document.createElement('ul');
      topicList.className = 'topic-list';

      cat.files.forEach((file) => {
        const li = document.createElement('li');
        li.className = 'topic-item';

        const isCompleted = completedFiles.includes(file.id);

        li.innerHTML = `
          <div class="topic-link" id="topic-link-${file.id}">
            <input type="checkbox" class="topic-checkbox" data-file-id="${file.id}" ${isCompleted ? 'checked' : ''} title="Mark as completed">
            <span class="topic-title-text" onclick="window.location.hash='#${cat.id}/${file.id}'">${escapeHtml(file.title)}</span>
          </div>
        `;

        const checkbox = li.querySelector('.topic-checkbox');
        checkbox.addEventListener('change', (e) => {
          e.stopPropagation();
          toggleFileCompleted(file.id, e.target.checked);
        });

        topicList.appendChild(li);
      });

      categoryGroup.appendChild(categoryHeader);
      categoryGroup.appendChild(topicList);
      sidebarNavScroll.appendChild(categoryGroup);
    });
  }

  function filterSidebarItems(query) {
    const categoryGroups = sidebarNavScroll.querySelectorAll('.category-group');
    categoryGroups.forEach((group) => {
      let hasVisibleChild = false;
      const items = group.querySelectorAll('.topic-item');
      items.forEach((item) => {
        const titleText = item.querySelector('.topic-title-text').textContent.toLowerCase();
        if (titleText.includes(query)) {
          item.style.display = 'block';
          hasVisibleChild = true;
        } else {
          item.style.display = 'none';
        }
      });

      if (hasVisibleChild || query === '') {
        group.style.display = 'block';
        if (query !== '') group.classList.add('open');
      } else {
        group.style.display = 'none';
      }
    });
  }

  function toggleFileCompleted(fileId, isChecked) {
    if (isChecked) {
      if (!completedFiles.includes(fileId)) completedFiles.push(fileId);
    } else {
      completedFiles = completedFiles.filter((id) => id !== fileId);
    }
    localStorage.setItem('doc_hub_completed', JSON.stringify(completedFiles));
    updateProgressTracker();
  }

  function updateProgressTracker() {
    const total = flatFileList.length;
    const count = completedFiles.length;
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;

    if (progressCountText) progressCountText.textContent = `${count} / ${total} (${pct}%)`;
    if (progressMiniFill) progressMiniFill.style.width = `${pct}%`;

    if (sidebarProgressPct) sidebarProgressPct.textContent = `${pct}%`;
    if (sidebarProgressFill) sidebarProgressFill.style.width = `${pct}%`;
    if (sidebarProgressCount) sidebarProgressCount.textContent = `${count} of ${total} completed`;

    updateMarkMasteredBtnState();
  }

  function updateMarkMasteredBtnState() {
    if (!markMasteredBtn || !currentFileId) return;
    const isCompleted = completedFiles.includes(currentFileId);

    if (isCompleted) {
      markMasteredBtn.classList.add('mastered');
      if (markMasteredIcon) markMasteredIcon.textContent = '✓';
      if (markMasteredText) markMasteredText.textContent = 'Mastered';
    } else {
      markMasteredBtn.classList.remove('mastered');
      if (markMasteredIcon) markMasteredIcon.textContent = '○';
      if (markMasteredText) markMasteredText.textContent = 'Mark Mastered';
    }
  }

  // ==========================================================================
  // ROUTING & DOCUMENT LOADING (WITH DYNAMIC SEO METADATA & SCHEMA)
  // ==========================================================================
  function handleInitialRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const parts = hash.split('/');
      if (parts.length >= 2) {
        loadDocument(parts[0], parts[1]);
        return;
      }
    }
    if (flatFileList.length > 0) {
      loadDocument(flatFileList[0].categoryId, flatFileList[0].id);
    }
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const parts = hash.split('/');
      if (parts.length >= 2) {
        loadDocument(parts[0], parts[1]);
      }
    }
  }

  async function loadDocument(catId, fileId) {
    const fileObj = flatFileList.find((f) => f.id === fileId);
    if (!fileObj) return;

    currentFileId = fileId;
    updateMarkMasteredBtnState();

    // Dynamic SEO Updates
    updateSEOMetadata(fileObj);

    document.querySelectorAll('.topic-link').forEach((el) => el.classList.remove('active'));
    const activeLink = document.getElementById(`topic-link-${fileId}`);
    if (activeLink) {
      activeLink.classList.add('active');
      const parentGroup = activeLink.closest('.category-group');
      if (parentGroup) parentGroup.classList.add('open');
    }

    breadcrumbCat.textContent = fileObj.categoryName;
    breadcrumbTitle.textContent = fileObj.title;
    mainDocTitle.textContent = fileObj.title;
    metaDifficulty.textContent = fileObj.difficulty || 'Core';
    metaReadtime.textContent = fileObj.readTime || '10 min read';

    docContent.innerHTML = `<div class="no-results-box">📖 Loading handbook content...</div>`;

    try {
      let response = await fetch(fileObj.fileName);
      if (!response.ok) {
        const rootFileName = fileObj.fileName.split('/').pop();
        response = await fetch(rootFileName);
      }
      if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
      
      let htmlText = await response.text();

      let extractedContent = '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      
      const container = doc.querySelector('.container') || doc.body;
      if (container) {
        container.querySelectorAll('button[onclick*="print"]').forEach(b => b.remove());
        container.querySelectorAll('h1').forEach(h => h.remove());
        extractedContent = container.innerHTML;
      } else {
        extractedContent = htmlText;
      }

      docContent.innerHTML = extractedContent;

      enhanceCodeBlocks();
      generateRightTOC();
      updateSequentialNavigation(fileId);

      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMobileSidebar();
      closeMobileTocSheet();

    } catch (err) {
      docContent.innerHTML = `
        <div class="no-results-box">
          <h3>⚠️ Unable to load document</h3>
          <p>${escapeHtml(err.message)}</p>
          <p>Target handbook path: <code>${escapeHtml(fileObj.fileName)}</code></p>
        </div>
      `;
    }
  }

  // Dynamic SEO & Structured Data Generator
  function updateSEOMetadata(fileObj) {
    const pageTitle = `${fileObj.title} - React & JS Interview Masterclass`;
    const pageDesc = `${fileObj.summary} Handbook covering ${fileObj.categoryName} interview concepts.`;

    document.title = pageTitle;
    if (seoTitle) seoTitle.textContent = pageTitle;
    if (seoDescription) seoDescription.setAttribute('content', pageDesc);
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    if (ogDescription) ogDescription.setAttribute('content', pageDesc);
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);
    if (twitterDescription) twitterDescription.setAttribute('content', pageDesc);
    if (canonicalUrl) canonicalUrl.setAttribute('href', window.location.href);

    // Update JSON-LD Schema.org TechArticle
    if (seoJsonld) {
      const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": fileObj.title,
        "description": fileObj.summary,
        "articleSection": fileObj.categoryName,
        "keywords": fileObj.tags.join(', '),
        "author": {
          "@type": "Person",
          "name": "Omkar"
        },
        "publisher": {
          "@type": "Organization",
          "name": "React & JS Hub"
        }
      };
      seoJsonld.textContent = JSON.stringify(jsonLdData);
    }
  }

  function enhanceCodeBlocks() {
    const preBlocks = docContent.querySelectorAll('pre');
    preBlocks.forEach((pre) => {
      if (pre.querySelector('.copy-code-btn')) return;
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-code-btn';
      copyBtn.textContent = 'Copy';
      copyBtn.addEventListener('click', () => {
        const codeText = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => (copyBtn.textContent = 'Copy'), 2000);
        });
      });
      pre.style.position = 'relative';
      pre.appendChild(copyBtn);
    });
  }

  // ==========================================================================
  // RIGHT TABLE OF CONTENTS (TOC) & MOBILE TOC SHEET
  // ==========================================================================
  function generateRightTOC() {
    if (tocList) tocList.innerHTML = '';
    if (mobileTocList) mobileTocList.innerHTML = '';

    const headings = docContent.querySelectorAll('h2, h3');
    if (!headings.length) {
      if (tocList) tocList.innerHTML = `<li style="font-size: 0.8rem; color: var(--text-muted);">No subheadings found.</li>`;
      if (mobileTocList) mobileTocList.innerHTML = `<li style="font-size: 0.8rem; color: var(--text-muted);">No subheadings found.</li>`;
      return;
    }

    headings.forEach((heading, idx) => {
      const headingId = `heading-${idx}`;
      heading.id = headingId;

      const titleText = heading.textContent.replace('📄 Download / Save as PDF', '').trim();

      // Desktop TOC Link
      if (tocList) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = `toc-link ${heading.tagName.toLowerCase() === 'h3' ? 'indent-3' : ''}`;
        a.href = `#${headingId}`;
        a.textContent = titleText;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          heading.scrollIntoView({ behavior: 'smooth' });
        });
        li.appendChild(a);
        tocList.appendChild(li);
      }

      // Mobile TOC Sheet Link
      if (mobileTocList) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = `toc-link ${heading.tagName.toLowerCase() === 'h3' ? 'indent-3' : ''}`;
        a.href = `#${headingId}`;
        a.textContent = titleText;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          heading.scrollIntoView({ behavior: 'smooth' });
          closeMobileTocSheet();
        });
        li.appendChild(a);
        mobileTocList.appendChild(li);
      }
    });

    setupScrollSpy(headings);
  }

  function setupScrollSpy(headings) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('.toc-link').forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    headings.forEach((h) => observer.observe(h));
  }

  // ==========================================================================
  // SEQUENTIAL PREVIOUS / NEXT NAVIGATION
  // ==========================================================================
  function updateSequentialNavigation(currentFileId) {
    const currIdx = flatFileList.findIndex((f) => f.id === currentFileId);
    if (currIdx === -1) return;

    const prevFile = flatFileList[currIdx - 1];
    const nextFile = flatFileList[currIdx + 1];

    if (prevFile) {
      prevTopicCard.style.visibility = 'visible';
      prevTopicCard.href = `#${prevFile.categoryId}/${prevFile.id}`;
      prevTopicCard.querySelector('.nav-topic-title').textContent = prevFile.title;
    } else {
      prevTopicCard.style.visibility = 'hidden';
    }

    if (nextFile) {
      nextTopicCard.style.visibility = 'visible';
      nextTopicCard.href = `#${nextFile.categoryId}/${nextFile.id}`;
      nextTopicCard.querySelector('.nav-topic-title').textContent = nextFile.title;
    } else {
      nextTopicCard.style.visibility = 'hidden';
    }
  }

  // ==========================================================================
  // GLOBAL SEARCH MODAL ENGINE
  // ==========================================================================
  function openSearchModal() {
    searchModalBackdrop.classList.add('open');
    searchModalInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    searchModalInput.focus();
    performSearch('');
    closeMobileSidebar();
    closeMobileTocSheet();
  }

  function closeSearchModal() {
    searchModalBackdrop.classList.remove('open');
    searchSelectedIndex = -1;
  }

  function performSearch(query) {
    searchResultsList.innerHTML = '';
    searchSelectedIndex = -1;

    let results = flatFileList;

    if (activeSearchCategory !== 'all') {
      results = results.filter((f) => f.categoryId === activeSearchCategory);
    }

    if (query) {
      results = results.filter((file) => {
        const titleMatch = file.title.toLowerCase().includes(query);
        const summaryMatch = file.summary.toLowerCase().includes(query);
        const catMatch = file.categoryName.toLowerCase().includes(query);
        const tagMatch = file.tags.some((t) => t.toLowerCase().includes(query));
        return titleMatch || summaryMatch || catMatch || tagMatch;
      });
    }

    if (!results.length) {
      searchResultsList.innerHTML = `
        <div class="no-results-box">
          <p>No matching topics found ${query ? `for "<strong>${escapeHtml(query)}</strong>"` : ''}</p>
        </div>
      `;
      return;
    }

    results.forEach((file, idx) => {
      const li = document.createElement('li');
      li.className = `search-result-item ${idx === 0 ? 'selected' : ''}`;
      
      const tagsHtml = file.tags.slice(0, 3).map(t => `<span class="result-tag">${escapeHtml(t)}</span>`).join('');

      li.innerHTML = `
        <div class="result-header-row">
          <span class="result-title">${highlightText(file.title, query)}</span>
          <span class="result-cat-badge">Cat ${file.categoryNum}: ${escapeHtml(file.categoryName)}</span>
        </div>
        <div class="result-summary">${highlightText(file.summary, query)}</div>
        <div class="result-tags-row">${tagsHtml}</div>
      `;

      li.addEventListener('click', () => {
        closeSearchModal();
        window.location.hash = `#${file.categoryId}/${file.id}`;
      });

      searchResultsList.appendChild(li);
    });

    if (query) searchSelectedIndex = 0;
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === searchSelectedIndex);
      if (idx === searchSelectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  // ==========================================================================
  // THEME SWITCHER
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('doc_hub_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const themes = ['light', 'dark', 'midnight'];
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('doc_hub_theme', nextTheme);
    updateThemeUI(nextTheme);
  }

  function updateThemeUI(theme) {
    if (!themeIcon || !themeLabel) return;
    if (theme === 'light') {
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Light';
    } else if (theme === 'dark') {
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Dark';
    } else {
      themeIcon.textContent = '🌌';
      themeLabel.textContent = 'OLED';
    }
  }

  // ==========================================================================
  // UTILS & HELPERS
  // ==========================================================================
  function handleScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapedText.replace(regex, '<mark style="background: rgba(253, 224, 71, 0.4); color: inherit; padding: 0 2px; border-radius: 2px;">$1</mark>');
  }
});
