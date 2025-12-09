import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('.env.local')

client = openai.OpenAI(
    api_key=os.getenv('OPENAI_API_KEY'),
    base_url=os.getenv('OPENAI_BASE_URL')
)

response = client.chat.completions.create(
    model=os.getenv('OPENAI_MODEL', 'gpt-5.1'),
    messages=[
        {"role": "user", "content": "Hello! How are you?"}
    ]
)

print(response.choices[0].message.content)
