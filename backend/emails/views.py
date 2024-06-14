from django.shortcuts import render

# from django.core.mail import send_mail
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# import json

# @csrf_exempt
# def send_email(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             company_name = data.get('companyName')
#             company_busyo = data.get('companybusyo')
#             name1 = data.get('name1')
#             name2 = data.get('name2')
#             furi1 = data.get('furi1')
#             furi2 = data.get('furi2')
#             email = data.get('email')
#             tell = data.get('tell')
#             zip1 = data.get('zip1')
#             zip2 = data.get('zip2')
#             add = data.get('add')
#             add2 = data.get('add2')

#             subject = 'New Contact Form Submission'
#             message = f'''
#             Company Name: {company_name}
#             Department: {company_busyo}
#             Name: {name1} {name2}
#             Furigana: {furi1} {furi2}
#             Email: {email}
#             Telephone: {tell}
#             Zip Code: {zip1}-{zip2}
#             Address: {add}, {add2}
#             '''
#             from_email = 'your-email@gmail.com'
#             recipient_list = ['recipient@example.com']

#             send_mail(subject, message, from_email, recipient_list)

#             return JsonResponse({'message': 'Email sent successfully'})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=400)
#     return JsonResponse({'error': 'Invalid request'}, status=400)

from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import EmailSerializer

class SendEmailView(APIView):
    def post(self, request, *args, **kwargs):
        print('Received data:', request.data)  # Log received data for debugging
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            subject = f"Message from {data['companyName']}"
            message = (
                f"Company: {data['companyName']}\n"
                f"Department: {data['companybusyo']}\n"
                f"Name: {data['name1']} {data['name2']} ({data['furi1']} {data['furi2']})\n"
                f"Email: {data['email']}\n"
                f"Telephone: {data['tell']}\n"
                f"Address: {data['zip1']}-{data['zip2']} {data['add']} {data['add2']}\n"
                f"Etc: {data.get('etc', '')}\n"
            )
            recipient = data['email']  # Update with actual recipient email
            tt = send_mail(subject, message, 'natsagdorj.tu@gmail.com', [recipient])
            print(tt)
            return Response({"message": "Email sent successfully"}, status=status.HTTP_200_OK)
        else:
            print('Validation errors:', serializer.errors)  # Log validation errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

