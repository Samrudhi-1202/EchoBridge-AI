
import os
import tempfile

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel
import edge_tts

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

class SpeechRequest(BaseModel):
    text: str


async def generate_kannada_audio(text: str) -> bytes:
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as temp:
        audio_file = temp.name

    try:
        await edge_tts.Communicate(
            text,
            voice="kn-IN-SapnaNeural"
        ).save(audio_file)

        with open(audio_file, "rb") as file:
            return file.read()
    finally:
        if os.path.exists(audio_file):
            os.remove(audio_file)


@app.post("/speak")
async def speak(request: SpeechRequest):
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text is empty")

    try:
        audio = await generate_kannada_audio(request.text)

        if not audio:
            raise HTTPException(
                status_code=500,
                detail="No audio was generated"
            )

        return Response(content=audio, media_type="audio/mpeg")

    except HTTPException:
        raise
    except Exception as error:
        print("KANNADA TTS ERROR:", repr(error), flush=True)
        raise HTTPException(status_code=500, detail=str(error))


@app.get("/")
def home():
    return {"message": "EchoBridge Kannada TTS is running"}
