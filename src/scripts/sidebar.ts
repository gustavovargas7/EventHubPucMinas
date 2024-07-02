// export function closeSidebar() {
//     const container = document.querySelector('.container-sidebar');
//     const profile = document.querySelector('.profile');
//     const svgUser = document.querySelector('.svg');
//     const options = document.querySelectorAll('.options-sidebar');
//     const icons = document.querySelectorAll('.icons-sidebar');

//     if (!container || !profile || !svgUser || options.length === 0 || icons.length === 0) {
//         return;
//     }

//     const toggleClass = (element: Element, ...classes: string[]) => {
//         classes.forEach(cls => element.classList.toggle(cls));
//     };

//     toggleClass(profile, 'w-12', 'h-12', 'w-20', 'h-20');
//     toggleClass(svgUser, 'w-12', 'h-12', 'w-20', 'h-20');
//     toggleClass(container, 'w-[300px]', 'w-[90px]'); 
//     options.forEach(option => toggleClass(option, 'd-none'));
//     icons.forEach(icon => toggleClass(icon, 'w-full'));
// }
