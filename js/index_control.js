let giay = document.getElementById('Giày');
let dep = document.getElementById('Dép');


giay.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
dep.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}