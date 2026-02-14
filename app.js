// 切换更多操作菜单
function toggleMoreActions(btn) {
    const menu = btn.nextElementSibling;
    
    // 关闭其他打开的下拉菜单
    document.querySelectorAll('.dropup-menu.show').forEach(m => {
        if (m !== menu) m.classList.remove('show');
    });
    
    menu.classList.toggle('show');
    
    // 点击外部关闭
    if (!window.hasDropupListener) {
    document.addEventListener('click', function(e) {
            // 如果点击的不是按钮且不是菜单本身，则关闭菜单
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
        window.hasDropupListener = true;
    }
}
