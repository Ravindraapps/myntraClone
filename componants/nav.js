function navbar () {
    return `<div class="logo" >
    <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS357fHYAnvyZIqrnolaRs3MlCQO7PyKngEag&usqp=CAU" alt="">
</div>
<div href="menProduct.html" id="menCat" class="menCat">MEN</div>
<div href="womenProduct.html" id="womenCat" class="menCat">WOMEN</div>
<div id="kidCat" class="menCat">KIDS</div>
<div id="homeCat" class="menCat">HOME & LIVING</div>
<div id="beautyCat" class="menCat">BEAUTY</div>
<div id="Studio" class="menCat">STUDIO</div>
<div id="inpDiv">
    <i id="searchIcon" class="fas fa-search"></i>
    <input id="searchInp" type="text" placeholder="Search for products,brands and more">
</div>
<div id="userProf">
    <i id="profile" class="far fa-user fa-2x"></i>
    <p id="profileU" class="prof">Profile</p>
</div>
<div>
    <i href="wishlist.html" id="wishList" class="far fa-heart fa-2x"></i>
    <p class="wish">Wishlist</p>
</div>
<div>
    <i href="bag.html" id="cartBag" class="fas fa-shopping-bag fa-2x"></i>
    <p class="bag">Bag</p>
</div>`;
}
  
  export default navbar;