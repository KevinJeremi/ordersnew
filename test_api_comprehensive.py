import openai
import base64
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('.env.local')

client = openai.OpenAI(
    api_key=os.getenv('OPENAI_API_KEY'),
    base_url=os.getenv('OPENAI_BASE_URL')
)

# Test 1: Simple text chat
MODEL = os.getenv('OPENAI_MODEL', 'gpt-5.1')

print("=" * 50)
print("TEST 1: Simple Text Chat")
print("=" * 50)
response = client.chat.completions.create(
    model=MODEL,
    messages=[
        {"role": "user", "content": "Hello! How are you?"}
    ]
)
print(f"Response: {response.choices[0].message.content}\n")

# Test 2: Math problem
print("=" * 50)
print("TEST 2: Math Problem")
print("=" * 50)
response = client.chat.completions.create(
    model=MODEL,
    messages=[
        {"role": "user", "content": "What is 25 * 4 + 10?"}
    ]
)
print(f"Response: {response.choices[0].message.content}\n")

# Test 3: Multi-turn conversation
print("=" * 50)
print("TEST 3: Multi-turn Conversation")
print("=" * 50)
response = client.chat.completions.create(
    model=MODEL,
    messages=[
        {"role": "user", "content": "What is Python?"},
        {"role": "assistant", "content": "Python is a high-level programming language."},
        {"role": "user", "content": "Give me a simple example"}
    ]
)
print(f"Response: {response.choices[0].message.content}\n")

# Test 4: Image analysis
print("=" * 50)
print("TEST 4: Image Analysis")
print("=" * 50)

image_path = r"D:\Website Orders\next-ai-draw-io-main\ai.png"

if os.path.exists(image_path):
    try:
        # Baca gambar dan encode ke base64
        with open(image_path, "rb") as image_file:
            image_data = base64.standard_b64encode(image_file.read()).decode("utf-8")
        
        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Analisa gambar ini. Apa yang kamu lihat? Jelaskan secara detail."},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{image_data}"
                            }
                        }
                    ]
                }
            ]
        )
        print(f"Image Analysis Result:\n{response.choices[0].message.content}\n")
    except Exception as e:
        print(f"Error analyzing image: {e}\n")
else:
    print(f"Image file not found at {image_path}\n")

# Test 5: Code generation
print("=" * 50)
print("TEST 5: Code Generation")
print("=" * 50)
response = client.chat.completions.create(
    model=MODEL,
    messages=[
        {"role": "user", "content": "Generate a simple Python function that checks if a number is prime"}
    ]
)
print(f"Response: {response.choices[0].message.content}\n")

print("=" * 50)
print("ALL TESTS COMPLETED SUCCESSFULLY!")
print("=" * 50)
