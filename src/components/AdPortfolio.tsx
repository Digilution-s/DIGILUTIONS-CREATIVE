import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft,
  ChevronRight,
  FileText, 
  X, 
  User
} from 'lucide-react';
import { VIDEO_ADS } from '../data/content';
import { VideoAdItem } from '../types';

interface AdPortfolioProps {
  onOpenOrderModal: (planId?: string) => void;
  onScrollToBrief: () => void;
}

export const AdPortfolio: React.FC<AdPortfolioProps> = ({ onOpenOrderModal, onScrollToBrief }) => {
  const [selectedNiche, setSelectedNiche] = useState<string>('All');
  const [activeAd, setActiveAd] = useState<VideoAdItem>(VIDEO_ADS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [inspectingAd, setInspectingAd] = useState<VideoAdItem | null>(null);

  // Mobile horizontal carousel state
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);
  const [mobileMuted, setMobileMuted] = useState<boolean>(true);
  const [mobileCurrentTime, setMobileCurrentTime] = useState<number>(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const mobileVideoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const niches = ['All', 'Skincare & D2C', 'Consumer Tech', 'Health & Fitness', 'Fashion & Lifestyle', 'Food & Beverage'];

  const filteredAds = selectedNiche === 'All' 
    ? VIDEO_ADS 
    : VIDEO_ADS.filter(ad => ad.niche === selectedNiche);

  // Sync playback for ads when video tag is absent
  useEffect(() => {
    let interval: any;
    if (isPlaying && !activeAd.videoUrl) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= activeAd.durationSeconds) {
            return 0; // loop
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeAd]);

  // Handle fallback audio playback for skincare ad if voiceover exists
  useEffect(() => {
    if (!activeAd.videoUrl && activeAd.id === 'ad-skincare-serum') {
      if (!audioRef.current) {
        audioRef.current = new Audio('/videos/skincare-anti-ageing-audio.m4a');
        audioRef.current.loop = true;
      }
      audioRef.current.muted = isMuted;
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, isMuted, activeAd]);

  // Ensure DOM element has muted applied
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Video element play/pause controller
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeAd.videoUrl) return;

    if (isPlaying) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocked unmuted autoplay, mute and try again
          if (!video.muted) {
            video.muted = true;
            setIsMuted(true);
            video.play().catch(() => {});
          }
        });
      }
    } else {
      video.pause();
    }
  }, [isPlaying, activeAd]);

  // When activeAd changes, reset time and handle play
  useEffect(() => {
    setCurrentTime(0);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.load();
      if (isPlaying) {
        video.play().catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
      }
    }
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, [activeAd.id]);

  // Audio mute/unmute controller
  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
      if (!nextMuted && isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Find current subtitle based on timestamp
  const currentSubtitle = activeAd.subtitles
    .slice()
    .reverse()
    .find(s => currentTime >= s.time)?.text || activeAd.subtitles[0].text;

  // Labeled beat tags for Skincare, CMF headphones, and OPN electrolytes ads
  const getBeatLabel = (idx: number, adId: string) => {
    if (adId === 'ad-skincare-serum') {
      const labels = ['0–4s Hook', '4–10s Problem', '10–20s 3-in-1 Solution', '20–26s Product Benefit', '26–29s CTA'];
      return labels[idx] || `${activeAd.subtitles[idx].time}s`;
    }
    if (adId === 'ad-tech-anc-headphones') {
      const labels = ['0–3s Hook', '3–8s Problem', '8–15s Live ANC Demo', '15–20s Product Payoff', '20–24s CTA'];
      return labels[idx] || `${activeAd.subtitles[idx].time}s`;
    }
    if (adId === 'ad-wellness-electrolytes') {
      const labels = ['0–3s Hook', '3–7s Problem', '7–13s Product Demo', '13–17s Key Benefit', '17–20s CTA'];
      return labels[idx] || `${activeAd.subtitles[idx].time}s`;
    }
    return `${activeAd.subtitles[idx].time}s`;
  };

  // Reset mobile carousel on niche change
  useEffect(() => {
    setMobileActiveIndex(0);
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedNiche]);

  // Handle active mobile video playback
  useEffect(() => {
    filteredAds.forEach((ad, idx) => {
      const vid = mobileVideoRefs.current[ad.id];
      if (vid) {
        if (idx === mobileActiveIndex) {
          vid.currentTime = 0;
          vid.muted = mobileMuted;
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [mobileActiveIndex, filteredAds, mobileMuted]);

  const toggleMobileMute = () => {
    const nextMuted = !mobileMuted;
    setMobileMuted(nextMuted);
    Object.values(mobileVideoRefs.current).forEach((vid) => {
      if (vid) {
        vid.muted = nextMuted;
      }
    });
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const cards = container.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
      setMobileActiveIndex(index);
    }
  };

  const handleMobileScroll = () => {
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 14 : 300;
    const index = Math.round(scrollLeft / cardWidth);
    if (index >= 0 && index < filteredAds.length && index !== mobileActiveIndex) {
      setMobileActiveIndex(index);
    }
  };

  return (
    <section id="examples" className="py-12 sm:py-20 md:py-24 bg-[#F7F7F4] border-b border-[#E5E5DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-5 sm:pb-6 border-b border-[#E5E5DF]">
          <div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666660] mb-1.5 sm:mb-2">
              01. PRODUCTION REEL
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#111111] tracking-tight">
              PROVEN VERTICAL AD FORMATS
            </h2>
            <p className="mt-1.5 text-xs sm:text-base text-[#444440] max-w-xl">
              Engineered natively for Meta Reels and TikTok feed dynamics. Native creator pacing, bold text hooks, and direct response psychology.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-medium text-[#666660] hidden sm:inline">
              Tested across 150+ DTC brands
            </span>
            <button
              onClick={() => onOpenOrderModal('sprint-2-ads')}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-md hover:bg-[#bcf72c] active:scale-95 transition-all text-center"
            >
              Order 2 Ads Like These (₹2,499) →
            </button>
          </div>
        </div>

        {/* Niche Filter Bar (Mobile thumb-scrollable row) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {niches.map((niche) => {
            const isActive = selectedNiche === niche;
            return (
              <button
                key={niche}
                onClick={() => setSelectedNiche(niche)}
                className={`min-h-[40px] px-3.5 py-1.5 text-xs font-semibold rounded-lg border whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#444440] border-[#D4D4CD] hover:text-[#111111] hover:border-[#111111]'
                }`}
              >
                {niche}
              </button>
            );
          })}
        </div>

        {/* Desktop / Tablet View: Interactive 9:16 Player + Gallery Grid (Unchanged for Desktop & Tablet) */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active 9:16 Video Player Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full max-w-[320px] xs:max-w-[340px] aspect-[9/16] bg-[#111111] rounded-2xl overflow-hidden border-2 border-[#111111] shadow-[6px_6px_0px_#111111] relative flex flex-col justify-between p-4 text-white cursor-pointer select-none"
            >
              {/* Native HTML5 video player if videoUrl is set */}
              {activeAd.videoUrl ? (
                <video
                  key={activeAd.id}
                  ref={videoRef}
                  src={activeAd.videoUrl}
                  playsInline
                  loop
                  autoPlay
                  preload="auto"
                  muted={isMuted}
                  onTimeUpdate={handleVideoTimeUpdate}
                  onCanPlay={(e) => {
                    if (isPlaying) {
                      e.currentTarget.play().catch(() => {
                        e.currentTarget.muted = true;
                        setIsMuted(true);
                        e.currentTarget.play().catch(() => {});
                      });
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              ) : (
                /* Creator Scene with voiceover */
                <>
                  <div className={`absolute inset-0 bg-gradient-to-b ${activeAd.bgGradient} opacity-95`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                    <div 
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                      style={{ backgroundColor: `${activeAd.avatarColor}15` }}
                    >
                      <User className="w-12 h-12 sm:w-14 sm:h-14 text-white/50" />
                      <div className="absolute bottom-1.5 px-2 py-0.5 bg-black/60 rounded text-[8px] font-mono tracking-tight text-white/80">
                        VERIFIED CREATOR
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-[10px] font-medium text-[#C7FF3D] uppercase tracking-widest font-mono">
                        {activeAd.niche}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white/95">
                        {activeAd.creatorName}
                      </div>
                      <div className="text-[11px] text-white/70 mt-0.5">
                        {activeAd.creatorRole}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Top Bar inside Video Player */}
              <div className="relative z-10 flex items-center justify-between text-xs pt-0.5">
                <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#C7FF3D] animate-ping" />
                  <span>9:16 VERTICAL AD</span>
                </div>

                <div className="flex items-center gap-2">
                  {isMuted && (
                    <button
                      onClick={handleToggleSound}
                      className="text-[9px] font-mono font-bold text-[#111111] bg-[#C7FF3D] hover:bg-[#bcf72c] px-2 py-1 rounded shadow animate-pulse cursor-pointer flex items-center gap-1"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>UNMUTE</span>
                    </button>
                  )}
                  <button
                    onClick={handleToggleSound}
                    aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    className="min-h-[36px] min-w-[36px] flex items-center justify-center p-2 bg-black/70 backdrop-blur-md hover:bg-black/90 rounded border border-white/15 text-white active:scale-90 transition-all cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-[#C7FF3D]" />}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setInspectingAd(activeAd);
                    }}
                    aria-label="Inspect script blueprint"
                    className="min-h-[36px] min-w-[36px] flex items-center justify-center p-2 bg-black/70 backdrop-blur-md hover:bg-black/90 rounded border border-white/15 text-white active:scale-90 transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-white/80" />
                  </button>
                </div>
              </div>

              {/* Angle & Hook Tag in player (shown if fallback view) */}
              <div className="relative z-10 my-auto text-center px-2 pointer-events-none">
                {!activeAd.videoUrl && (
                  <>
                    <div className="inline-block bg-[#C7FF3D] text-[#111111] px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-black tracking-wide uppercase mb-2 shadow">
                      {activeAd.angleLabel}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white leading-tight drop-shadow-md">
                      {activeAd.hookHeadline}
                    </div>
                  </>
                )}
              </div>

              {/* Dynamic Retention Subtitle Box (Alex Hormozi / TikTok Style) */}
              <div className="relative z-10 space-y-2.5 pb-0.5">
                <div className="bg-black/85 backdrop-blur-md border border-white/15 rounded-lg p-2.5 sm:p-3 text-center shadow-lg">
                  <div className="text-[9px] font-mono text-[#C7FF3D] uppercase tracking-wider mb-0.5 flex items-center justify-center gap-1.5">
                    <span>LIVE HOOK & SCRIPT</span>
                    <span>·</span>
                    <span>{Math.floor(currentTime)}s / {activeAd.durationSeconds}s</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white leading-snug tracking-wide">
                    {currentSubtitle}
                  </div>
                </div>

                {/* Progress bar scrubber */}
                <div 
                  className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden relative cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const pct = clickX / rect.width;
                    const targetT = pct * activeAd.durationSeconds;
                    setCurrentTime(targetT);
                    if (videoRef.current) {
                      videoRef.current.currentTime = targetT;
                    }
                    if (audioRef.current) {
                      audioRef.current.currentTime = targetT;
                    }
                  }}
                >
                  <div 
                    className="bg-[#C7FF3D] h-full transition-all duration-300"
                    style={{ width: `${(currentTime / activeAd.durationSeconds) * 100}%` }}
                  />
                </div>

                {/* Controls footer */}
                <div className="flex items-center justify-between text-xs text-white/70 pt-0.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#C7FF3D] transition-colors cursor-pointer py-1"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                  </button>

                  <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-white/90">
                    <span className="text-[#C7FF3D] font-bold">{activeAd.roasMetric}</span>
                    <span>·</span>
                    <span>{activeAd.ctrMetric}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Helper Note below player */}
            <div className="mt-2.5 text-center text-[11px] text-[#666660]">
              Click video to play/pause · Audio voiceover enabled
            </div>
          </div>

          {/* Right Column / Mobile Horizontal Carousel for Ad Examples */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase tracking-wider text-[#666660]">
                CHOOSE ANGLE TO PREVIEW
              </div>
              <div className="text-[11px] text-[#777770] lg:hidden">
                Swipe left / right →
              </div>
            </div>

            {/* On Mobile: Horizontal Snap Carousel; on Desktop: Vertical Stack */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-3 lg:pb-0 mobile-snap-carousel -mx-4 px-4 sm:mx-0 sm:px-0">
              {filteredAds.map((ad) => {
                const isSelected = activeAd.id === ad.id;
                return (
                  <div
                    key={ad.id}
                    onClick={() => {
                      setActiveAd(ad);
                      setCurrentTime(0);
                      setIsPlaying(true);
                    }}
                    className={`min-w-[280px] xs:min-w-[300px] sm:min-w-0 flex-1 p-4 rounded-xl border transition-all cursor-pointer mobile-snap-item shrink-0 ${
                      isSelected
                        ? 'bg-white border-[#111111] shadow-[4px_4px_0px_#111111] -translate-y-0.5'
                        : 'bg-[#F7F7F4] hover:bg-white border-[#D4D4CD] hover:border-[#111111]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#111111] bg-[#C7FF3D] px-2 py-0.5 rounded">
                          {ad.angleLabel}
                        </span>
                        <span className="text-[10px] font-semibold text-[#555550]">· {ad.niche}</span>
                      </div>

                      <div className="text-[11px] font-mono font-extrabold text-[#111111]">
                        {ad.roasMetric}
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-snug mb-1">
                      {ad.hookHeadline}
                    </h3>

                    <p className="text-xs text-[#555550] line-clamp-2 mb-3">
                      {ad.scriptSummary}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E5E5DF] text-xs">
                      <span className="text-[#666660] text-[11px]">
                        {ad.creatorName} ({ad.durationSeconds}s)
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setInspectingAd(ad);
                        }}
                        className="text-xs font-bold text-[#111111] hover:underline flex items-center gap-1 cursor-pointer py-1"
                      >
                        <span>Script Breakdown</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Mobile Action Box */}
            <div className="p-4 bg-white border border-[#111111] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#111111]">
                  Want custom angles for your product?
                </div>
                <div className="text-[11px] sm:text-xs text-[#555550]">
                  Send your link. We extract your customer reviews and create 2 ads in &lt;12 hours.
                </div>
              </div>

              <button
                onClick={onScrollToBrief}
                className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#b5f524] transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Send Us Your Link →
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View: Smooth Touch-Optimized Horizontal Carousel (Mobile Only) */}
        <div className="md:hidden space-y-3.5">
          {/* Header indicator */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#C7FF3D] border border-[#111111]/30 animate-pulse" />
              <span>SWIPE VIDEO FORMATS</span>
            </div>
            <div className="text-[11px] font-mono text-[#666660]">
              {mobileActiveIndex + 1} of {filteredAds.length} ↔
            </div>
          </div>

          {/* Smooth Horizontal Carousel Track */}
          <div 
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 pt-1 no-scrollbar overscroll-x-contain touch-pan-x -mx-4 px-4 scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {filteredAds.map((ad, idx) => {
              const isActiveSlide = idx === mobileActiveIndex;
              const hasVideo = Boolean(ad.videoUrl);

              return (
                <div
                  key={ad.id}
                  className="w-[calc(100vw-3.2rem)] max-w-[305px] h-[465px] xs:h-[490px] shrink-0 snap-center bg-[#111111] rounded-2xl overflow-hidden border-2 border-[#111111] shadow-[3px_3px_0px_#111111] relative flex flex-col justify-between p-3.5 text-white select-none"
                >
                  {/* Visual Background: Video or Creator scene */}
                  {hasVideo ? (
                    <video
                      ref={(el) => { mobileVideoRefs.current[ad.id] = el; }}
                      src={ad.videoUrl}
                      playsInline
                      loop
                      autoPlay
                      muted={mobileMuted}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                      onTimeUpdate={(e) => {
                        if (isActiveSlide) {
                          setMobileCurrentTime(e.currentTarget.currentTime);
                        }
                      }}
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-b ${ad.bgGradient} opacity-95`} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                        <div 
                          className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                          style={{ backgroundColor: `${ad.avatarColor}15` }}
                        >
                          <User className="w-10 h-10 text-white/50" />
                          <div className="absolute bottom-1 px-1.5 py-0.5 bg-black/60 rounded text-[7px] font-mono tracking-tight text-white/80">
                            VERIFIED CREATOR
                          </div>
                        </div>
                        <div className="mt-2.5 text-center">
                          <div className="text-[9px] font-medium text-[#C7FF3D] uppercase tracking-widest font-mono">
                            {ad.niche}
                          </div>
                          <div className="text-sm font-bold text-white/95">
                            {ad.creatorName}
                          </div>
                          <div className="text-[10px] text-white/70 mt-0.5">
                            {ad.creatorRole}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Top Bar inside card */}
                  <div className="relative z-10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[9px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-ping" />
                      <span>9:16 VERTICAL AD</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {hasVideo && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMobileMute();
                          }}
                          className="min-h-[30px] px-2 py-0.5 bg-black/75 backdrop-blur-md hover:bg-black/90 rounded border border-white/15 text-white text-[9px] font-mono font-bold flex items-center gap-1 cursor-pointer"
                          aria-label={mobileMuted ? 'Unmute video audio' : 'Mute video audio'}
                        >
                          {mobileMuted ? (
                            <>
                              <Volume2 className="w-3 h-3 text-[#C7FF3D]" />
                              <span className="text-[#C7FF3D]">UNMUTE</span>
                            </>
                          ) : (
                            <>
                              <VolumeX className="w-3 h-3 text-white/70" />
                              <span>MUTED</span>
                            </>
                          )}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setInspectingAd(ad);
                        }}
                        className="min-h-[30px] min-w-[30px] flex items-center justify-center p-1 bg-black/75 backdrop-blur-md hover:bg-black/90 rounded border border-white/15 text-white/90 cursor-pointer"
                        aria-label="Inspect script blueprint"
                      >
                        <FileText className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Middle Hook / Angle for cards without video */}
                  {!hasVideo && (
                    <div className="relative z-10 my-auto text-center px-2 pointer-events-none">
                      <div className="inline-block bg-[#C7FF3D] text-[#111111] px-2 py-0.5 rounded text-[9px] font-black tracking-wide uppercase mb-1.5 shadow">
                        {ad.angleLabel}
                      </div>
                      <div className="text-xs font-bold text-white leading-tight drop-shadow-md">
                        {ad.hookHeadline}
                      </div>
                    </div>
                  )}

                  {/* Bottom Hormozi-style Dynamic Subtitle & Action */}
                  <div className="relative z-10 space-y-2 mt-auto">
                    <div className="bg-black/85 backdrop-blur-md border border-white/15 rounded-lg p-2.5 text-center shadow-lg">
                      <div className="text-[8px] font-mono text-[#C7FF3D] uppercase tracking-wider mb-0.5 flex items-center justify-center gap-1">
                        <span>{ad.angleLabel}</span>
                        <span>·</span>
                        <span>{ad.roasMetric}</span>
                      </div>
                      <div className="text-[11px] font-black text-white leading-snug tracking-wide line-clamp-2">
                        {isActiveSlide && hasVideo
                          ? (ad.subtitles.slice().reverse().find(s => mobileCurrentTime >= s.time)?.text || ad.subtitles[0].text)
                          : ad.subtitles[0].text}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#C7FF3D] h-full transition-all duration-300"
                        style={{ 
                          width: isActiveSlide && hasVideo 
                            ? `${Math.min(100, (mobileCurrentTime / ad.durationSeconds) * 100)}%` 
                            : '100%' 
                        }}
                      />
                    </div>

                    {/* Order Button inside Card */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenOrderModal('sprint-2-ads');
                      }}
                      className="w-full min-h-[38px] py-1.5 px-3 bg-[#C7FF3D] text-[#111111] font-black text-[11px] rounded-lg border border-[#111111] hover:bg-[#bcf92b] active:scale-95 transition-all shadow-[2px_2px_0px_#111111] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>ORDER 2 ADS (₹2,499) →</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Arrows + Interactive Dots */}
          <div className="flex items-center justify-between px-1 pt-0.5">
            <button
              type="button"
              onClick={() => scrollMobileTo(Math.max(0, mobileActiveIndex - 1))}
              disabled={mobileActiveIndex === 0}
              className={`min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg border text-xs font-bold transition-all ${
                mobileActiveIndex === 0 
                  ? 'border-[#E5E5DF] text-[#AAAAA0] cursor-not-allowed' 
                  : 'border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer'
              }`}
              aria-label="Previous video ad"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {filteredAds.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollMobileTo(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === mobileActiveIndex
                      ? 'w-6 bg-[#111111]'
                      : 'w-2 bg-[#D4D4CD] hover:bg-[#888880]'
                  }`}
                  aria-label={`Go to ad ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollMobileTo(Math.min(filteredAds.length - 1, mobileActiveIndex + 1))}
              disabled={mobileActiveIndex === filteredAds.length - 1}
              className={`min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg border text-xs font-bold transition-all ${
                mobileActiveIndex === filteredAds.length - 1
                  ? 'border-[#E5E5DF] text-[#AAAAA0] cursor-not-allowed' 
                  : 'border-[#111111] bg-white text-[#111111] shadow-[2px_2px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer'
              }`}
              aria-label="Next video ad"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick brief trigger on mobile */}
          <div className="p-3.5 bg-white border border-[#111111] rounded-xl flex items-center justify-between gap-2.5 mt-2">
            <div>
              <div className="text-xs font-extrabold text-[#111111]">
                Want 2 ads like these?
              </div>
              <div className="text-[11px] text-[#555550]">
                Delivered same-day in &lt;12 hours.
              </div>
            </div>

            <button
              type="button"
              onClick={onScrollToBrief}
              className="min-h-[38px] px-3 py-1.5 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded-lg hover:bg-[#b5f524] transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Send Link →
            </button>
          </div>
        </div>
      </div>

      {/* Script Breakdown Inspector Bottom Sheet (Mobile First) */}
      {inspectingAd && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white border-t-2 sm:border-2 border-[#111111] rounded-t-2xl sm:rounded-xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            {/* Mobile Drag Handle Indicator */}
            <div className="w-10 h-1 bg-[#D4D4CD] rounded-full mx-auto mb-3 sm:hidden" />

            <button
              onClick={() => setInspectingAd(null)}
              className="absolute top-4 right-4 p-2 text-[#555550] hover:text-[#111111] rounded-md hover:bg-[#EFEFEA]"
              aria-label="Close Script Blueprint"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] font-mono uppercase tracking-wider text-[#666660] mb-1">
              SCRIPT BLUEPRINT & RETENTION ANALYSIS
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#111111] mb-2 pr-6">
              {inspectingAd.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#555550] mb-4 pb-3 border-b border-[#E5E5DF]">
              <span className="font-bold text-[#111111] bg-[#C7FF3D] px-2 py-0.5 rounded text-[10px]">
                {inspectingAd.angleLabel}
              </span>
              <span>·</span>
              <span>{inspectingAd.durationSeconds}s cut</span>
              <span>·</span>
              <span className="font-mono text-[#111111] font-bold">{inspectingAd.roasMetric}</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="font-bold text-[#111111] mb-1">
                  1. The 0–3s Pattern Interrupt Hook:
                </div>
                <div className="p-3 bg-[#F7F7F4] border border-[#D4D4CD] rounded font-semibold text-[#111111]">
                  {inspectingAd.subtitles[0].text}
                </div>
              </div>

              <div>
                <div className="font-bold text-[#111111] mb-1">
                  2. Full Voiceover & Caption Beats:
                </div>
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {inspectingAd.subtitles.map((sub, idx) => (
                    <div key={idx} className="p-2.5 bg-[#FAF9F6] border border-[#E5E5DF] rounded-lg text-xs text-[#333330]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#111111] bg-[#C7FF3D] px-2 py-0.5 rounded">
                          {getBeatLabel(idx, inspectingAd.id)}
                        </span>
                      </div>
                      <p className="leading-snug">{sub.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#EFEFEA] border border-[#D4D4CD] rounded text-xs text-[#444440]">
                <strong>Why this converts:</strong> {inspectingAd.scriptSummary}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#E5E5DF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <button
                onClick={() => setInspectingAd(null)}
                className="min-h-[44px] px-4 py-2 text-xs font-semibold text-[#555550] hover:text-[#111111] order-2 sm:order-1 text-center"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setInspectingAd(null);
                  onOpenOrderModal('sprint-2-ads');
                }}
                className="min-h-[46px] px-4 py-2.5 text-xs font-bold text-[#111111] bg-[#C7FF3D] border border-[#111111] rounded shadow-[2px_2px_0px_#111111] order-1 sm:order-2 text-center"
              >
                Create Ad With This Angle →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
