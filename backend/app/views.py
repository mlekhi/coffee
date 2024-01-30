from django.shortcuts import render
from django.http import HttpResponse

import openai
import os

from django.views.decorators.csrf import csrf_exempt
openai.api_key = os.getenv("OPENAI_API_KEY")

# Create your views here.
@csrf_exempt 
def views(request):
    if request.method == 'POST':
        prompt = request.POST.get('prompt')
        
        response = openai.Completion.create(
            engine="gpt-3.5-turbo",  # Choose engine based on your needs
            prompt=prompt,
            max_tokens=100,  # Adjust value based on the desired response length
            n=1,  # Specify number of completions to generate
            stop=None,  # Set custom stop sequences if needed
        )
        
        completion = response.choices[0].text.strip()
        
        return HttpResponse(openai.api_key)
    else:
        return HttpResponse("not working")

# scraping part
from linkedin_scraper import Person, actions
from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://www.linkedin.com/in/maya-l/")

def scraping():
    email = "some-email@email.address"
    password = "password123"
    actions.login(driver, email, password) # if email and password isnt given, it'll prompt in terminal
    person = Person("https://www.linkedin.com/in/maya-l/")
