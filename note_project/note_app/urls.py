from django.urls import path
from . import views

urlpatterns = [
    path('',views.homePage,name='index'),
    path('detail/<int:pk>',views.detailPage,name="detail-page"),

]
