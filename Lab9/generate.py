# Import necessary modules from Django
import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hh_back.settings')
django.setup()

# Import your models
from api.models import Company, Vacancy

# Function to populate the database
def populate_database():
    # Sample data for companies
    company_data = [
        {
            'name': 'Company A',
            'description': 'Description of Company A',
            'city': 'City A',
            'address': 'Address of Company A'
        },
        {
            'name': 'Company B',
            'description': 'Description of Company B',
            'city': 'City B',
            'address': 'Address of Company B'
        },
        # Add more companies as needed
    ]

    # Sample data for vacancies
    vacancy_data = [
        {
            'name': 'Job A',
            'description': 'Description of Job A',
            'salary': 50000.0,  # Example salary
            'company_name': 'Company A'  # Match with existing company name
        },
        {
            'name': 'Job B',
            'description': 'Description of Job B',
            'salary': 60000.0,  # Example salary
            'company_name': 'Company B'  # Match with existing company name
        },
        # Add more vacancies as needed
    ]

    # Populate companies
    for data in company_data:
        company = Company.objects.create(
            name=data['name'],
            description=data['description'],
            city=data['city'],
            address=data['address']
        )
        company.save()

    # Populate vacancies
    for data in vacancy_data:
        # Find the corresponding company object
        company = Company.objects.get(name=data['company_name'])
        vacancy = Vacancy.objects.create(
            name=data['name'],
            description=data['description'],
            salary=data['salary'],
            company=company
        )
        vacancy.save()

# Call the function to populate the database
populate_database()
