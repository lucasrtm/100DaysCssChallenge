import $ from 'jquery'
export function openAside(){
    $('#notificationScreen')[0].classList.toggle('active')
    $('aside')[0].classList.toggle('active')
}
export function openSearch(){
    $('#searchInput')[0].classList.toggle('active')
}