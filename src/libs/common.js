function ajaxFail (result) {
    if (result.msg === '未登录') {
        this.$store.commit('logout', this);
        this.$store.commit('clearOpenedSubmenu');
        this.$router.push('/login');
    }
}

window.ajaxFail = ajaxFail;
