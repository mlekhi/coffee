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
            engine="gpt-3.5-turbo",  # Choose the engine based on your needs
            prompt=prompt,
            max_tokens=100,  # Adjust the value based on the desired response length
            n=1,  # Specify the number of completions to generate
            stop=None,  # Set custom stop sequences if needed
        )
        
        completion = response.choices[0].text.strip()
        
        return HttpResponse(openai.api_key)
    else:
        return HttpResponse("not working")
