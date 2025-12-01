'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { X, Menu } from 'lucide-react';

// 1. Định nghĩa kiểu dữ liệu cho Card
interface CardData {
  id: number;
  src: string;
  alt: string;
}

// Dữ liệu mẫu cho các card
const initialCardData: CardData[] = [
  { id: 1, src: 'Omega 3.png', alt: 'Công thức 1' },
  { id: 2, src: 'Sugar Pill.png', alt: 'Công thức 2' },
  { id: 3, src: 'Vitamin C.png', alt: 'Công thức 3' },
  { id: 4, src: 'Bee Pollen.png', alt: 'Công thức 4' },
  { id: 5, src: 'Gummy Bear.png', alt: 'Công thức 5' },
  { id: 6, src: 'Multi-vitamins.png', alt: 'Công thức 6' },
  { id: 7, src: 'Caffeine Tablet.png', alt: 'Công thức 7' },
  { id: 8, src: 'Cough Syrup.png', alt: 'Công thức 8' },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const [isOpen, setOpen] = useState(false);

  // Carousel State Management
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = initialCardData.length;

  // Carousel Logic Functions
  const goToNext = () => {
    // Logic vòng lặp: Nếu đang ở cuối, quay lại đầu (index 0).
    setActiveIndex((prevIndex) =>
      prevIndex === totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    // Logic vòng lặp: Nếu đang ở đầu, chuyển đến cuối.
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  // Hàm lấy chỉ mục của card bên trái/phải dựa trên activeIndex.
  const getCardIndex = (offset: number): number => {
    return (activeIndex + offset + totalCards) % totalCards;
  };

  const leftCardIndex = getCardIndex(-1);
  const centerCardIndex = activeIndex;
  const rightCardIndex = getCardIndex(1);

  const leftCard = initialCardData[leftCardIndex];
  const centerCard = initialCardData[centerCardIndex];
  const rightCard = initialCardData[rightCardIndex];

  // Logic hiển thị card (chỉ hiển thị đủ 3 card nếu có >= 3 card)
  const showLeft =
    totalCards >= 3 || (totalCards === 2 && leftCardIndex !== rightCardIndex);
  const showRight =
    totalCards >= 3 || (totalCards === 2 && rightCardIndex !== leftCardIndex);

  return (
    <div className='min-h-screen flex flex-col bg-white text-gray-900'>
      <header className='w-full bg-white py-6 px-4 md:px-8 flex justify-between items-center border-b border-gray-100 sticky top-0 z-50'>
        {/* ... (Phần Header không thay đổi) ... */}
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <img src='logo-footer.png' alt='' className='w-16' />
          <span className='font-primary font-bold text-xl tracking-tighter ml-2'>
            XALO ENGLISH
          </span>
        </div>

        {/* Menu Desktop*/}
        <div className='hidden md:flex items-center justify-end space-x-6 text-sm font-medium text-gray-500'>
          <a href='/' className='hover:text-black transition-colors'>
            HOME
          </a>
          <a
            href='https://xalo.edu.vn/'
            className='hover:text-black transition-colors'
            target='_blank'
            rel='noreferrer'
          >
            ABOUT XALO
          </a>
          <Button
            onClick={handleStartQuiz}
            className='bg-[#9494FF] hover:bg-[#8494FF] text-white rounded-md px-6 font-bold uppercase text-xs tracking-widest'
          >
            Start Test
          </Button>
        </div>

        {/* Mobile Menu Trigger*/}
        <div
          className='md:hidden cursor-pointer p-2'
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <X className='w-8 h-8 text-black transition-transform duration-300' />
          ) : (
            <Menu className='w-8 h-8 text-black transition-transform duration-300' />
          )}
        </div>

        {isOpen && (
          <div className='absolute font-primary top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col px-6 pb-8 md:hidden animate-in slide-in-from-top-5 duration-200'>
            <a
              href='/'
              className='py-4 border-b border-gray-100 text-sm font-bold uppercase tracking-widest hover:text-blue-600'
            >
              HOME
            </a>

            <a
              href='https://xalo.edu.vn/'
              className='py-4 border-b border-gray-100 text-sm font-bold uppercase tracking-widest hover:text-blue-600 mb-6'
              target='_blank'
              rel='noreferrer'
            >
              ABOUT
            </a>

            <Button
              onClick={handleStartQuiz}
              className='w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-base font-bold uppercase tracking-widest rounded-sm shadow-md'
            >
              RESERVE YOUR CLASS
            </Button>
          </div>
        )}
      </header>

      <main className='flex-grow'>
        {/* ... (Phần Hero và About không thay đổi) ... */}
        <div className='w-full mx-auto px-4 md:px-8 pt-12 pb-20'>
          <h1 className='text-6xl md:text-9xl font-black tracking-tighter text-center font-primary'>
            DECODE YOUR <span className='text-[#9494FF]'>IELTS DNA</span>
          </h1>
        </div>
        <div className='w-full'>
          {/* Hero Section */}
          <div className='grid grid-cols-1 md:grid-cols-12'>
            {/* Left Image Placeholder */}
            <div className='md:col-span-8 bg-gray-200 min-h-[400px] relative overflow-hidden'>
              <img
                src='second.png'
                alt=''
                className='w-full h-full absolute inset-0 object-cover'
              />
            </div>

            {/* Right Content */}
            <div className='md:col-span-4 min-h-[400px] flex flex-col justify-center bg-gray-50 p-8 gap-10'>
              <div>
                <h2 className='text-3xl md:text-4xl font-medium font-primary leading-tight'>
                  Giải mã gen học tập của riêng bạn - và cách “tái lập trình” để
                  đạt band mục tiêu.
                </h2>
              </div>
              <Button
                onClick={handleStartQuiz}
                className='w-full bg-[#9494FF] hover:bg-[#8494FF] font-primary text-white py-8 text-lg font-bold uppercase tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all'
              >
                Bắt đầu
              </Button>
            </div>
          </div>

          {/* Sub-hero Grid */}
          <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className='bg-gray-100 p-8 min-h-[400px] flex flex-col justify-between hover:bg-gray-200 transition-colors md:col-span-4'>
              <h3 className='text-2xl leading-tight font-primary'>
                Được thiết kế bởi đội ngũ chuyên gia ielts của xa lộ english
              </h3>
              <p className='text-xs text-gray-500'>
                Tìm "liều thuốc học" phù hợp nhất cho chính mình. Bắt đầu ngay
                để không còn "học mãi mà không tiến".
              </p>
            </div>
            <div className='bg-gray-100 p-8 min-h-[400px] flex flex-col justify-between hover:bg-gray-200 transition-colors md:col-span-4'>
              <h3 className='text-2xl leading-tight font-primary'>
                Bản phân tích cá nhân hóa của riêng bạn
              </h3>
              <p className='text-xs text-gray-500'>
                Chẩn đoán trình độ học tập ngay tại nhà! Bắt đầu hành trình "tái
                lập trình" IELTS của bạn.
              </p>
            </div>
            <div className='bg-gray-300 min-h-[400px] flex items-center justify-center relative overflow-hidden md:col-span-4'>
              <img
                src='third.png'
                alt=''
                className='w-full h-full absolute inset-0 object-cover'
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className='mt-8'>
          <div className='w-full'>
            {/* Header Section*/}
            <div className='flex items-baseline mb-1 ml-4'>
              <span className='font-playfair italic text-3xl sm:text-4xl lg:text-5xl mr-4'>
                ABOUT
              </span>
              <span className='text-5xl md:text-6xl lg:text-8xl font-black text-[#9494FF] tracking-tighter font-primary'>
                OUR QUIZ
              </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 border-t border-gray-300'>
              {/* Sidebar */}
              <div className='md:col-span-3 border-r border-gray-300'>
                <div className='p-6 border-b border-gray-300 bg-[#F2F4FD]'>
                  <h3 className='text-xl sm:text-3xl font-bold lowercase'>
                    khía cạnh phân loại
                  </h3>
                </div>

                <div className='p-5 border-b border-gray-300'>
                  <h4 className='font-bold text-lg md:text-xl mb-2 uppercase'>
                    KNOWLEDGE (KIẾN THỨC)
                  </h4>
                  <p className='text-base text-gray-800 leading-relaxed'>
                    Mức độ hiểu biết về ngữ pháp, từ vựng, và các khả năng ngôn
                    ngữ cũng như chiến lược, cách thức làm từng dạng bài trong
                    từng kỹ năng riêng biệt.
                  </p>
                </div>

                <div className='p-5 border-b border-gray-300'>
                  <h4 className='font-bold text-lg md:text-xl mb-2 uppercase'>
                    TEST-TAKING SKILLS (KỸ NĂNG LÀM BÀI THI)
                  </h4>
                  <p className='text-base text-gray-800 leading-relaxed'>
                    Kỹ năng quản lý thời gian, nhận biết dạng bài, và áp dụng kỹ
                    thuật làm bài.
                  </p>
                </div>

                <div className='p-5'>
                  <h4 className='font-bold text-lg md:text-xl mb-2 uppercase'>
                    BEHAVIORAL PATTERNS (HÀNH VI HỌC TẬP)
                  </h4>
                  <p className='text-base text-gray-800 leading-relaxed'>
                    Thái độ, hành vi, tâm lý và phương pháp học tập.
                  </p>
                </div>
              </div>

              <div className='md:col-span-9 bg-[#A0A0A0] min-h-[400px] relative overflow-hidden'>
                <img
                  src='/fouth.png'
                  alt=''
                  className='w-full h-full absolute inset-0 object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action / Formulas */}
        <div className='bg-[#808CFD] text-white py-20 text-center'>
          <p className='text-xs text-black font-bold tracking-widest uppercase mb-4'>
            YOUR IELTS DNA
          </p>
          <h2 className='font-playfair text-black italic text-5xl md:text-6xl mb-8 '>
            MEET THE FORMULAS
          </h2>
          <Button
            onClick={handleStartQuiz}
            className='bg-white text-black text-xl font-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-sm uppercase mb-12'
          >
            Bắt đầu
          </Button>

          {/* 4. CAROUSEL SECTION: Thay thế code placeholder cũ bằng logic Carousel */}
          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center overflow-hidden relative'>
              {/* Card Trái (Left Card) */}
              {showLeft && (
                <div
                  key={leftCard.id} // Quan trọng cho animation khi chuyển card
                  className='w-56 h-56 bg-white rounded-xl transform -rotate-6 border-4 border-black transition-all duration-500 ease-in-out opacity-70 scale-90'
                >
                  {/* Sử dụng object-cover và w-full h-full để ảnh hiển thị đúng */}
                  <img
                    src={leftCard.src}
                    alt={leftCard.alt}
                    className='w-full h-full object-cover rounded-xl'
                  />
                </div>
              )}

              {/* Card Trung Tâm (Center/Active Card) */}
              <div
                key={centerCard.id}
                className='w-64 h-64 bg-white rounded-xl z-10 border-4 border-black transition-all duration-500 ease-in-out shadow-2xl'
              >
                <img
                  src={centerCard.src}
                  alt={centerCard.alt}
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>

              {/* Card Phải (Right Card) */}
              {showRight && (
                <div
                  key={rightCard.id}
                  className='w-56 h-56 bg-white rounded-xl transform rotate-6 border-4 border-black transition-all duration-500 ease-in-out opacity-70 scale-90'
                >
                  <img
                    src={rightCard.src}
                    alt={rightCard.alt}
                    className='w-full h-full object-cover rounded-xl'
                  />
                </div>
              )}
            </div>

            {/* 5. Navigation Arrows */}
            <div className='flex justify-center space-x-4 mt-8'>
              {/* Nút Mũi Tên Trái (Previous) */}
              <button
                onClick={goToPrev}
                className='flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 shadow-md'
                aria-label='Previous Card'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 19l-7-7 7-7'
                  ></path>
                </svg>
              </button>

              {/* Nút Mũi Tên Phải (Next) */}
              <button
                onClick={goToNext}
                className='flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 shadow-md'
                aria-label='Next Card'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ... (Phần Footer không thay đổi) ... */}
      <footer className='bg-gray-50 py-12 px-4 md:px-8 border-t border-gray-200'>
        <div className='flex flex-col sm:flex-row justify-between items-start mb-12'>
          <div className='flex items-center space-x-1'>
            <img src='logo-footer.png' alt='' className='w-16 md:w-32' />
          </div>
          <span className='font-playfair italic text-3xl md:text-4xl lg:text-6xl'>
            XA LỘ ENGLISH
          </span>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-start mb-12 text-xs font-bold uppercase tracking-wider'>
          <div>
            <h4 className='mb-4 text-gray-400'>CONTACT</h4>
            <p>Email: hello@xalo.edu.vn</p>
            <p>Phone: 0793 159 413</p>
          </div>
          <div>
            <h4 className='mb-4 text-gray-400'>OPENING HOURS</h4>
            <div className='flex justify-between gap-2 max-w-xs'>
              <span>MON - SAT</span>
              <span>9AM - 10PM</span>
            </div>
            <div className='flex justify-between max-w-xs'>
              <span>SUNDAYS</span>
              <span>8AM - 12PM</span>
            </div>
          </div>
          <div>
            <h4 className='mb-4 text-gray-400'>SOCIAL</h4>
            <ul className='space-y-1'>
              <li>
                <a
                  rel='stylesheet'
                  href='https://www.instagram.com/xalo.english/'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  rel='stylesheet'
                  href='https://www.instagram.com/xalo.english/'
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
