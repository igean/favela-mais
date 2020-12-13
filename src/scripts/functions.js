const pages = document.querySelectorAll('.page')

function home() {
    pages.forEach(el => {
        console.log(el)
    })

    const home_page = document.getElementById('home')
    home_page.style.opacity = '1'
}

export default home;