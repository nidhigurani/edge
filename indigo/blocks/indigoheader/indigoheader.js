export default async function decorate(block) {
    if (document.readyState !== 'loading') {
        console.log('document is already ready, just execute code here');
        myInitCode();
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            console.log('document was not ready, place code here');
            myInitCode();
        });
    }
    function myInitCode() {
        // setTimeout(()=>{
        console.log("--Timeout finished::::::::::::::::::::::::")
        var script = document.createElement('script');
        script.src = 'https://aem-dev-skyplus6e.goindigo.in/content/experience-fragments/skyplus6e/in/en/edge/header.js?test';
        document.head.appendChild(script);
        // },10000)
    }
}