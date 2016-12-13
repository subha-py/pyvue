from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from vue import views

urlpatterns = [
    url(r'^$', views.StoryList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', views.StoryDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)