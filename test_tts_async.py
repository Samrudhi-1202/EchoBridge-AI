import asyncio
import edge_tts

async def main():
    print("Starting Edge TTS test...")
    communicate = edge_tts.Communicate(
        "ನಮಸ್ಕಾರ",
        voice="kn-IN-GaganNeural"
    )
    await communicate.save("async_test.mp3")
    print("Audio generated successfully!")

asyncio.run(main())