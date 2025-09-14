// 主要功能和交互脚本

class PersonalSite {
  constructor() {
    this.data = window.siteData;
    this.projects = window.projectsData || [];
    this.currentTheme = localStorage.getItem('theme') || 'auto';
    this.visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    this.init();
  }

  // 初始化网站
  init() {
    this.updateVisitCount();
    this.initTheme();
    this.renderContent();
    this.bindEvents();
    this.initAnimations();
    this.hideLoader();
  }

  // 更新访问统计
  updateVisitCount() {
    this.visitCount++;
    localStorage.setItem('visitCount', this.visitCount.toString());
    const countElement = document.getElementById('visitCount');
    if (countElement) {
      countElement.textContent = this.visitCount;
    }
  }

  // 初始化主题
  initTheme() {
    if (this.currentTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.dataset.theme = prefersDark ? 'dark' : 'light';
    } else {
      document.body.dataset.theme = this.currentTheme;
    }
  }

  // 渲染页面内容
  renderContent() {
    this.renderProfile();
    this.renderNavigation();
    this.renderTimeline();
    this.renderTechStack();
    this.renderProjects();
    this.renderExternalLinks();
    this.renderContacts();
  }

  // 渲染个人资料
  renderProfile() {
    const { profile } = this.data;
    
    // 更新头像
    const avatar = document.querySelector('header img');
    if (avatar) {
      avatar.src = profile.avatar;
      avatar.alt = `${profile.name}的头像`;
    }

    // 更新标题
    const title = document.querySelector('header h1');
    if (title) {
      title.textContent = `${profile.name} - ${profile.title}`;
    }

    // 更新副标题
    const subtitle = document.querySelector('header p');
    if (subtitle) {
      subtitle.textContent = profile.subtitle;
    }

    // 更新简介
    const aboutText = document.querySelector('#about p');
    if (aboutText) {
      aboutText.textContent = profile.description;
    }
  }

