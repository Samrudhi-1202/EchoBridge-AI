
import TextToSpeech from "./components/TextToSpeech";
import SpeechToText from "./components/SpeechToText";
import { useEffect, useRef, useState } from "react";

import {
  Accessibility,
  ArrowRight,
  AudioLines,
  Camera,
  Check,
  Copy,
  Heart,
  MessageCircle,
  Mic,
  MicOff,
  Play,
  ShieldCheck,
  Sparkles,
  Volume2,
  Video,
  VideoOff,
  X,
} from "lucide-react";

import LiveISLRecognition from "./isl/LiveISLRecognition";
import "./App.css";

/* ==========================================
   COMMUNICATION MODES
========================================== */

const modes = [
  {
    id: "sign",
    number: "01",
    title: "Sign to Text",
    description:
      "Make communication more accessible by translating signs into text.",
    icon: Accessibility,
  },
  {
    id: "speech",
    number: "02",
    title: "Speech to Text",
    description:
      "Convert spoken words into readable text in real time.",
    icon: AudioLines,
  },
  {
    id: "text",
    number: "03",
    title: "Text to Speech",
    description:
      "Turn written messages into spoken words.",
    icon: Volume2,
  },
  {
    id: "live",
    number: "04",
    title: "Live Communication",
    description:
      "Bring speech and sign-based communication together in one screen.",
    icon: Video,
  },
];

/* ==========================================
   MAIN APPLICATION
========================================== */

