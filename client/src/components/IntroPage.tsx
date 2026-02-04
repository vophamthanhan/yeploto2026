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
      <div className="relative z-20 flex-1 flex flex-col items-center px-4 py-4 pb-8">
        
        {/* Header with logos - TO 2 LẦN */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="./images/logo.png" 
            alt="Hội An Hoa & Organic" 
            className="h-16 md:h-20 lg:h-24 object-contain"
          />
        </motion.div>

        {/* Year End Party Title - TĂNG 1.2 LẦN */}
        <motion.img 
          src="./images/chu.png" 
          alt="Year End Party" 
          className="h-[17rem] md:h-[22rem] lg:h-[29rem] object-contain mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Rules Card - TO HƠN và là focus chính, cao hơn và cách lề dưới xa hơn */}
        <motion.div 
          className="w-full max-w-4xl flex-1 flex flex-col mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="winner-board rounded-2xl p-6 md:p-8 lg:p-10 bg-gradient-to-b from-red-900/95 to-red-950/98 border-3 border-yellow-500/70 shadow-2xl flex-1 flex flex-col">
            {/* Title */}
            <h1 
              className="golden-text text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LOTO TRÚNG THƯỞNG
            </h1>
            
            {/* Rules */}
            <div className="space-y-4 md:space-y-5 text-yellow-100/90 flex-1">
              <h2 
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LUẬT CHƠI:
              </h2>
              
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "var(--font-body)" }}>
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
              className="mt-6 md:mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={onStart}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-red-900 font-bold text-xl md:text-2xl lg:text-3xl px-10 md:px-14 py-5 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-animation"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Play className="w-7 h-7 md:w-9 md:h-9 mr-3" />
                VÀO CHƠI
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
