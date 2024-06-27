
export function closeSidebar() {
    const container = document.querySelector('.container-sidebar')
    const profile = document.querySelector('.profile')
    const svgUser = document.querySelector('.svg')
    const options = document.querySelectorAll('.options-sidebar')
    const icons = document.querySelectorAll('.icons-sidebar')

    if (container) {
        profile.classList.toggle('w-12')
        profile.classList.toggle('h-12')

        profile.classList.toggle('w-20')
        profile.classList.toggle('h-20')

        svgUser.classList.toggle('w-12')
        svgUser.classList.toggle('h-12')

        svgUser.classList.toggle('w-20')
        svgUser.classList.toggle('h-20')

        container.classList.toggle('w-[300px]')
        container.classList.toggle('w-[90px]')
        options.forEach(option => {
            option.classList.toggle('d-none')
        });
        icons.forEach(option => {
            option.classList.toggle('w-full')
        });
    }
}