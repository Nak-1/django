from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    companyName = serializers.CharField(max_length=100)
    companybusyo = serializers.CharField(max_length=100)
    name1 = serializers.CharField(max_length=100)
    name2 = serializers.CharField(max_length=100)
    furi1 = serializers.CharField(max_length=100)
    furi2 = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    tell = serializers.CharField(max_length=20)
    zip1 = serializers.CharField(max_length=10)
    zip2 = serializers.CharField(max_length=10)
    add = serializers.CharField(max_length=255)
    add2 = serializers.CharField(max_length=255)
    etc = serializers.CharField(max_length=255, required=False)  # Optional field
