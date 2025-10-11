import React from 'react'
import { PiGraduationCap } from "react-icons/pi";
import { IoBookOutline,IoPersonAddOutline  } from "react-icons/io5";
import { CiStar } from "react-icons/ci";


const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="text-center">
        {/* Main Logo Animation */}
        <div className="relative ">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {/* Rotating outer ring */}
            <div className="absolute inset-0 border-4 border-blue-300 border-t-white rounded-full animate-spin"></div>
            
            {/* Pulsing inner circle */}
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center animate-pulse">
              <PiGraduationCap className="text-[30px] text-blue-600" />
            </div>
          </div>
          
          {/* Floating icons animation */}
          <div className="absolute -top-4 -left-4 animate-bounce" style={{ animationDelay: '0s' }}>
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
              <IoBookOutline className="text-[20px] text-blue-800" />
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
              <IoPersonAddOutline className="text-[20px] text-blue-800" />
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
              <CiStar className="text-[20px] text-blue-800" />
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Brand Name */}
        <h4
          className="text-3xl text-white mb-4 animate-pulse"
        
         >
          Lost-Found Hub
        </h4>

        {/* Loading Text */}
        <p className="text-blue-100 text-lg mb-8 animate-pulse">
          Preparing your best experience...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-2 bg-blue-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageLoader