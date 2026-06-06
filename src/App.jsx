import { useCallback, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import EnvelopeScene from "./components/EnvelopeScene";
import NikahDetails from "./components/NikahDetails";
import Countdown from "./components/Countdown";
import FamilyInvitation from "./components/FamilyInvitation";
import FinalBlessing from "./components/FinalBlessing";
import FloatingParticles from "./components/FloatingParticles";
import { useLenis } from "./hooks/useLenis";
import { invitation } from "./data/invitation";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [contentUnlocked, setContentUnlocked] = useState(false);
  useLenis(contentUnlocked);

  const completeLoading = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const resetToStart = () => {
      window.scrollTo(0, 0);
    };

    resetToStart();
    requestAnimationFrame(resetToStart);
    window.addEventListener("pageshow", resetToStart);

    return () => {
      window.removeEventListener("pageshow", resetToStart);
    };
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (!contentUnlocked) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [contentUnlocked]);

  useEffect(() => {
    const reloadRestoredPage = (event) => {
      if (event.persisted) window.location.reload();
    };

    window.addEventListener("pageshow", reloadRestoredPage);
    return () => window.removeEventListener("pageshow", reloadRestoredPage);
  }, []);

  return (
    <div className="mobile-matte min-h-screen bg-ivory text-ink">
      {!loaded && <Preloader onComplete={completeLoading} />}
      <div className="mobile-only-frame">
        <div className={loaded ? "opacity-100" : "opacity-0"}>
          <EnvelopeScene
            invitation={invitation}
            onRevealComplete={() => setContentUnlocked(true)}
          />
          {contentUnlocked && (
            <main className="content-unlocked">
              <FamilyInvitation family={invitation.family} />
              <NikahDetails event={invitation.event} />
              <Countdown date={invitation.event.date} />
              <FinalBlessing />
            </main>
          )}
        </div>
        {contentUnlocked && <FloatingParticles density={18} />}
      </div>
    </div>
  );
}
