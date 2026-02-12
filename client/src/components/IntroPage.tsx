/**
 * Intro Page - Hiển thị luật chơi trước khi vào game
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface IntroPageProps {
  onStart: () => void;
}

export default function IntroPage({ onStart }: IntroPageProps) {
  return (
    <div 
      className="h-screen w-full relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: "url('./images/background-hunghiephuy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      
      {/* Decorative lanterns - hidden as background has them */}
      
      {/* Chùa Cầu Hội An - Left side - reduced */}
      <img 
        src="./images/chua-cau.png" 
        alt="Chùa Cầu Hội An" 
        className="absolute bottom-0 left-0 h-[25%] md:h-[30%] opacity-25 z-10 pointer-events-none object-contain"
      />
      
      {/* Cầu Rồng Đà Nẵng - Right side - reduced */}
      <img 
        src="./images/cau-rong.png" 
        alt="Cầu Rồng Đà Nẵng" 
        className="absolute bottom-0 right-0 h-[25%] md:h-[30%] opacity-25 z-10 pointer-events-none object-contain"
      />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex flex-col items-center px-4 py-2 pb-6">
        
        {/* Header - hidden to not cover logo */}
        <div className="h-4 md:h-6"></div>

        {/* Year End Party Title - smaller to not cover logo */}
        <motion.img 
          src="./images/chu.png" 
          alt="Year End Party" 
          className="h-24 md:h-32 lg:h-40 object-contain mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Rules Card - positioned lower to not cover center logo */}
        <motion.div 
          className="w-full max-w-3xl flex-1 flex flex-col justify-end mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="winner-board rounded-2xl p-5 md:p-6 lg:p-8 bg-gradient-to-b from-red-900/95 to-red-950/98 border-3 border-yellow-500/70 shadow-2xl flex flex-col">
            {/* Title */}
            <h1 
              className="golden-text text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LOTO TRÚNG THƯỞNG
            </h1>
            
            {/* Rules */}
            <div className="space-y-2 md:space-y-3 text-yellow-100/90">
              <h2 
                className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-400"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LUẬT CHƠI:
              </h2>
              
              <ul className="space-y-2 md:space-y-3 text-base md:text-lg lg:text-xl" style={{ fontFamily: "var(--font-body)" }}>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl">•</span>
                  <span>Mỗi người chơi nhận một tờ vé có các con số ngẫu nhiên.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl">•</span>
                  <span>MC sẽ quay số lồng cầu và hô lô tô cho người chơi dò trên tờ vé của mình</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl">•</span>
                  <span>Người chơi nào có đủ 4 số trên một hàng ngang sẽ nhận được một phần quà đến từ chương trình.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1 text-xl">•</span>
                  <span className="font-semibold text-yellow-300">Lưu ý: Mỗi người chỉ nhận được 1 phần quà</span>
                </li>
              </ul>
            </div>

            {/* Start Button */}
            <motion.div 
              className="mt-4 md:mt-6 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={onStart}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-red-900 font-bold text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-animation"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 mr-2" />
                VÀO CHƠI
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
