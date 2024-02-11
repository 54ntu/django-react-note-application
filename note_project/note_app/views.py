from django.shortcuts import render,HttpResponse
from note_app.models import noteModel
from note_app.serializers import noteSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

# Create your views here.
@csrf_exempt
def homePage(request):
        if request.method =="GET":
                data = noteModel.objects.all()
                serializer = noteSerializer(data, many=True)
                return JsonResponse(serializer.data,safe=False)
        elif request.method =="POST":
                data = JSONParser().parse(request)
                serializer= noteSerializer(data=data)
                if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data,status=200)
                return HttpResponse(serializer.errors)
                
@csrf_exempt
def detailPage(request,pk):
        try:
                data = noteModel.objects.get(pk=pk)
        except noteModel.DoesNotExist:
                return HttpResponse("data not found")
        
        if request.method =="GET":
                serializer = noteSerializer(data)
                return JsonResponse(serializer.data)
        elif request.method =="PUT":
                response = JSONParser().parse(request)
                serializer = noteSerializer(data,data=response)
                if serializer.is_valid():
                        serializer.save()
                        return JsonResponse(serializer.data,status=200)
                return HttpResponse(serializer.errors)
        elif request.method =="DELETE":
                data.delete()
                return HttpResponse('data deleted successfully')
                