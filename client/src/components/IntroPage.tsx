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
        backgroundImage: "url('./images/background-red.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      
      {/* Decorative lanterns */}
      <img 
        src="./images/longden.png" 
        alt="Đèn lồng" 
        className="absolute top-0 left-2 w-12 md:w-16 float-animation opacity-90 z-10 pointer-events-none"
        style={{ animationDelay: "0s" }}
      />
      <img 
        src="./images/longden.png" 
        alt="Đèn lồng" 
        className="absolute top-0 right-2 w-12 md:w-16 float-animation opacity-90 z-10 pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />
      
      {/* Chùa Cầu Hội An - Left side */}
      <img 
        src="./images/chua-cau.png" 
        alt="Chùa Cầu Hội An" 
        className="absolute bottom-0 left-0 h-[35%] opacity-70 z-10 pointer-events-none object-contain"
      />
      
      {/* Cầu Rồng Đà Nẵng - Right side */}
      <img 
        src="./images/cau-rong.png" 
        alt="Cầu Rồng Đà Nẵng" 
        className="absolute bottom-0 right-0 h-[35%] opacity-70 z-10 pointer-events-none object-contain"
      />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-6">
        
        {/* Header with logos */}
        <motion.div 
          className="flex items-center justify-center gap-4 md:gap-8 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="./images/logo.png" 
            alt="Hội An Hoa & Organic" 
            className="h-14 md:h-20 lg:h-24 object-contain"
          />
        </motion.div>

        {/* Year End Party Title */}
        <motion.img 
          src="./images/chu.png" 
          alt="Year End Party" 
          className="h-20 md:h-28 lg:h-36 object-contain mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Rules Card */}
        <motion.div 
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="winner-board rounded-xl p-4 md:p-6 lg:p-8 bg-gradient-to-b from-red-900/95 to-red-950/98 border-2 border-yellow-500/60 shadow-2xl">
            {/* Title */}
            <h1 
              className="golden-text text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LOTO TRÚNG THƯỞNG
            </h1>
            
            {/* Rules */}
            <div className="space-y-3 md:space-y-4 text-yellow-100/90">
              <h2 
                className="text-lg md:text-xl lg:text-2xl font-semibold text-yellow-400"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LUẬT CHƠI:
              </h2>
              
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg" style={{ fontFamily: "var(--font-body)" }}>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Mỗi người chơi nhận một tờ lô tô có các con số ngẫu nhiên.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>MC sẽ bốc từng con số và đọc to.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Người chơi nào có đủ các số trên một hàng ngang trên tờ lô tô của mình sẽ hô "KINH" và là người chiến thắng.</span>
                </li>
              </ul>
            </div>

            {/* Start Button */}
            <motion.div 
              className="mt-6 md:mt-8 flex justify-center"
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
