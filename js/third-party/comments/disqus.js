/* global NexT, CONFIG, DISQUS */
document.addEventListener("page:loaded",()=>{if(CONFIG.disqus.count){const t=()=>{NexT.utils.getScript(`https://${CONFIG.disqus.shortname}.disqus.com/count.js`,{attributes:{id:"dsq-count-scr"}})};
// defer loading until the whole page loading is completed
window.addEventListener("load",t,!1)}if(CONFIG.page.comments){const t=function(){this.page.url=CONFIG.page.permalink,this.page.identifier=CONFIG.page.path,this.page.title=CONFIG.page.title,"disqus"!==CONFIG.disqus.i18n.disqus&&(this.language=CONFIG.disqus.i18n.disqus)};NexT.utils.loadComments("#disqus_thread").then(()=>{window.DISQUS?DISQUS.reset({reload:!0,config:t}):NexT.utils.getScript(`https://${CONFIG.disqus.shortname}.disqus.com/embed.js`,{attributes:{dataset:{timestamp:""+ +new Date}}})})}});