  // 渲染导航
  renderNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    nav.innerHTML = this.data.navigation.map(item => 
      `<a href="${item.href}" data-section="${item.href.substring(1)}">
        <span class="nav-icon">${item.icon}</span>
        ${item.name}
      </a>`
    ).join('');
  }

  // 渲染时间线
  renderTimeline() {
    const timelineContainer = document.querySelector('#timeline');
    if (!timelineContainer) return;

    const timelineHTML = `
      <h2>个人经历与足迹</h2>
      <div class="timeline">
        ${this.data.timeline.map(item => `
          <div class="card timeline-item" style="--accent-color: ${item.color}">
            <div class="timeline-icon">${item.icon}</div>
            <div class="timeline-content">
              <h3>${item.year} - ${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    timelineContainer.innerHTML = timelineHTML;
  }

  // 渲染技术栈
  renderTechStack() {
    const techContainer = document.querySelector('#tech');
    if (!techContainer) return;

    const techHTML = `
      <h2>傍身之术</h2>
      <div class="tech-grid">
        ${this.data.techStack.map(category => `
          <div class="tech-card" style="--category-color: ${category.color}">
            <div class="tech-icon">${category.icon}</div>
            <h3>${category.category}</h3>
            <div class="tech-skills">
              ${category.skills.map(skill => `
                <span class="skill-tag">${skill}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    techContainer.innerHTML = techHTML;
  }

  // 渲染项目作品集
  renderProjects() {
    const projectsContainer = document.querySelector('#projects');
    if (!projectsContainer) return;

    const projectsHTML = `
      <h2>作品集</h2>
      <div class="grid">
        ${this.projects.map(project => `
          <div class="project-card" data-project-id="${project.id}">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-card-content">
              <h3>${project.title}</h3>
              <p>${project.shortDesc}</p>
              <div class="project-links">
                ${project.sourceUrl ? 
                  `<a href="${project.sourceUrl}" target="_blank">🔓 开源</a>` : 
                  ''
                }
                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank">🚀 Demo</a>` : ''}
                <a href="#" class="view-details" data-project-id="${project.id}">📋 详情</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    projectsContainer.innerHTML = projectsHTML;
  }

  // 渲染外链模块
  renderExternalLinks() {
    const externalLinksContainer = document.querySelector('#external-links');
    if (!externalLinksContainer) return;

    const externalLinksHTML = `
      <h2>友情链接</h2>
      <div class="external-links-grid">
        ${this.data.externalLinks.map(person => `
          <div class="external-link-card" data-person-id="${person.id}">
            <div class="external-link-avatar">
              <img src="${person.avatar}" alt="${person.name}的头像" loading="lazy">
              <div class="external-link-status ${person.status === '待链接' ? 'status-pending' : 'status-active'}">
                ${person.status}
              </div>
            </div>
            <div class="external-link-content">
              <h3>${person.name}</h3>
              <p class="external-link-title">${person.title}</p>
              <p class="external-link-description">${person.description}</p>
              <div class="external-link-tags">
                ${person.tags.map(tag => `<span class="external-link-tag">${tag}</span>`).join('')}
              </div>
              <div class="external-link-footer">
                <span class="external-link-date">加入时间：${person.joinDate}</span>
                ${person.status === '待链接' ? 
                  '<button class="external-link-btn external-link-btn-disabled" disabled>待链接</button>' :
                  '<button class="external-link-btn external-link-btn-active">访问主页</button>'
                }
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    externalLinksContainer.innerHTML = externalLinksHTML;
  }

  // 渲染联系方式与社交媒体
  renderContacts() {
    const contactContainer = document.querySelector('#contact');
    if (!contactContainer) return;

    const contactItems = this.data.contactsAndSocial.filter(item => item.category === 'contact');
    const socialItems = this.data.contactsAndSocial.filter(item => item.category === 'social');

    const contactHTML = `
      <h2>联系方式与社交媒体</h2>
      
      <h3 style="margin: 2rem 0 1rem 0; text-align: center; color: var(--text-secondary);">📞 联系方式</h3>
      <div class="contact-buttons">
        ${contactItems.map(contact => `
          <button class="contact-btn ${contact.actionType === 'qr' ? 'contact-btn-qr' : 'contact-btn-link'}" 
                  data-type="${contact.type}" 
                  data-action="${contact.actionType}"
                  data-link="${contact.link || ''}"
                  data-qr="${contact.qrCode || ''}"
                  data-label="${contact.label}">
            <span class="contact-btn-icon">${contact.icon}</span>
            <span class="contact-btn-text">
              <strong>${contact.label}</strong>
              <small>${contact.value}</small>
            </span>
          </button>
        `).join('')}
      </div>
      
      <h3 style="margin: 3rem 0 1rem 0; text-align: center; color: var(--text-secondary);">🌐 社交媒体</h3>
      <div class="contact-buttons">
        ${socialItems.map(social => `
          <button class="contact-btn ${social.actionType === 'qr' ? 'contact-btn-qr' : 'contact-btn-link'}" 
                  data-type="${social.type}" 
                  data-action="${social.actionType}"
                  data-link="${social.link || ''}"
                  data-qr="${social.qrCode || ''}"
                  data-label="${social.label}">
            <span class="contact-btn-icon">${social.icon}</span>
            <span class="contact-btn-text">
              <strong>${social.label}</strong>
              <small>${social.value}</small>
            </span>
          </button>
        `).join('')}
      </div>
    `;

    contactContainer.innerHTML = contactHTML;
  }

  // 绑定事件监听器
  bindEvents() {
    // 暗黑模式切换
    const darkToggle = document.querySelector('.dark-toggle');
    if (darkToggle) {
      darkToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    // 平滑滚动导航
    document.addEventListener('click', (e) => {
      if (e.target.closest('nav a[href^="#"]')) {
        e.preventDefault();
        const target = e.target.closest('a');
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });

    // 项目详情弹窗
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('view-details')) {
        e.preventDefault();
        const projectId = parseInt(e.target.dataset.projectId);
        this.showProjectModal(projectId);
      }
    });

    // 项目详情图片点击查看大图
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('project-detail-image')) {
        e.preventDefault();
        this.showImageModal(e.target.src, e.target.alt);
      }
    });

    // 二维码图片点击查看大图
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('qr-code-image')) {
        e.preventDefault();
        this.showImageModal(e.target.src, e.target.alt);
      }
    });

    // 模态框关闭
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
        this.closeModal();
      }
    });

    // 图片模态框关闭
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('image-modal') || e.target.classList.contains('image-modal-close')) {
        this.closeImageModal();
      }
    });

    // 联系方式按钮点击
    document.addEventListener('click', (e) => {
      const contactBtn = e.target.closest('.contact-btn');
      if (contactBtn) {
        e.preventDefault();
        const actionType = contactBtn.dataset.action;
        const link = contactBtn.dataset.link;
        const qrCode = contactBtn.dataset.qr;
        const label = contactBtn.dataset.label;

        if (actionType === 'link' && link) {
          // 直接跳转链接
          window.open(link, '_blank');
        } else if (actionType === 'qr' && qrCode) {
          // 显示二维码
          this.showQrModal(qrCode, label);
        }
      }
    });

    // 二维码模态框关闭
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('qr-modal') || e.target.classList.contains('qr-modal-close')) {
        this.closeQrModal();
      }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // 按优先级关闭模态框：二维码 > 图片 > 项目
        const qrModal = document.querySelector('.qr-modal');
        const imageModal = document.querySelector('.image-modal');
        
        if (qrModal) {
          this.closeQrModal();
        } else if (imageModal) {
          this.closeImageModal();
        } else {
          this.closeModal();
        }
      }
    });

    // 滚动事件
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // 回到顶部按钮
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // 主题偏好变化监听
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (this.currentTheme === 'auto') {
        document.body.dataset.theme = e.matches ? 'dark' : 'light';
      }
    });
  }

  // 处理滚动事件
  handleScroll() {
    const scrollY = window.scrollY;
    
    // 固定导航栏显示/隐藏
    const navFixed = document.querySelector('.nav-fixed');
    if (navFixed) {
      if (scrollY > window.innerHeight * 0.3) {
        navFixed.classList.add('visible');
      } else {
        navFixed.classList.remove('visible');
      }
    }

    // 回到顶部按钮显示/隐藏
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // 滚动动画
    this.animateOnScroll();
  }

  // 滚动动画
  animateOnScroll() {
    const elements = document.querySelectorAll('section:not(.visible)');
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }

  // 初始化动画
  initAnimations() {
    // 页面加载动画
    setTimeout(() => {
      this.animateOnScroll();
    }, 100);

    // Intersection Observer for better performance
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });
    }
  }

  // 切换暗黑模式
  toggleDarkMode() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.dataset.theme = newTheme;
    this.currentTheme = newTheme;
    localStorage.setItem('theme', newTheme);

    // 更新按钮文字
    const darkToggle = document.querySelector('.dark-toggle');
    if (darkToggle) {
      darkToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  // 显示项目详情模态框
  showProjectModal(projectId) {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;

    const modalHTML = `
      <div class="modal active">
        <div class="modal-content">
          <div class="modal-header">
            <h2>${project.title}</h2>
            <button class="modal-close">&times;</button>
          </div>
          <div class="modal-body">
            <img src="${project.image}" alt="${project.title}" class="project-detail-image" style="width: 100%; border-radius: 8px; margin-bottom: 20px; cursor: pointer;" title="点击查看大图">
            
            <div class="project-details">
              <h3>项目概述</h3>
              <p>${project.details.overview}</p>
              
              <h3>技术栈</h3>
              <div class="tech-tags">
                ${project.technologies.map(tech => 
                  `<span class="tech-tag">${tech}</span>`
                ).join('')}
              </div>
              
              <h3>主要功能</h3>
              <ul>
                ${project.features.map(feature => 
                  `<li>${feature}</li>`
                ).join('')}
              </ul>
              
              <h3>挑战与解决方案</h3>
              <p><strong>挑战：</strong>${project.details.challenges}</p>
              <p><strong>解决方案：</strong>${project.details.solutions}</p>
              
              <h3>项目成果</h3>
              <p>${project.details.results}</p>
              
              <div class="project-actions">
                ${project.sourceUrl ? 
                  `<a href="${project.sourceUrl}" target="_blank" class="btn btn-primary">🔓 查看源码</a>` : 
                  '<span class="btn btn-disabled">🔒 源码不可用</span>'
                }
                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn btn-secondary">🚀 在线演示</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // 移除现有模态框
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
      existingModal.remove();
    }

    // 添加新模态框
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
  }

  // 显示图片大图模态框
  showImageModal(imageSrc, imageAlt) {
    const imageModalHTML = `
      <div class="image-modal active">
        <div class="image-modal-content">
          <button class="image-modal-close">&times;</button>
          <img src="${imageSrc}" alt="${imageAlt}" class="large-image">
          <div class="image-modal-caption">${imageAlt}</div>
        </div>
      </div>
    `;

    // 移除现有图片模态框
    const existingImageModal = document.querySelector('.image-modal');
    if (existingImageModal) {
      existingImageModal.remove();
    }

    // 添加新图片模态框
    document.body.insertAdjacentHTML('beforeend', imageModalHTML);
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
  }

  // 关闭图片模态框
  closeImageModal() {
    const imageModal = document.querySelector('.image-modal');
    if (imageModal) {
      imageModal.classList.remove('active');
      setTimeout(() => {
        imageModal.remove();
        document.body.style.overflow = '';
      }, 200);
    }
  }

  // 显示二维码模态框
  showQrModal(qrSrc, label) {
    const qrModalHTML = `
      <div class="qr-modal active">
        <div class="qr-modal-content">
          <button class="qr-modal-close">&times;</button>
          <div class="qr-modal-header">
            <h3>${label}</h3>
            <p>使用手机扫描下方二维码</p>
          </div>
          <div class="qr-modal-body">
            <img src="${qrSrc}" alt="${label}二维码" class="qr-code-image" title="点击查看大图">
          </div>
        </div>
      </div>
    `;

    // 移除现有二维码模态框
    const existingQrModal = document.querySelector('.qr-modal');
    if (existingQrModal) {
      existingQrModal.remove();
    }

    // 添加新二维码模态框
    document.body.insertAdjacentHTML('beforeend', qrModalHTML);
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
  }

  // 关闭二维码模态框
  closeQrModal() {
    const qrModal = document.querySelector('.qr-modal');
    if (qrModal) {
      qrModal.classList.remove('active');
      setTimeout(() => {
        qrModal.remove();
        document.body.style.overflow = '';
      }, 200);
    }
  }

  // 关闭模态框
  closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 200);
    }
  }

  // 隐藏加载器
  hideLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 1000);
    }
  }

  // 添加技能动画效果（可选）
  animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const skill = bar.dataset.skill;
      const level = this.data.skillLevels[skill] || 0;
      const fill = bar.querySelector('.skill-fill');
      
      if (fill) {
        setTimeout(() => {
          fill.style.width = `${level}%`;
        }, 200);
      }
    });
  }

  // 添加打字机效果（可选）
  typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 添加加载器
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="page-loader">
      <div class="loader-spinner"></div>
    </div>
  `);

  // 添加固定导航栏
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="nav-fixed">
      <nav></nav>
    </div>
  `);

  // 添加回到顶部按钮
  document.body.insertAdjacentHTML('beforeend', `
    <button class="back-to-top" title="回到顶部">↑</button>
  `);

  // 添加业务推广冒泡框
  document.body.insertAdjacentHTML('beforeend', `
    <div class="business-bubble" title="点击了解更多">
      <span class="bubble-title">🚀 承接各类开发：</span>
      <div class="bubble-services">小程序 · App · 鸿蒙 · iOS · Web 网页</div>
      <span class="bubble-cta">👉 技术落地，让想法成真！</span>
    </div>
  `);

  // 初始化网站
  new PersonalSite();
});

// 导出类以供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PersonalSite;
} else if (typeof window !== 'undefined') {
  window.PersonalSite = PersonalSite;
}
