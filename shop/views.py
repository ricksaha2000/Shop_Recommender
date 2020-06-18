from django.shortcuts import render, get_object_or_404
# Create your views here.
from django.http import HttpResponse
from .recommender import Recommender
from cart.forms import CartAddProductForm
from .models import Category,Product
#Creates a list view to display all the products or filter them with category
def product_list(request , category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available = True)

    if category_slug:
        category = get_object_or_404(Category , slug = category_slug)
        products = products.filter(category = category)

    return render(request , 'shop/product/events.html' , {'category':category , 'categories':categories , 'products':products})


#Creates a detail view to display all the particular product based on 
def product_detail(request , id , slug):
    product = get_object_or_404(Product , id=id , slug=slug , available = True)

    cart_product_form = CartAddProductForm()

    r = Recommender()
    recommended_products = r.suggest_products_for([product] , 4)

    
    return render(request , 'shop/product/details.html' , {'product':product , 'cart_product_form':cart_product_form , 'recommended_products': recommended_products })




