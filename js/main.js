let observer = new IntersectionObserver(function(entries){

    entries.forEach(entrie => {
        if(entrie.intersectionRatio > 0.5)
        {
            entrie.target.classList.remove('not-visible')

            observer.unobserve(entrie.target)


        }else{
            entrie.target.classList.add('not-visible')
        }
    })


}, {
    threshold: [0.5]
})

let items = document.querySelectorAll('p')

items.forEach((item) => {
    item.classList.add('not-visible')

    observer.observe(item)
})