export default function App() {
  const [activeMode, setActiveMode] = useState("live");
  const [showStudio, setShowStudio] = useState(false);

  const openMode = (modeId) => {
    setActiveMode(modeId);
    setShowStudio(true);

    setTimeout(() => {
      document
        .getElementById("communication-studio")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const goHome = () => {
    setShowStudio(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* NAVIGATION */}

      <header className="navbar">
        <a
          href="#home"
          className="brand"
          onClick={(event) => {
            event.preventDefault();
            goHome();
          }}
        >
          <span className="brand-logo">
            <Accessibility size={25} />
          </span>

          <span>
            EchoBridge<span className="brand-ai"> AI</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home" onClick={goHome}>
            Home
          </a>

          <a href="#features">Features</a>

          <a href="#how-it-works">How It Works</a>
        </nav>

        <button
          className="nav-button"
          onClick={() => openMode("live")}
        >
          Try Demo <ArrowRight size={16} />
        </button>
      </header>

      <main>
        {!showStudio && (
          <>
            {/* HERO */}

            <section className="hero" id="home">
              <div className="hero-content">
                <div className="hero-badge">
                  <Sparkles size={15} />
                  Communication without barriers
                </div>

                <h1>
                  Every Voice
                  <br />
                  Deserves to Be{" "}
                  <span className="gradient-text">
                    Heard.
                  </span>
                </h1>

                <p className="hero-description">
                  Bridging the gap between sign language and spoken
                  communication with an accessible, AI-powered
                  communication experience.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-button"
                    onClick={() => openMode("live")}
                  >
                    Try Live Communication
                    <ArrowRight size={18} />
                  </button>

                  <a
                    href="#features"
                    className="secondary-button"
                  >
                    Explore Features
                  </a>
                </div>

                <div className="hero-trust">
                  <span>
                    <Check size={15} /> Accessibility focused
                  </span>

                  <span>
                    <Check size={15} /> Easy to use
                  </span>
                </div>
              </div>

              <div className="hero-visual">
                <div className="visual-orbit orbit-one" />
                <div className="visual-orbit orbit-two" />

                <div className="visual-card">
                  <div className="visual-card-top">
                    <span className="online-dot" />
                    Communication Preview
                  </div>

                  <div className="visual-icon">
                    <Accessibility size={66} />
                  </div>

                  <div className="visual-message">
                    <MessageCircle size={19} />

                    <div>
                      <strong>Understanding each other</strong>
                      <p>One conversation. Multiple ways to connect.</p>
                    </div>
                  </div>

                  <div className="visual-wave">
                    {Array.from({ length: 25 }).map((_, index) => (
                      <span
                        key={index}
                        style={{
                          height: `${12 + ((index * 17) % 35)}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="floating-card floating-card-top">
                  <AudioLines size={19} />
                  <span>Speech recognition</span>
                  <Check size={16} />
                </div>

                <div className="floating-card floating-card-bottom">
                  <Heart size={19} />
                  <span>Inclusive by design</span>
                </div>
              </div>
            </section>

            {/* IMPACT STRIP */}

            <section className="impact-strip">
              <div>
                <strong>One Platform</strong>
                <span>Multiple communication modes</span>
              </div>

              <div>
                <strong>Real-Time</strong>
                <span>Speech recognition support</span>
              </div>

              <div>
                <strong>Accessible</strong>
                <span>Designed for inclusion</span>
              </div>
            </section>

            {/* FEATURES */}

            <section className="features-section" id="features">
              <div className="section-heading">
                <span className="eyebrow">OUR FEATURES</span>

                <h2>
                  Communication,{" "}
                  <span className="gradient-text">
                    reimagined.
                  </span>
                </h2>

                <p>
                  Choose the communication experience that works
                  for you.
                </p>
              </div>

              <div className="feature-grid">
                {modes.map((mode) => {
                  const Icon = mode.icon;

                  return (
                    <article
                      className="feature-card"
                      key={mode.id}
                    >
                      <div className="feature-card-top">
                        <span className="feature-number">
                          {mode.number}
                        </span>

                        <span className="feature-icon">
                          <Icon size={25} />
                        </span>
                      </div>

                      <h3>{mode.title}</h3>

                      <p>{mode.description}</p>

                      <button
                        className="feature-link"
                        onClick={() => openMode(mode.id)}
                      >
                        Try this mode
                        <ArrowRight size={16} />
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* HOW IT WORKS */}

            <section
              className="how-section"
              id="how-it-works"
            >
              <div className="section-heading">
                <span className="eyebrow">HOW IT WORKS</span>

                <h2>
                  Simple steps.{" "}
                  <span className="gradient-text">
                    Better connections.
                  </span>
                </h2>
              </div>

              <div className="steps-grid">
                <div className="step-card">
                  <span className="step-number">01</span>
                  <h3>Choose your mode</h3>
                  <p>
                    Select a communication tool based on your needs.
                  </p>
                </div>

                <div className="step-card">
                  <span className="step-number">02</span>
                  <h3>Start communicating</h3>
                  <p>
                    Use speech, text, or the available sign
                    demonstration.
                  </p>
                </div>

                <div className="step-card">
                  <span className="step-number">03</span>
                  <h3>Connect with others</h3>
                  <p>
                    Make communication easier through a shared
                    experience.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}

            <section className="cta-section">
              <div className="cta-content">
                <Sparkles size={28} />

                <h2>
                  Let's make every conversation count.
                </h2>

                <p>
                  Explore EchoBridge AI and experience accessible
                  communication.
                </p>

                <button
                  className="primary-button"
                  onClick={() => openMode("live")}
                >
                  Start a Demo <ArrowRight size={18} />
                </button>
              </div>
            </section>
          </>
        )}

        {/* COMMUNICATION STUDIO */}

        {showStudio && (
          <section
            className="studio-page"
            id="communication-studio"
          >
            <button
              className="back-button"
              onClick={goHome}
            >
              <ArrowRight
                size={17}
                style={{ transform: "rotate(180deg)" }}
              />
              Back to Home
            </button>

            <div className="studio-page-heading">
              <span className="eyebrow">
                ECHOBRIDGE AI STUDIO
              </span>

              <h1>
                Communication{" "}
                <span className="gradient-text">Studio</span>
              </h1>

              <p>
                Select a mode to begin. Choose your preferred language
                in Speech to Text or Text to Speech.
              </p>
            </div>

            <div className="mode-selector">
              {modes.map((mode) => {
                const Icon = mode.icon;

                return (
                  <button
                    key={mode.id}
                    className={`mode-selector-button ${
                      activeMode === mode.id ? "selected" : ""
                    }`}
                    onClick={() => setActiveMode(mode.id)}
                  >
                    <Icon size={20} />
                    <span>{mode.title}</span>
                  </button>
                );
              })}
            </div>

            <CommunicationStudio
              key={activeMode}
              activeMode={activeMode}
            />
          </section>
        )}
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <a
          href="#home"
          className="brand footer-brand"
          onClick={(event) => {
            event.preventDefault();
            goHome();
          }}
        >
          <span className="brand-logo">
            <Accessibility size={22} />
          </span>

          <span>
            EchoBridge<span className="brand-ai"> AI</span>
          </span>
        </a>

        <p>
          Built for a more inclusive world. Every voice matters.
        </p>

        <span className="footer-copy">
          © {new Date().getFullYear()} EchoBridge AI
        </span>
      </footer>
    </div>
  );
}

/* ==========================================
   COMMUNICATION STUDIO
========================================== */

function CommunicationStudio({ activeMode }) {
  const [sessionActive, setSessionActive] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [micError, setMicError] = useState("");
  const [listening, setListening] = useState(false);
  const [interimText, setInterimText] = useState("");
  const [inputText, setInputText] = useState("");
  const [transcript, setTranscript] = useState([]);
  const [notice, setNotice] = useState("");

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);
  const sessionRef = useRef(false);
  const restartTimerRef = useRef(null);

  const liveMode = activeMode === "live";

  const currentMode = modes.find(
    (mode) => mode.id === activeMode
  );

  const addMessage = (sender, text) => {
    const cleanedText = text.trim();

    if (!cleanedText) return;

    setTranscript((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random()}`,
        sender,
        text: cleanedText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setNotice("");
  };

  /* CAMERA PREVIEW */

  useEffect(() => {
    if (!sessionActive || !videoRef.current || !streamRef.current) {
      return;
    }

    videoRef.current.srcObject = streamRef.current;
    videoRef.current.play().catch(() => {});
  }, [sessionActive]);

  /* START LIVE SESSION */

  const startSession = async () => {
    setCameraError("");
    setMicError("");
    setNotice("");

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError(
        "Camera access is unavailable. Open the site using localhost or HTTPS."
      );
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;
      sessionRef.current = true;
      setSessionActive(true);

      const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        setMicError(
          "This browser does not support live speech recognition. Try Chrome."
        );
        return;
      }

      const recognition = new SpeechRecognition();

      recognition.lang = "en-IN";
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setListening(true);
        setMicError("");
      };

      recognition.onresult = (event) => {
        let finalText = "";
        let currentText = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          const phrase = result[0].transcript;

          if (result.isFinal) {
            finalText += phrase;
          } else {
            currentText += phrase;
          }
        }

        setInterimText(currentText);

        if (finalText.trim()) {
          addMessage("Speech", finalText);
        }
      };

      recognition.onerror = (event) => {
        if (
          event.error !== "no-speech" &&
          event.error !== "aborted"
        ) {
          setMicError(`Speech recognition issue: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setListening(false);

        if (sessionRef.current) {
          restartTimerRef.current = setTimeout(() => {
            if (!sessionRef.current) return;

            try {
              recognition.start();
            } catch {
              // Recognition may already be restarting.
            }
          }, 300);
        }
      };

      recognitionRef.current = recognition;

      try {
        recognition.start();
      } catch {
        setMicError(
          "Speech recognition could not start. Check browser permissions."
        );
      }
    } catch (error) {
      sessionRef.current = false;
      setSessionActive(false);

      setCameraError(
        error.name === "NotAllowedError"
          ? "Camera or microphone permission was denied. Allow access in your browser."
          : "Unable to access the camera and microphone. Check your device settings."
      );

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });

        streamRef.current = null;
      }
    }
  };

  /* END LIVE SESSION */

  const endSession = () => {
    sessionRef.current = false;

    setSessionActive(false);
    setListening(false);
    setInterimText("");

    clearTimeout(restartTimerRef.current);

    if (recognitionRef.current) {
      recognitionRef.current.onend = null;

      try {
        recognitionRef.current.stop();
      } catch {
        // Recognition may already have stopped.
      }

      recognitionRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  /* SAMPLE SIGN PHRASE */

  const speakSignPhrase = (phrase) => {
    addMessage("Sign demonstration", phrase);

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = "en-IN";

      window.speechSynthesis.speak(utterance);
    }
  };

  /* COPY TRANSCRIPT */

  const copyTranscript = async () => {
    const content = transcript
      .map(
        (message) =>
          `${message.time} | ${message.sender}: ${message.text}`
      )
      .join("\n");

    try {
      await navigator.clipboard.writeText(content);
      setNotice("Conversation copied successfully.");
    } catch {
      setNotice(
        "Unable to copy. Check your browser clipboard permissions."
      );
    }
  };

  /* CLEANUP */

  useEffect(() => {
    return () => {
      sessionRef.current = false;

      clearTimeout(restartTimerRef.current);

      if (recognitionRef.current) {
        recognitionRef.current.onend = null;

        try {
          recognitionRef.current.stop();
        } catch {
          // Recognition may already have stopped.
        }
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  /* ==========================================
     SPEECH TO TEXT - THREE LANGUAGES
  ========================================== */

  if (activeMode === "speech") {
    return <SpeechToText />;
  }

  /* ==========================================
     TEXT TO SPEECH - THREE LANGUAGES
  ========================================== */

  if (activeMode === "text") {
    return <TextToSpeech />;
  }

  /* ==========================================
     LIVE COMMUNICATION MODE
  ========================================== */

  if (liveMode) {
    return (
      <div className="communication-studio">
        <div className="studio-heading">
          <div>
            <span className="eyebrow">
              TWO-WAY COMMUNICATION
            </span>

            <h2>Live Communication</h2>

            <p>
              Keep the camera and speech recognition running together
              in one session.
            </p>
          </div>

          <span
            className={`session-status ${
              sessionActive ? "session-active" : ""
            }`}
          >
            <span className="status-dot" />

            {sessionActive ? "Session active" : "Session stopped"}
          </span>
        </div>

        <div className="live-communication-grid">
          {/* CAMERA PANEL */}

          <div className="live-panel">
            <div className="live-panel-heading">
              <div>
                <Camera size={20} />
                <h3>Sign Communication</h3>
              </div>

              <span>Camera</span>
            </div>

            <div className="live-camera">
              {sessionActive ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  aria-label="Live camera preview"
                />
              ) : (
                <div className="camera-placeholder">
                  <VideoOff size={38} />
                  <p>Camera preview appears here</p>
                </div>
              )}
            </div>

            <p className="live-description">
              Try a sample phrase to demonstrate how a recognized
              sign phrase could be spoken aloud.
            </p>

            <div className="sign-phrase-buttons">
              {[
                "Hello, how are you?",
                "I need help.",
                "Thank you.",
                "Please wait.",
              ].map((phrase) => (
                <button
                  key={phrase}
                  type="button"
                  className="sign-phrase-button"
                  onClick={() => speakSignPhrase(phrase)}
                >
                  <Volume2 size={15} />
                  {phrase}
                </button>
              ))}
            </div>
          </div>

          {/* SPEECH PANEL */}

          <div className="live-panel">
            <div className="live-panel-heading">
              <div>
                <Mic size={20} />
                <h3>Speech Communication</h3>
              </div>

              <span>
                {listening ? "Listening" : "Microphone"}
              </span>
            </div>

            <div className="speech-live-box">
              <div className="speech-icon">
                <AudioLines size={34} />
              </div>

              <p className="speech-live-label">
                {listening
                  ? "Listening to speech..."
                  : sessionActive
                  ? "Waiting for speech..."
                  : "Start a session to begin"}
              </p>

              <p className="speech-live-text">
                {interimText ||
                  "Your recognized spoken words will appear here."}
              </p>
            </div>

            <p className="live-description">
              Speak naturally. Recognized speech is added to the
              shared conversation automatically.
            </p>

            {micError && (
              <p className="live-error">{micError}</p>
            )}
            {sessionActive && streamRef.current && (
  <LiveISLRecognition
    compact
    externalStream={streamRef.current}
    onMessage={(message) => addMessage("Sign", message)}
  />
)}
          </div>
        </div>

        {/* SHARED TRANSCRIPT */}

        <div className="live-transcript-panel">
          <div className="transcript-heading">
            <div>
              <MessageCircle size={20} />
              <h3>Live Conversation</h3>
            </div>

            <button
              type="button"
              className="copy-transcript-button"
              onClick={copyTranscript}
              disabled={transcript.length === 0}
            >
              <Copy size={15} />
              Copy
            </button>
          </div>

          <div
            className="transcript-messages"
            aria-live="polite"
          >
            {transcript.length === 0 ? (
              <div className="transcript-empty">
                <MessageCircle size={30} />
                <p>Your conversation will appear here.</p>
                <span>
                  Speak or try one of the sample sign phrases.
                </span>
              </div>
            ) : (
              transcript.map((message) => (
                <div
                  key={message.id}
                  className={`transcript-message ${
                    message.sender === "Speech"
                      ? "speech-message"
                      : "sign-message"
                  }`}
                >
                  <div className="transcript-message-top">
                    <strong>{message.sender}</strong>
                    <time>{message.time}</time>
                  </div>

                  <p>{message.text}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* SESSION CONTROLS */}

        {cameraError && (
          <p className="live-error">{cameraError}</p>
        )}

        <div className="live-session-controls">
          {!sessionActive ? (
            <button
              type="button"
              className="start-session-button"
              onClick={startSession}
            >
              <Play size={18} />
              Start Live Session
            </button>
          ) : (
            <button
              type="button"
              className="end-session-button"
              onClick={endSession}
            >
              <VideoOff size={18} />
              End Session
            </button>
          )}

          <p>
            The camera and microphone start together and remain active
            until you end the session.
          </p>
        </div>

        <div className="live-accessibility-note">
          <ShieldCheck size={19} />

          <p>
            <strong>Prototype note:</strong> Automatic sign language
            recognition has not been connected to this camera view.
            Sample phrases demonstrate text-to-speech; they do not
            detect actual signs through the camera.
          </p>
        </div>

        {notice && (
          <div className="studio-notice">
            {notice}
          </div>
        )}
      </div>
    );
  }

  /* ==========================================
     SIGN TO TEXT MODE
  ========================================== */

  if (activeMode === "sign") {
    return (
      <div className="communication-studio">
        <div className="studio-heading">
          <div>
            <span className="eyebrow">MODE 01</span>
            <h2>Sign to Text</h2>
            <p>
              Show your hand gestures to translate them into text.
            </p>
          </div>
        </div>

        <LiveISLRecognition
          onMessage={(message) => addMessage("Sign", message)}
        />
      </div>
    );
  }

  return null;
}
