import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
gsap.from(".skills", {
    scrollTrigger:{
        trigger:".skills",
        start:"60px 80%",
        toggleActions:"restart none repeat none"
    }, y: -50, duration: 1 });

gsap.from(".work_", {
    scrollTrigger:{
        trigger:".work_",
        toggleActions:"restart none repeat none"
    }, x: 100, duration:1 , borderTopLeftRadius:500});
export default gsap_an;