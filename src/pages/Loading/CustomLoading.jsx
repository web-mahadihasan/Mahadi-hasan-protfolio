import { useEffect, useState } from "react"
import "./CustomLoading.css"


export default function CustomLoading() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className=" min-h-screen flex items-center justify-center bg-transparent">
      <div className="relative">
        {/* Outlined Text Layer */}
        <h1
          className="text-7xl md:text-8xl font-bold tracking-wider text-transparent"
          style={{
            WebkitTextStroke: "2px #A6ADBB",
          }}
        >
          MAHADI
        </h1>

        {/* First Animation Set */}
        <h1
          className={`
            absolute inset-0 
            text-7xl md:text-8xl font-bold tracking-wider
            text-main
            ${isAnimating ? "animate-fill-left-bottom" : "clip-initial-left-bottom"}
          `}
        >
          MAHADI
        </h1>

        <h1
          className={`
            absolute inset-0 
            text-7xl md:text-8xl font-bold tracking-wider
            text-main
            ${isAnimating ? "animate-fill-right-top" : "clip-initial-right-top"}
          `}
        >
          MAHADI
        </h1>

        {/* Second Animation Set */}
        <h1
          className={`
            absolute inset-0 
            text-7xl md:text-8xl font-bold tracking-wider
            text-black
            ${isAnimating ? "animate-fill-left-top" : "clip-initial-left-top"}
          `}
        >
          MAHADI
        </h1>

        <h1
          className={`
            absolute inset-0 
            text-7xl md:text-8xl font-bold tracking-wider
            text-black
            ${isAnimating ? "animate-fill-right-bottom" : "clip-initial-right-bottom"}
          `}
        >
          MAHADI
        </h1>
      </div>

      <style jsx>{`
        @keyframes clipPathLeftBottom {
          0%, 100% {
            clip-path: polygon(0 100%, 0 100%, 0 100%);
          }
          25%, 75% {
            clip-path: polygon(0 0, 100% 100%, 0 100%);
          }
          50% {
            clip-path: polygon(0 0, 100% 100%, 100% 100%);
          }
        }

        @keyframes clipPathRightTop {
          0%, 100% {
            clip-path: polygon(100% 0, 100% 0, 100% 0);
          }
          25%, 75% {
            clip-path: polygon(100% 0, 100% 100%, 0 0);
          }
          50% {
            clip-path: polygon(0 0, 100% 100%, 0 0);
          }
        }

        @keyframes clipPathLeftTop {
          0%, 50%, 100% {
            clip-path: polygon(0 0, 0 0, 0 0);
          }
          75% {
            clip-path: polygon(0 100%, 100% 0, 0 0);
          }
        }

        @keyframes clipPathRightBottom {
          0%, 50%, 100% {
            clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
          }
          75% {
            clip-path: polygon(100% 0, 100% 100%, 0 100%);
          }
        }

        .clip-initial-left-bottom {
          clip-path: polygon(0 100%, 0 100%, 0 100%);
        }

        .clip-initial-right-top {
          clip-path: polygon(100% 0, 100% 0, 100% 0);
        }

        .clip-initial-left-top {
          clip-path: polygon(0 0, 0 0, 0 0);
        }

        .clip-initial-right-bottom {
          clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
        }

        .animate-fill-left-bottom {
          animation: clipPathLeftBottom 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-fill-right-top {
          animation: clipPathRightTop 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-fill-left-top {
          animation: clipPathLeftTop 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-fill-right-bottom {
          animation: clipPathRightBottom 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  )
}