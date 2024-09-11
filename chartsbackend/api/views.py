from rest_framework.response import Response
from rest_framework.decorators import api_view
from datetime import datetime

@api_view(['GET'])
def candlestick_data(request):
    data = [
        {"x": "2023-01-01", "o": 30, "h": 40, "l": 25, "c": 35},
        {"x": "2023-01-02", "o": 35, "h": 45, "l": 30, "c": 40},
        {"x": "2023-01-03", "o": 40, "h": 43, "l": 20, "c": 23}
    ]
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40],
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200],
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100],
    }
    return Response(data)
