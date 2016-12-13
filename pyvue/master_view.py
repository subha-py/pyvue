from django.http import JsonResponse

data=[
        {
            'id':1,
            'plot':'I crashed my car today!',
            'writer':'Alex',
            'upvotes':21,
        },
        {
            'id': 2,
            'plot': 'Someone ate my chocolate...',
            'writer':'John',
            'upvotes':22,
        },
        {
            'id': 3,
            'plot':"I ate someone's chocolate!",
            'writer':'Alex',
            'upvotes':20,
        },
        {
            'id': 4,
            'plot':'Yesterday,someone stole my bag!',
            'writer':'John',
            'upvotes':13,
        }

    ]

def get_api(request):
    return JsonResponse(data=data,safe=False)


def update_api(request,id):
    for story in data:
        if story['id']==id:
            story['upvotes']+=1
    return JsonResponse(data)