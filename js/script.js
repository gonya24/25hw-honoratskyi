function showCategories () {
    const container = document.querySelector('.category');
    
    for (let i = 0; i <data.length;  i++) {
        const el = document.createElement('div');
        el.classList.add('category-item')
        el.innerHTML =data[i].name;
        el.setAttribute('data-category',i);
        el.addEventListener('mouseover', showProductHandler);
        container.appendChild(el)
    }
}
function showProductHandler (event) {
    const container = document.querySelector('.product');
    container.innerHTML = '';
    const el = event.target;
    const categoryIndex = el.getAttribute('data-category');
    const categoryProducts = data[categoryIndex].products;
    for (let i = 0;i < categoryProducts.length; i++) {
        const el =document.createElement('div');
        el.classList.add('product-item')
        const product = categoryProducts[i];
        el.innerHTML = `${product.name} ${product.model}`;
        el.setAttribute('data-category', categoryIndex);    
        el.setAttribute('data-product',i);
        el.addEventListener('click',showDetail);
        container.appendChild(el);
    }
}
function showDetail(event){
    const container = document.querySelector('.details')
    container.innerHTML= '';
    const el = event.target
    console.dir(el)
    const categoryIndex = el.getAttribute('data-category');
    const productIndex = el.getAttribute('data-product');
    const product = data[categoryIndex].products[productIndex];
    const elemDetail = document.createElement('div');
    elemDetail.setAttribute('data-category', categoryIndex);
    elemDetail.setAttribute('data-product', productIndex);
    elemDetail.innerHTML =`Product: ${product.name} ${product.model}</br>Price: ${product.price}$`;
    elemDetail.classList.add('detail-info')
    const buttonBuy = document.createElement('button');
    buttonBuy.innerHTML = 'Купити'
    buttonBuy.addEventListener('click', function Buy (){
        alert('Товар вже куплений!');
        container.innerHTML = '';
        const containerProd = document.querySelector('.product').innerHTML = '';;
        
    })    
    container.appendChild(elemDetail)
    container.appendChild(buttonBuy)
    
    
}
showCategories();